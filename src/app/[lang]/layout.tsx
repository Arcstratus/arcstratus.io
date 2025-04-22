import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export const generateStaticParams = async () => [
  { lang: "en" },
  { lang: "tw" },
];

export const generateMetadata = async () => ({
  title: "",
  description: "",
  metadataBase: new URL("https://arcstratus.io"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-TW": "/tw",
      "en-US": "/en",
    },
  },
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden bg-background text-foreground font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative w-full">{children}</div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-7JFKLK1FF6" />
    </html>
  );
}
