// next.config.ts
const nextConfig = {
  i18n: {
    locales: ['en', 'hu', 'ru'],
    defaultLocale: 'en'
  },
  // 👇 erre szükség van, hogy a middleware működjön
  experimental: {
    serverActions: {}
  }
};

module.exports = nextConfig;
