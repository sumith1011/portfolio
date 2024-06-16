/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com/sumith1011/",
      },
    ],
  }
};

module.exports = nextConfig;
