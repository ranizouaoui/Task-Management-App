/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "source.unsplash.com", protocol: "https" }],
  },
  output: 'standalone',  // Add this line
};

export default nextConfig;