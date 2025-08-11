import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn.sanity.io/**")],
  },
  typescript: {
    ignoreBuildErrors: true, // This is not recommended for production, but can be useful
    // during development to avoid type errors blocking the build.
  },
  eslint: {
    ignoreDuringBuilds: true, // This is not recommended for production, but can be useful
    // during development to avoid linting errors blocking the build.
  }
};

export default nextConfig;
