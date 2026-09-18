import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/tools/compare-term-insurance",
        destination: "/term-insurance/best-plans",
        permanent: true,
      },
      {
        source: "/tools/compare-health-insurance",
        destination: "/health-insurance/best-plans",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
