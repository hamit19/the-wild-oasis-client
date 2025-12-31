/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dclaevazetcjjkrzczpc.supabase.co",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
