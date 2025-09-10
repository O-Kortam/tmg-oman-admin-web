import en from "../app/locales/en.json";
import ar from "../app/locales/ar.json";

const translations: Record<string, any> = { en, ar };

export function useTranslation(lang: string) {
  return translations[lang] || translations.en;
}
