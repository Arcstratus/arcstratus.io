import { I18nProvider } from "@/components/i18n-provider";
import { MicrosoftClarity } from "@/components/microsoft-clarity";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/ui/main-nav";
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
  params: Promise<{ lang: Locale }>;
}) => {
  const dictionary = getDictionary((await params).lang);

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

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dictionary = getDictionary(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider locale={lang} dictionary={dictionary}>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
              <div className="container mx-auto flex h-16 md:h-14 items-center">
                <a
                  className="mr-2 md:mr-6 flex items-center space-x-2 whitespace-nowrap"
                  href={`/${lang}`}
                >
                  <span className="font-bold whitespace-nowrap">
                    {dictionary.common.title}
                  </span>
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
              <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mx-auto">
                  {/* Products Column */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">
                      {dictionary.common.footer.products.title}
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href={`/${lang}/products/unitobuy`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.products.unitobuy}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/products/island-voice`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.products.islandVoice}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Resources Column */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">
                      {dictionary.common.footer.resources.title}
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href={`/${lang}/support`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.resources.support}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/status`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.resources.serviceStatus}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/security`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.resources.security}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/legal`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.resources.legal}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Developers Column */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">
                      {dictionary.common.footer.developers.title}
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href={`/${lang}/partners`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.developers.partners}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/partners/become`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.developers.becomePartner}
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Company Column */}
                  <div className="space-y-3">
                    <h3 className="font-semibold">
                      {dictionary.common.footer.company.title}
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href={`/${lang}/about`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.company.about}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/press`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.company.press}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/careers`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.company.careers}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/${lang}/contact`}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          {dictionary.common.footer.company.contactUs}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:h-24 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    {dictionary.common.footer.copyright}
                  </p>
                  <div className="flex items-center space-x-4">
                    <a
                      className="text-sm text-muted-foreground underline underline-offset-4"
                      href={`/${lang}/privacy`}
                    >
                      {dictionary.common.footer.privacyPolicy}
                    </a>
                    <a
                      className="text-sm text-muted-foreground underline underline-offset-4"
                      href={`/${lang}/terms`}
                    >
                      {dictionary.common.footer.termsOfService}
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </I18nProvider>
        </ThemeProvider>
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROJECT_ID!}
      />
      <MicrosoftClarity />
    </html>
  );
}
