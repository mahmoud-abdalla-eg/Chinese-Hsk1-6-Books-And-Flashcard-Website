/**
 * Validates a redirect target URL to prevent open redirect vulnerabilities (CWE-601).
 * Rejects protocol-relative URLs (e.g. //evil.com), backslash evasion, and external schemes.
 *
 * @param {string|null|undefined} target - The requested redirect target
 * @param {string} fallback - The safe fallback path (defaults to '/dashboard')
 * @returns {string} Safe relative redirect path
 */
export function getSafeRedirectPath(target, fallback = "/dashboard") {
  if (!target || typeof target !== "string") {
    return fallback;
  }

  const clean = target.trim();

  // Reject empty string or paths that do not start with a single slash
  if (!clean.startsWith("/") || clean.startsWith("//") || clean.startsWith("/\\")) {
    return fallback;
  }

  // Reject paths containing scheme or control characters
  if (clean.includes(":") || clean.includes("\\")) {
    return fallback;
  }

  // Must only contain safe URL path and query characters
  const isSafeRelativePath = /^\/[a-zA-Z0-9_\-\/\.\?=&%#~]*$/.test(clean);
  if (!isSafeRelativePath) {
    return fallback;
  }

  return clean;
}
