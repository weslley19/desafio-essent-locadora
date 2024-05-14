/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.themoviedb.org',
        port: '',
        pathname: '/t/**',
      },
      {
        protocol: 'https',
        hostname: 'www.freepnglogos.com',
        port: '',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images5.alphacoders.com',
        port: '',
        pathname: '/913/**',
      }
    ]
  },
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: '*' },
        ]
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
      {
        source: '/tipos-usuario',
        destination: '/type-person'
      },
      {
        source: '/filmes/categorias',
        destination: '/movies/categories'
      }
    ];
  }
};

export default nextConfig;
