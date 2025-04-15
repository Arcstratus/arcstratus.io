import { ThemeProvider } from "@/components/theme-provider";
import { getDictionary, type I18nType } from "@/i18n/utils";
import Footer from "@/ui/layout/footer";
import Header from "@/ui/layout/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";
export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }];
}

export async function generateMetadata({
  params,
}: Readonly<{ params: I18nType }>): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return {
    ...dict.head,
    metadataBase: new URL("https://arcstratus.io"),
    alternates: {
      canonical: "/",
      languages: {
        "zh-TW": "/zh",
        "en-US": "/en",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: I18nType;
}>) {
  return (
    <html lang={(await params).lang} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative w-full">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-7JFKLK1FF6" />
    </html>
  );
}
