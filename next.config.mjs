/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/health-wellness-portal',
  assetPrefix: '/health-wellness-portal/',
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
