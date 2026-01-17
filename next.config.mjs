/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // No pathname restriction needed for all Unsplash images
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;