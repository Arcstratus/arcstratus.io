"use client";

import { useI18n } from "@/components/i18n-provider";
import { type Locale } from "@/i18n/utils";
import Link from "next/link";

const FooterCard = ({
  locale,
  title,
  items,
}: {
  locale: Locale;
  title: string;
  items: any[];
}) => {
  return (
    <div className="space-y-3 h-full">
      <h3 className="font-semibold">{title}</h3>
      <ul className="space-y-2">
        {items.map((item: any) => (
          <li key={item.href}>
            <Link
              href={`/${locale}${item.href}`}
              key={item.href}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export function Footer() {
  const { dictionary, locale } = useI18n();
  const footer = dictionary.common.footer;

  const products = {
    title: footer.products.title,
    items: [
      {
        href: "/products/unitobuy",
        label: footer.products.unitobuy,
      },
      {
        href: "/products/island-voice",
        label: footer.products.islandVoice,
      },
    ],
  };

  const resources = {
    title: footer.resources.title,
    items: [
      {
        href: "/status",
        label: footer.resources.serviceStatus,
      },
      {
        href: "/security",
        label: footer.resources.security,
      },
      {
        href: "/legal",
        label: footer.resources.legal,
      },
    ],
  };

  const developers = {
    title: footer.developers.title,
    items: [
      {
        href: "/partners",
        label: footer.developers.partners,
      },
      {
        href: "/partners/become",
        label: footer.developers.becomePartner,
      },
    ],
  };

  const company = {
    title: footer.company.title,
    items: [
      {
        href: "/about",
        label: footer.company.about,
      },
      {
        href: "/news",
        label: footer.company.news,
      },
      {
        href: "/careers",
        label: footer.company.careers,
      },
      {
        href: "/contact",
        label: footer.company.contactUs,
      },
    ],
  };

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 place-items-center">
          <FooterCard locale={locale} {...products} />
          <FooterCard locale={locale} {...resources} />
          <FooterCard locale={locale} {...developers} />
          <FooterCard locale={locale} {...company} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {dictionary.common.footer.copyright}
          </p>
          <div className="flex items-center space-x-4">
            <a
              className="text-sm text-muted-foreground underline underline-offset-4"
              href={`/${locale}/privacy`}
            >
              {dictionary.common.footer.privacyPolicy}
            </a>
            <a
              className="text-sm text-muted-foreground underline underline-offset-4"
              href={`/${locale}/terms`}
            >
              {dictionary.common.footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
