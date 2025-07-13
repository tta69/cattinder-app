import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('Login');

  return (
    <main className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
      <form className="flex flex-col gap-4">
        <label>
          <span>{t('email')}</span>
          <input type="email" className="w-full border p-2 rounded" placeholder={t('emailPlaceholder')} />
        </label>
        <label>
          <span>{t('password')}</span>
          <input type="password" className="w-full border p-2 rounded" placeholder={t('passwordPlaceholder')} />
        </label>
        <button type="submit" className="bg-black text-white p-2 rounded">
          {t('loginButton')}
        </button>
      </form>
    </main>
  );
}
