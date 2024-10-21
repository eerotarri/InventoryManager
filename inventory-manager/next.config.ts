import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "http://localhost:3000",
        "http://localhost:3002",
        "https://inventaario.eerotarri.fi",
      ],
    },
    reactCompiler: true,
  },
};

export default nextConfig;
