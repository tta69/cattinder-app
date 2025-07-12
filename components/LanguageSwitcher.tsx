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
            "px-4 py-1 border rounded text-sm font-medium transition",
            locale === currentLocale
              ? "bg-red-600 text-white"
              : "border-red-600 text-red-600 hover:bg-red-100"
          )}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
