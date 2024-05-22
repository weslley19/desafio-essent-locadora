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
};

export default nextConfig;
