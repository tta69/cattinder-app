// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'hu', 'ru'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
