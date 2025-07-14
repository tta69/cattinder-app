'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // lábléc megjelenik 200px görgetés után
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white transition-transform duration-500 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="py-4 text-center text-sm">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
          <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            TikTok
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </Link>
        </div>
        <p>{t('copyright')}</p>
      </div>
    </div>
  );
}
