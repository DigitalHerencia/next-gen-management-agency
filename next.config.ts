import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Allow public folder images to render without optimization
  },
};

export default nextConfig;
