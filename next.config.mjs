/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Incremental migration: keep `npm run lint` available, but don't block `next build`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
