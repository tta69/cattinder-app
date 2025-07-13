// components/LanguageSwitcher.tsx
'use client';

import { usePathname, useRouter } from 'next-intl/client';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import clsx from 'clsx';

const locales = [
  { code: 'en', flag: '/flags/gb.svg', label: 'English' },
  { code: 'hu', flag: '/flags/hu.svg', label: 'Magyar' },
  { code: 'ru', flag: '/flags/ru.svg', label: 'Русский' },
  { code: 'fr', flag: '/flags/fr.svg', label: 'Français' },
  { code: 'de', flag: '/flags/de.svg', label: 'Deutsch' }
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      {locales.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => handleSwitch(code)}
          className={clsx(
            'transition transform hover:scale-110',
            code === locale && 'opacity-100',
            code !== locale && 'opacity-50'
          )}
          title={label}
        >
          <Image
            src={flag}
            alt={label}
            width={32}
            height={32}
            className="rounded shadow"
          />
        </button>
      ))}
    </div>
  );
}
