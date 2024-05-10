/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/sobre',
        destination: '/about',
      },
    ];
  }
};

export default nextConfig;
