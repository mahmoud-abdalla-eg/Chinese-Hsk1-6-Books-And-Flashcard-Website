// Auto-enable proxy support for Node.js fetch if proxy environment variables are detected
if (
  process.env.HTTPS_PROXY ||
  process.env.HTTP_PROXY ||
  process.env.ALL_PROXY
) {
  const currentOptions = process.env.NODE_OPTIONS || "";
  if (!currentOptions.includes("--use-env-proxy")) {
    process.env.NODE_OPTIONS = `${currentOptions} --use-env-proxy`.trim();
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  reactCompiler: true,
};

export default nextConfig;
