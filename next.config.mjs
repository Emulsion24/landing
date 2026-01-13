/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },{
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // 1. Add this section to handle map libraries
  transpilePackages: ['react-map-gl', '@deck.gl/layers', '@deck.gl/react', '@deck.gl/core', 'mapbox-gl'],
  
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;