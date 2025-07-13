'use client';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-lg mb-6">{t('description')}</p>
      <LanguageSwitcher />
    </main>
  );
}
