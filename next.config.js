/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/AIHOME.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/AIHOME.github.io' : '',
  images: {
    unoptimized: true,
    domains: ['example.com'], // 添加您需要的图片域名
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
