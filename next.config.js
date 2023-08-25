/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV == "production";
const nextConfig = {
  assetPrefix: isProd
    ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/"
    : undefined,
  images: {
    domains: ["skillslash-cdn.s3.ap-south-1.amazonaws.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
