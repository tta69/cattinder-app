"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const PASSWORD = "macskalover";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const t = useTranslations("Home");

  useEffect(() => {
    if (accessGranted) {
      setTimeout(() => setShowCards(true), 100);
    }
  }, [accessGranted]);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      setAccessGranted(true);
    } else {
      alert(t("wrongPassword"));
    }
  };

  if (!accessGranted) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="bg-white shadow p-6 rounded-xl flex flex-col items-center gap-4">
          <h1 className="text-xl font-semibold text-red-600">{t("enterPassword")}</h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded"
            placeholder={t("passwordPlaceholder")}
          />
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            {t("enter")}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-red-50 flex flex-col items-center justify-start p-4 transition-all">
      <div className="self-end w-full max-w-md mb-2">
        <LanguageSwitcher />
      </div>

      <h1 className="text-4xl font-bold text-red-700 my-4">CatTinder</h1>
      <p className="text-lg text-gray-700 mb-6">{t("subtitle")}</p>

      <div className="flex flex-col gap-4 w-full max-w-md">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className={`bg-white rounded-xl shadow-md w-full transform transition-all duration-500 ease-in-out ${
              showCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } hover:shadow-lg hover:scale-[1.01]`}
          >
            <img
              src={`/cat${num}.jpg`}
              alt={`Cat ${num}`}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-3">
              <h2 className="text-xl font-semibold text-red-600">{t("catName", { num })}</h2>
              <p className="text-sm text-gray-500">{t("catDesc")}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition hover:scale-105">
          {t("login")}
        </button>
        <button className="border border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-100 transition hover:scale-105">
          {t("register")}
        </button>
      </div>
    </main>
  );
}
