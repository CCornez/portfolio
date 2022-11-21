const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  images: {
    domains: ['localhost', 'loremflickr.com'],
  },
};

module.exports = nextConfig;
