import { FC } from "react";

import enTranslations from "@/dictionaries/en.json";
import esTranslations from "@/dictionaries/es.json";
import itTranslations from "@/dictionaries/it.json";

export type DocumentLanguage = "en" | "es" | "it";

export type TranslationKey =
  | keyof typeof enTranslations
  | keyof typeof esTranslations
  | keyof typeof itTranslations;

interface ServerTranslationProps {
  language: DocumentLanguage;
  t: TranslationKey;
}

type TranslationsDictionary = Record<
  DocumentLanguage,
  Record<TranslationKey, string>
>;

const translations: TranslationsDictionary = {
  en: enTranslations,
  es: esTranslations,
  it: itTranslations,
};

export const ServerTranslation: FC<ServerTranslationProps> = ({
  language,
  t,
}) => {
  const value = translations[language][t];
  return <>{value}</>;
};

export const supportedLanguages: DocumentLanguage[] = ["en", "es", "it"];

export const parseLanguage = (locale: string): DocumentLanguage => {
  let lang = locale.split("-")[0] as DocumentLanguage;
  if (!supportedLanguages.includes(lang)) {
    lang = "en";
  }
  return lang;
};
