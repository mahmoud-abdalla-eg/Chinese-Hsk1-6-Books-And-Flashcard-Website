import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function createFetchWithTimeout(timeoutMs = 20000) {
  return (url, options = {}) => {
    try {
      return fetch(url, {
        ...options,
        signal: options.signal || AbortSignal.timeout(timeoutMs),
      });
    } catch {
      return fetch(url, options);
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
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || supabaseServiceKey;

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
