import 'server-only';

const dictionaries = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  hu: () => import('@/messages/hu.json').then((module) => module.default),
  ru: () => import('@/messages/ru.json').then((module) => module.default)
};

export async function getMessages(locale: string) {
  if (!dictionaries[locale]) return null;
  return dictionaries[locale]();
}
