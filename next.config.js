/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  experimental: {
    appDir: false,
  },
};

export default nextConfig;

