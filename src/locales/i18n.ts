import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { ptbr } from './translations/ptbr';
import { en } from './translations/en';

interface ILangs {
  name: string;
  value: object;
}

const langs: ILangs[] = [
  {
    name: 'ptbr',
    value: ptbr,
  },
  {
    name: 'en',
    value: en,
  },
];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources: langs.reduce((acc, lang) => {
      acc[lang.name] = { translation: lang.value };
      return acc;
    }, {} as Record<string, Record<string, object>>),
    fallbackLng: langs.map(lang => lang.name),
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
