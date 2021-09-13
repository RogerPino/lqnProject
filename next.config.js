/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: "/home",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
        basePath: false,
      },
    ];
  },
};
