/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'
withPWA({
  pwa: {
    dest: 'public',
  },
})
const nextConfig = withPWA({
  reactStrictMode: false,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'raw-loader',
    })
    return config
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
})

export default nextConfig
