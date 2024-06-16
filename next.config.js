/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sumith1011.github.io",
      },
    ],
  }
};

module.exports = nextConfig;
