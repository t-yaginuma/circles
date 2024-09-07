/** @type {import('next').NextConfig} */
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
};

export default nextConfig;
