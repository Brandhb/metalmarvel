/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ]
},
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:3000"    
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  reactStrictMode: true,
  basePath: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;