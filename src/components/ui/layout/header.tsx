"use client";

import { useI18n } from "@/components/i18n-provider";
import { HeaderNav } from "./header-nav";

export function Header() {
  const { dictionary, locale } = useI18n();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-16 md:h-14 items-center">
        <a
          className="mr-2 md:mr-6 flex items-center space-x-2 whitespace-nowrap"
          href={`/${locale}`}
        >
          <span className="font-bold whitespace-nowrap">
            {dictionary.common.title}
          </span>
        </a>
        <HeaderNav />
      </div>
    </header>
  );
}
