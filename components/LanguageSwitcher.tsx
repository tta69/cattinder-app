"use client";

import { usePathname, useRouter } from "next-intl/client";
import { useLocale } from "next-intl";
import clsx from "clsx";

const locales = [
  { code: "en", label: "🇬🇧" },
  { code: "hu", label: "🇭🇺" },
  { code: "ru", label: "🇷🇺" }
];

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
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleLocaleChange(code)}
          className={clsx(
            "w-10 h-10 text-xl rounded-full border flex items-center justify-center transition",
            code === currentLocale
              ? "bg-red-600 text-white"
              : "border-red-600 text-red-600 hover:bg-red-100"
          )}
          title={code.toUpperCase()}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
