/** @type {import('next').NextConfig} */
import json from "./package.json" assert { type: "json" };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dwixiyvbqbrsernfiuwj.supabase.co",
        port: "",
      },
    ],
  },
  publicRuntimeConfig: {
    json,
  },
};

export default nextConfig;
