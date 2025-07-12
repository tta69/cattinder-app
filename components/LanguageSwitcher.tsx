// components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "next-intl/client";
import { useLocale } from "next-intl";
import clsx from "clsx";

const locales = ["en", "hu", "ru"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    const newPath = `/${newLocale}${pathname.slice(3)}`;
    router.push(newPath);
  };

  return (
    <div className="mt-6 flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={clsx(
            "p-1 border rounded transition",
            locale === currentLocale
              ? "border-red-600 bg-red-100"
              : "border-gray-300 hover:bg-gray-100"
          )}
          title={locale.toUpperCase()}
        >
          <img
            src={`/flags/${locale}.png`}
            alt={locale}
            className="w-6 h-4 rounded-sm"
          />
        </button>
      ))}
    </div>
  );
}
