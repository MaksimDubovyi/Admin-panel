/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
module.exports = {
  env: {
    customKey: "my-value",
  },
  images: {
    domains: ["164.92.243.161", "picsum.photos", "a0.muscache.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
