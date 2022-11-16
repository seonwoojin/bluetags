/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn3.iconfinder.com"],
  },
};

module.exports = nextConfig;
