// next.config.ts
const nextConfig = {

  // 👇 erre szükség van, hogy a middleware működjön
  experimental: {
    serverActions: {}
  }
};

module.exports = nextConfig;
