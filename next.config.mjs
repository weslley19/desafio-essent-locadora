/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: '/sobre',
        destination: '/about',
      },
      {
        source: '/autenticar',
        destination: '/authentication',
      },
    ];
  }
};

export default nextConfig;
