import type { Metadata } from "next";
import type { I18nType } from "@/i18n/utils";
import { ThemeProvider } from "@/components/theme-provider";
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
      <body className="min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
