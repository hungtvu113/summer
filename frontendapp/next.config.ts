import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false, // Set to true only if you want to ignore ESLint errors
  },
  /* config options here */
};

export default nextConfig;
