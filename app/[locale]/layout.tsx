import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from '../../lib/getMessages';
import MobileMenu from '../../components/MobileMenu';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MobileMenu />
          {children}
        </NextIntlClientProvider>
         <NextIntlClientProvider locale={locale} messages={messages}>
    {children}
  </NextIntlClientProvider>
  <Footer />
      </body>
    </html>
  );
}
