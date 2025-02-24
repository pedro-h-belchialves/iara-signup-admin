import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "iara-api.odonto5v.com.br",
        "iara-signup-admin.vercel.app",
      ],
    },
  },
};

export default nextConfig;
