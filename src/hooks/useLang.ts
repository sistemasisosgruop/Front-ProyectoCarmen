import type { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

interface Functions {
  t: TFunction<string, object, string>;
  toggleLang: (lang: string) => void;
}

export const useLang = (): Functions => {
  const [t, i18n] = useTranslation("global");

  const toggleLang = (lang: string): void => {
    i18n.changeLanguage(lang).catch((error) => {
      console.log(error);
    });
  };

  return { t, toggleLang };
};
