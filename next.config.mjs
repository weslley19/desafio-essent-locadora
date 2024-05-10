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
      {
        source: '/pessoas',
        destination: '/person',
      },
      {
        source: '/filmes',
        destination: '/movies',
      }
    ];
  }
};

export default nextConfig;
