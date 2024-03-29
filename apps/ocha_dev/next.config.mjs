/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
import withPWAInit from 'next-pwa'
import withBundleAnalyzerInit from '@next/bundle-analyzer'

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
})

const withBundleAnalyzer = withBundleAnalyzerInit({
  enabled: process.env.ANALYZE === 'true',
  swcMinify: true,
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

export default withBundleAnalyzer(nextConfig)
