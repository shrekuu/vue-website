/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  // disable eslint during build phase
  eslint: {
    ignoreDuringBuilds: true,
  },

  // disable type-checking during build phase
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
