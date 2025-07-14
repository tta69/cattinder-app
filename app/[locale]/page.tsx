'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const languages = [
  { code: 'en', flag: '/flags/en.png' },
  { code: 'hu', flag: '/flags/hu.png' },
  { code: 'ru', flag: '/flags/ru.png' },
  { code: 'fr', flag: '/flags/fr.png' },
  { code: 'de', flag: '/flags/de.png' }
];

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg mb-6">{t('description')}</p>

      <div className="flex justify-center gap-4 mb-8">
        {languages.map(({ code, flag }) => (
          <Link key={code} href={`/${code}`}>
            <Image
              src={flag}
              alt={code}
              width={40}
              height={30}
              className="hover:scale-110 transition"
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
