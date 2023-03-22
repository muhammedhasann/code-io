// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'https://muhammedhasann.github.io/code-io/' : '',
  images: {
    unoptimized: true,
  },
};
