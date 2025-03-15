import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "framerusercontent.com",
      },
    ],
  },
};

export default nextConfig;
