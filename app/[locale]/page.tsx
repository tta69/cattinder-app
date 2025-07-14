'use client';

import { useEffect, useState } from 'react';
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

const PASSWORD = 'macskalover';

export default function HomePage() {
  const t = useTranslations('Home');
  const [input, setInput] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (accessGranted) {
      setTimeout(() => setShowCards(true), 100);
    }
  }, [accessGranted]);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      setAccessGranted(true);
    } else {
      alert(t('wrongPassword'));
    }
  };

  if (!accessGranted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center gap-4">
          <h1 className="text-xl font-semibold text-red-600">{t('enterPassword')}</h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded"
            placeholder={t('passwordPlaceholder')}
          />
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            {t('enter')}
          </button>
        </div>
      </main>
    );
  }

  // Nyelvválasztós főképernyő:
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
