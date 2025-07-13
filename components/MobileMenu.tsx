'use client';

import { useState } from 'react';
import Link from 'next-intl/link';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next-intl/client';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const locales = [
  { code: 'en', flag: '/flags/gb.svg', label: 'English' },
  { code: 'hu', flag: '/flags/hu.svg', label: 'Magyar' },
  { code: 'ru', flag: '/flags/ru.svg', label: 'Русский' },
  { code: 'fr', flag: '/flags/fr.svg', label: 'Français' },
  { code: 'de', flag: '/flags/de.svg', label: 'Deutsch' }
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('Menu');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (code: string) => {
    setOpen(false);
    router.replace(pathname, { locale: code });
  };

  return (
    <div className="relative z-50">
      <button
        className="p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <div className="absolute right-0 top-12 w-56 bg-white border rounded shadow-lg p-4">
          <nav className="flex flex-col gap-3 text-sm">
            <Link href="/" onClick={() => setOpen(false)}>{t('home')}</Link>
            <Link href="/login" onClick={() => setOpen(false)}>{t('login')}</Link>
            <Link href="/register" onClick={() => setOpen(false)}>{t('register')}</Link>
            <Link href="/dashboard" onClick={() => setOpen(false)}>{t('dashboard')}</Link>
          </nav>

          <div className="border-t my-3 pt-3">
            <p className="text-xs mb-2">{t('language')}</p>
            <div className="flex gap-2">
              {locales.map(({ code, flag, label }) => (
                <button
                  key={code}
                  onClick={() => switchLocale(code)}
                  className={`opacity-80 hover:opacity-100 transition ${code === locale ? 'ring-2 ring-black' : ''}`}
                  title={label}
                >
                  <Image src={flag} alt={label} width={24} height={24} />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
