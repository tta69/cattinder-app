// app/[locale]/layout.tsx
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl'; // ← Helyes modul
import { getMessages } from 'next-intl/server'; // ← Csak akkor használd, ha tényleg létezik (v3 felett)

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages(); // vagy: getMessages(locale)

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
