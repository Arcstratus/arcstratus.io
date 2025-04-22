import { LocaleToggle } from "@/components/locale-toggle";
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
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container flex h-14 items-center">
              <div className="mr-4 flex">
                <a className="mr-6 flex items-center space-x-2" href="/">
                  <span className="font-bold">
                    {getDictionary(params.lang).common.title}
                  </span>
                </a>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <a
                    className="transition-colors hover:text-foreground/80"
                    href="/"
                  >
                    {getDictionary(params.lang).common.navigation.home}
                  </a>
                  <a
                    className="transition-colors hover:text-foreground/80"
                    href="/about"
                  >
                    {getDictionary(params.lang).common.navigation.about}
                  </a>
                  <a
                    className="transition-colors hover:text-foreground/80"
                    href="/services"
                  >
                    {getDictionary(params.lang).common.navigation.services}
                  </a>
                  <a
                    className="transition-colors hover:text-foreground/80"
                    href="/contact"
                  >
                    {getDictionary(params.lang).common.navigation.contact}
                  </a>
                </nav>
              </div>
              <div className="ml-auto flex items-center space-x-4">
                <LocaleToggle />
              </div>
            </div>
          </header>
          <div className="relative w-full">{children}</div>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                {getDictionary(params.lang).common.footer.copyright}
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-7JFKLK1FF6" />
    </html>
  );
}
