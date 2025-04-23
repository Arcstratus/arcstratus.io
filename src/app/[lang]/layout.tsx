import { I18nProvider } from "@/components/i18n-provider";
import { MicrosoftClarity } from "@/components/microsoft-clarity";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer, Header, Main } from "@/components/ui/layout";
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
            <Header />
            <Main>{children}</Main>
            <Footer />
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
