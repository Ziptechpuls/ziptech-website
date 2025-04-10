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
  // 静的ファイルの配信設定を追加
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  basePath: ''
};

module.exports = nextConfig;