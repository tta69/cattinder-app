// app/[locale]/page.tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('enter')}</h1>
    </div>
  );
}
