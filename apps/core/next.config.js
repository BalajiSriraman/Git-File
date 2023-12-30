/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: "my-value",
  },
  output: "standalone",
  experimental: {
    typedRoutes: false,
  },
  output: "standalone",
};

module.exports = nextConfig;
