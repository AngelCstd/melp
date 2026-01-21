import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/melp",
  assetPrefix: "/melp/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
