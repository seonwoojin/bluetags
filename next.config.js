/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn3.iconfinder.com"],
  },
  async redirects() {
    return [
      {
        source: "/apidoc",
        destination: "/apidoc/index.html",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/example",
        destination: "http://localhost:3000/api/users/example",
      },
    ];
  },
};

module.exports = nextConfig;
