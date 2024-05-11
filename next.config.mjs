/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.themoviedb.org',
        port: '',
        pathname: '/t/**',
      }
    ]
  },
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
      },
      {
        source: '/alugados',
        destination: '/rented',
      },
      {
        source: '/reservas-pendentes',
        destination: '/reserved',
      },
    ];
  }
};

export default nextConfig;
