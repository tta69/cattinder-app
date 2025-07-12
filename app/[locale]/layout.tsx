// app/[locale]/layout.tsx
export const dynamicParams = false; // fontos, így tudja előre a nyelveket!
export const dynamic = 'force-static'; // vagy 'force-dynamic', ha inkább SSR kell

import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

const locales = ['en', 'hu', 'ru'];

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  unstable_setRequestLocale(locale);
  return children;
}
// dummy content for layout.tsx
