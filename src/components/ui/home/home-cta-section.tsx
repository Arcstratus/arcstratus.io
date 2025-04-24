"use client";

import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/shadcn/button";
import Link from "next/link";

export function HomeCtaSection() {
  const { dictionary, locale } = useI18n();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {dictionary.home.cta.title}
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dictionary.home.cta.subtitle}
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href={`/${locale}/contact`}>
              <Button
                size="lg"
                className="w-full bg-background text-primary hover:bg-background/90"
              >
                {dictionary.home.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
