
//  import { unstable_setRequestLocale } from "next-intl/server";
import "server-only";

export const locales = ["en", "hu", "ru"];

export async function getMessages(locale: string) {
  unstable_setRequestLocale(locale);
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error("Failed to load messages for locale:", locale);
    return null;
  }
}
