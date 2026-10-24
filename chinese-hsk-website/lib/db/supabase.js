import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_SERVICE_KEY;

let proxyAgentCache = null;

async function getProxyDispatcher() {
  if (proxyAgentCache !== null) return proxyAgentCache;

  if (typeof window === "undefined" && typeof process !== "undefined") {
    const proxyUrl =
      process.env?.HTTPS_PROXY || process.env?.HTTP_PROXY || process.env?.ALL_PROXY;

    if (proxyUrl) {
      try {
        const { ProxyAgent, fetch: uFetch } = await import("undici");
        proxyAgentCache = { dispatcher: new ProxyAgent(proxyUrl), fetch: uFetch };
        return proxyAgentCache;
      } catch {
        proxyAgentCache = false;
        return false;
      }
    }
  }

  proxyAgentCache = false;
  return false;
}

function createFetchWithTimeout(timeoutMs = 20000) {
  return async (url, options = {}) => {
    const proxy = await getProxyDispatcher();
    const fetchFn = proxy && proxy.fetch ? proxy.fetch : fetch;
    const fetchOptions = {
      ...options,
      signal: options.signal || AbortSignal.timeout(timeoutMs),
      ...(proxy && proxy.dispatcher ? { dispatcher: proxy.dispatcher } : {}),
    };

    try {
      return await fetchFn(url, fetchOptions);
    } catch (err) {
      if (err.name === "TimeoutError" || err.name === "AbortError") {
        console.warn(
          `[Supabase Fetch Timeout] Request to ${typeof url === "string" ? url : "endpoint"} timed out after ${timeoutMs}ms.`,
        );
      }
      throw err;
    }
  };
}

/**
 * Public client for client-side or anon-scoped queries
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        global: {
          fetch: createFetchWithTimeout(20000),
        },
      })
    : null;

/**
 * Server-side Admin client using service_role key.
 * Bypasses RLS to perform backend operations, seeds, and admin queries.
 */
let adminClient = null;

export function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || supabaseUrl;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    supabaseServiceKey;

  if (!url || !key) {
    throw new Error(
      "Supabase is not configured. Please set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local",
    );
  }

  if (!adminClient) {
    adminClient = createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
      global: {
        fetch: createFetchWithTimeout(20000),
      },
    });
  }

  return adminClient;
}
