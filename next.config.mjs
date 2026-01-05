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
      {
        protocol: "https",
        hostname: "wmnqsccvilbwymnclngh.supabase.co",
        pathname: "/storage/v1/object/public/cabin-images/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
