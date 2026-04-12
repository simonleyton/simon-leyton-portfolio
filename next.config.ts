import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.0.19:3001"],
  images: {
    formats: ["image/webp"],
    deviceSizes: [768, 1280, 1920],
  },
};

export default nextConfig;
