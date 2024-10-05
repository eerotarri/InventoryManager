/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "http://localhost:3000",
        "http://localhost:3002",
        "https://inventaario.eerotarri.fi",
      ],
    },
  },
};

export default nextConfig;
