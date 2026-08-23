import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pure static frontend: no server, no persistence. Deployable to any host.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
