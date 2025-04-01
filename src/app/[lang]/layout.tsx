import { ThemeProvider } from "@/components/theme-provider";
import type { I18nType } from "@/i18n/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcstratus",
  description: "Arcstratus - Cloud Infrastructure Management",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "tw" }];
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
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-7JFKLK1FF6" />
    </html>
  );
}
