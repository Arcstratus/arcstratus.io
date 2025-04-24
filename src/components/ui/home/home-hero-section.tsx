"use client";

import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

export function HomeHeroSection() {
  const { dictionary, locale } = useI18n();
  const article = dictionary.home.hero;

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2 pb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none pb-8">
                {article.title}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {article.subtitle}
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {article.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="px-8">
                  {article.button.cta}
                </Button>
              </Link>
              <Link href={`/${locale}/services`}>
                <Button size="lg" variant="outline" className="px-8">
                  {article.button.more}
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px] bg-background rounded-xl shadow-2xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                        <line x1="8" y1="16" x2="8.01" y2="16" />
                        <line x1="8" y1="20" x2="8.01" y2="20" />
                        <line x1="12" y1="18" x2="12.01" y2="18" />
                        <line x1="12" y1="22" x2="12.01" y2="22" />
                        <line x1="16" y1="16" x2="16.01" y2="16" />
                        <line x1="16" y1="20" x2="16.01" y2="20" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Cloud Solutions</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Scalable, secure, and reliable cloud infrastructure for
                      your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
