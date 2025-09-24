/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "api.digital-pa.com.sg"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Matikan ESLint saat build
  },
};

export default nextConfig;
