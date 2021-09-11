/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: "/character",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/character",
        permanent: true,
        basePath: false,
      },
    ];
  },
};
