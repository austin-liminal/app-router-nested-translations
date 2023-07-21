import { TranslationsProvider } from "../../components/translation";
import { parseLanguage } from "../../components/translation/server";

export default function RootLayout({
  params,
  children,
}: {
  params: { lang: string };
  children: React.ReactNode;
}) {
  // Parse the language from the URL path in a server component
  const language = parseLanguage(params.lang);

  return (
    <html lang={language}>
      <body>
        <TranslationsProvider language={language}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
