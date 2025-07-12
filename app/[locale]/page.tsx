'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main>
      <h1>{t('title')}</h1>
    </main>
  );
}
