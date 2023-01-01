/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
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
  // async rewrites() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "https://gift-pursue-290895.framer.app/",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
