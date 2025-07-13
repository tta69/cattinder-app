// app/[locale]/dashboard/page.tsx

'use client';

import { useTranslations } from 'next-intl';

export default function DashboardPage() {
  const t = useTranslations('Dashboard');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{t('title')}</h1>
      <p className="mt-2 text-gray-600">{t('description')}</p>
    </div>
  );
}
