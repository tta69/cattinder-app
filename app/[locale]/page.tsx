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

  // Belépés utáni "igazi" nyitóoldal:
  return (
    <main className="min-h-screen bg-red-50 flex flex-col items-center justify-start p-4">
      <h1 className="text-3xl font-bold text-red-700 my-4">{t('title')}</h1>
      <p className="text-lg text-gray-700 mb-6">{t('description')}</p>

      <div className="mb-6 flex gap-4">
        <Link href="/login">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition hover:scale-105">
            {t('login')}
          </button>
        </Link>
        <Link href="/register">
          <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-100 transition hover:scale-105">
            {t('register')}
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
          >
            <Image
              src={`/cats/cat${num}.jpg`}
              alt={`Cat ${num}`}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h2 className="text-xl font-semibold text-red-600">{t('catName', { num })}</h2>
              <p className="text-sm text-gray-500">{t('catDesc')}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 my-8">
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
