/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  images: {
    unoptimized: true,
  },
  distDir: 'build',
  exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/ru': { page: '/ru' },
    }
  },
}
