/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  runtimeCaching,
  buildExcludes: [
    /\/*server\/middleware-chunks\/[0-9]*[a-z]*[A-Z]*\.js$/,
    /middleware-manifest\.json$/,
    /middleware-runtime\.js$/,
    /_middleware\.js$/,
    /^.+\\_middleware\.js$/,
  ],
  publicExcludes: ["!robots.txt"],
});

module.exports = withPWA({
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_APP_API_BASE_URL: process.env.NEXT_APP_API_BASE_URL,
  },
  webpack(config) {
    config.resolve.alias.canvas = false;
    return config;
  },
});
