import i18n from "i18next";
import i18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { resources } from "./langs";

i18n
  .use(i18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: ["ja"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
