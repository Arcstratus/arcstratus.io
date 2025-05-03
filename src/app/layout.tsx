import { MicrosoftClarity } from "@/components/microsoft-clarity";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";

import "./globals.css";

export const generateMetadata = async ({}: {}) => {
  return {
    title: "title",
    description: "description",
    metadataBase: new URL("https://arcstratus.io"),
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full border-b bg-card text-card-foreground">
            <div className="container mx-auto flex items-center justify-between py-4">
              <Link href="/" className="text-2xl font-bold">
                諾 🍊 科技
              </Link>
              <nav className="flex gap-6">
                <Link href="/about">關於我們</Link>
                <Link href="/how-to-cooperate">如何合作</Link>
                <Link href="/showcase">成果展示</Link>
                <Link href="/news">新聞</Link>
                <Link href="/faq">FAQ</Link>
                <Link href="/contact">聯繫</Link>
              </nav>
            </div>
          </header>
          <main className="min-h-[70vh] container mx-auto">{children}</main>
          <footer className="w-full border-t bg-card text-card-foreground mt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-2">
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <span className="sr-only">X (Twitter)</span>X
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  IG
                </a>
              </div>
              <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} 諾 🍊 科技 All rights
                reserved.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROJECT_ID!}
      />
      <MicrosoftClarity />
    </html>
  );
}
