/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
    ],
  },
};

export default nextConfig;
