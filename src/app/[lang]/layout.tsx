import { I18nProvider } from "@/components/i18n-provider";
import { MainNav } from "@/components/ui/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const generateStaticParams = async () => [
  { lang: "en" },
  { lang: "tw" },
];

export const generateMetadata = async ({
  params,
}: {
  params: { lang: Locale };
}) => {
  const dictionary = getDictionary(params.lang);

  return {
    title: dictionary.common.title,
    description: dictionary.common.description,
    metadataBase: new URL("https://arcstratus.io"),
    alternates: {
      canonical: "/",
      languages: {
        "zh-TW": "/tw",
        "en-US": "/en",
      },
    },
  };
};

export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = getDictionary(params.lang);
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider locale={params.lang} dictionary={dictionary}>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
              <div className="container mx-auto flex h-14 items-center">
                <a
                  className="mr-6 flex items-center space-x-2"
                  href={`/${params.lang}`}
                >
                  <span className="font-bold">{dictionary.common.title}</span>
                </a>
                <MainNav />
              </div>
            </header>
            <main className="flex-1">
              <div className="relative w-full container mx-auto">
                {children}
              </div>
            </main>
            <footer className="border-t py-6 md:py-0">
              <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  {dictionary.common.footer.copyright}
                </p>
                <div className="flex items-center space-x-4">
                  <a
                    className="text-sm text-muted-foreground underline underline-offset-4"
                    href={`/${params.lang}/privacy`}
                  >
                    {dictionary.common.footer.privacyPolicy}
                  </a>
                  <a
                    className="text-sm text-muted-foreground underline underline-offset-4"
                    href={`/${params.lang}/terms`}
                  >
                    {dictionary.common.footer.termsOfService}
                  </a>
                </div>
              </div>
            </footer>
          </I18nProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-7JFKLK1FF6" />
    </html>
  );
}
