
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'hu', 'ru'],
  defaultLocale: 'ru'
});

export const config = {
  matcher: ['/((?!_next|.*\..*).*)']
};
