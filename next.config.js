/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.chec.io']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
