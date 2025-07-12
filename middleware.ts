import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'hu', 'ru'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/', '/(en|hu|ru)/:path*'],
};
