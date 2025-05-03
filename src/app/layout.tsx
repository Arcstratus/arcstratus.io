import { MicrosoftClarity } from "@/components/microsoft-clarity";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  IconBrandInstagram,
  IconBrandThreads,
  IconBrandX,
  IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";

import "./globals.css";

export const generateMetadata = async ({}: {}) => {
  const title = "諾澄科技 | 跨領域合作夥伴";
  const description =
    "諾澄科技專注於雲端架構、AI 產品化與軟體開發，尋求與 UI 設計師、AI 研究者、創意團隊的跨領域合作，共同打造創新產品。";
  const metadataBase = new URL("https://arcstratus.io");
  const keywords = ["雲端架構", "AI 產品", "跨領域合作"];

  return {
    title,
    description,
    metadataBase,
    keywords,
    alternates: {
      canonical: metadataBase.toString(),
    },
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
            <div className="container mx-auto flex items-center justify-between p-4">
              <Link href="/" className="text-2xl font-bold">
                諾澄科技
              </Link>
              <div className="flex items-center gap-4">
                <nav className="hidden md:flex items-center gap-6">
                  <Link href="/about">關於我們</Link>
                  <Link href="/how-to-cooperate">如何合作</Link>
                  <Link href="/showcase">成果展示</Link>
                  <Link href="/news">新聞</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/contact">聯繫</Link>
                </nav>
                <ThemeToggle />

                <div className="md:hidden">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="p-2">
                      <IconMenu2 className="h-6 w-6" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link href="/about">關於我們</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/how-to-cooperate">如何合作</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/showcase">成果展示</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/news">新聞</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/faq">FAQ</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/contact">聯繫</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </header>
          <main className="min-h-[70vh] container mx-auto px-4">
            {children}
          </main>
          <footer className="w-full border-t bg-card text-card-foreground mt-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-2">
              <div className="text-sm text-gray-500">
                &copy; 2025 諾澄科技 All rights reserved.
              </div>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com/arcstratus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                >
                  <span className="sr-only">X (Twitter)</span>
                  <IconBrandX className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/arcstratus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <span className="sr-only">Instagram</span>
                  <IconBrandInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://threads.net/arcstratus"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Threads"
                >
                  <span className="sr-only">Threads</span>
                  <IconBrandThreads className="h-5 w-5" />
                </a>
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
