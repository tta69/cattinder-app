export async function getMessages(locale: string) {
  try {
    return (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error('Could not load messages:', error);
    return {};
  }
}
