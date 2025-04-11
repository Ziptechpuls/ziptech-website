/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{リポジトリ名}' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/{リポジトリ名}' : ''
};

module.exports = nextConfig;