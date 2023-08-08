/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "https://skillslash-cdn.s3.ap-south-1.amazonaws.com",
  images: {
    domains: ["skillslash-cdn.s3.ap-south-1.amazonaws.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
