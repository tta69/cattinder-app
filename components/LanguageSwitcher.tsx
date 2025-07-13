'use client';
import Link from 'next-intl/link';
import { usePathname, useRouter } from 'next-intl/client';
import { useLocale } from 'next-intl';
import clsx from 'clsx';

const locales = ['en', 'hu', 'ru'];

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => router.replace(pathname, { locale })}
          className={clsx('px-4 py-2 border rounded', {
            'bg-black text-white': locale === currentLocale,
            'bg-white text-black': locale !== currentLocale
          })}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
