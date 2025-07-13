// app/[locale]/dashboard/page.tsx

import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function DashboardPage() {
  const t = await getTranslations();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">{t('Dashboard.title', { default: 'Dashboard' })}</h1>

      <p className="mb-6 text-gray-700">
        {t('Dashboard.welcomeMessage', {
          default: 'Ez a vezérlőpult főoldala. Itt fogod látni a legfontosabb információkat a profilodról, üzeneteidről és aktivitásodról.'
        })}
      </p>

      <ul className="space-y-2">
        <li>
          <Link href="/dashboard/profile" className="text-blue-600 hover:underline">
            {t('Dashboard.profileLink', { default: 'Profilom megtekintése' })}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/messages" className="text-blue-600 hover:underline">
            {t('Dashboard.messagesLink', { default: 'Üzeneteim' })}
          </Link>
        </li>
        <li>
          <Link href="/dashboard/favorites" className="text-blue-600 hover:underline">
            {t('Dashboard.favoritesLink', { default: 'Kedvencek' })}
          </Link>
        </li>
      </ul>
    </main>
  );
}
