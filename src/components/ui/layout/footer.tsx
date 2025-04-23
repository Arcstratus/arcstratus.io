"use client";

import { useI18n } from "@/components/i18n-provider";

export function Footer() {
  const { dictionary, locale } = useI18n();

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 mx-auto">
          {/* Products Column */}
          <div className="space-y-3">
            <h3 className="font-semibold">
              {dictionary.common.footer.products.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${locale}/products/unitobuy`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.products.unitobuy}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/products/island-voice`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.products.islandVoice}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-3">
            <h3 className="font-semibold">
              {dictionary.common.footer.resources.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${locale}/support`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.resources.support}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/status`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.resources.serviceStatus}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/security`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.resources.security}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/legal`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.resources.legal}
                </a>
              </li>
            </ul>
          </div>

          {/* Developers Column */}
          <div className="space-y-3">
            <h3 className="font-semibold">
              {dictionary.common.footer.developers.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${locale}/partners`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.developers.partners}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/partners/become`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.developers.becomePartner}
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h3 className="font-semibold">
              {dictionary.common.footer.company.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`/${locale}/about`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.company.about}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/press`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.company.press}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/careers`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.company.careers}
                </a>
              </li>
              <li>
                <a
                  href={`/${locale}/contact`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {dictionary.common.footer.company.contactUs}
                </a>
              </li>
            </ul>
          </div>
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
