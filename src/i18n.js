import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enHome from "./locales/en/home.json";
import plHome from "./locales/pl/home.json";
import enRoutes from "./locales/en/routes.json";
import plRoutes from "./locales/pl/routes.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { home: enHome, routes: enRoutes },
      pl: { home: plHome, routes: plRoutes },
    },
    fallbackLng: "pl",
    interpolation: {
      escapeValue: false,
    },
    defaultNs: "home",
    ns: ["home", "routes"],
  });

export default i18n;
