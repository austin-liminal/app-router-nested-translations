"use client";

import { FC, PropsWithChildren, createContext, useContext } from "react";

import { DocumentLanguage, ServerTranslation, TranslationKey } from "./server";

interface TranslationsContextType {
  language: DocumentLanguage;
}

export const TranslationsContext = createContext<TranslationsContextType>({
  language: "en",
});

export const TranslationsProvider: FC<
  PropsWithChildren<TranslationsContextType>
> = ({ language, children }) => {
  return (
    <TranslationsContext.Provider value={{ language }}>
      {children}
    </TranslationsContext.Provider>
  );
};

export interface TranslationProps {
  t: TranslationKey;
}

// In a client component, reference the locale value from the context and pass it to a server component.
export const Translation: FC<TranslationProps> = ({ t }) => {
  const { language } = useContext(TranslationsContext);

  return <ServerTranslation language={language} t={t} />;
};
