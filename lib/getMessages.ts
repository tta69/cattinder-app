// lib/getMessages.ts
import "server-only";

export const locales = ["en", "hu", "ru"] as const;

export async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`❌ Error loading messages for locale "${locale}"`, error);
    return {};
  }
}
