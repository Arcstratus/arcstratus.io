import { NavbarLogo } from "@/components/aceternity/resizable-navbar";
import { Separator } from "@/components/ui/separator";
import { getDictionary, type Locale } from "@/i18n/utils";
import logo from "@/public/logo.png";
import { cookies } from "next/headers";
import { FooterCopyright } from "./footer-copyright";
import { FooterSection } from "./footer-section";
import { FooterSocialMedia } from "./footer-social-media";

interface FooterProps {
  lang?: Locale;
}

export async function Footer({ lang }: FooterProps = {}) {
  // Get locale from props if provided, otherwise from cookies with fallback to default
  let locale: Locale;
  if (lang) {
    locale = lang;
  } else {
    const cookieStore = await cookies();
    locale = (cookieStore.get("locale")?.value as Locale) || "tw";
  }

  const dict = await getDictionary(locale);
  const title = dict.header.title;

  return (
    <footer className="w-full relative py-8">
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 place-items-center gap-8">
          <section className="h-full space-y-4 col-span-2 lg:col-span-1">
            <NavbarLogo src={logo.src} title={title} link="/" />
            <FooterSocialMedia locale={locale} />
          </section>

          <FooterSection
            title={dict.navigation.services}
            items={[
              { label: dict.services.title, link: "/products" },
              { label: dict.common.serviceStatus, link: "#" },
              { label: dict.common.release, link: "#" },
              { label: dict.common.faq, link: "#" },
            ]}
          />

          <FooterSection
            title={dict.navigation.about}
            items={[
              { label: dict.about.title, link: "/about" },
              { label: dict.navigation.blog, link: "/blog" },
              { label: dict.careers.title, link: "/careers" },
              { label: dict.navigation.contact, link: "#" },
            ]}
          />

          <FooterSection
            title={dict.common.resources}
            items={[
              { label: dict.common.community, link: "#" },
              { label: dict.common.helpCenter, link: "#" },
              { label: dict.common.support, link: "#" },
            ]}
          />

          <FooterSection
            title={dict.common.developers}
            items={[
              { label: dict.common.api, link: "#" },
              { label: dict.common.documentation, link: "#" },
              { label: dict.common.guides, link: "#" },
            ]}
          />
        </div>

        <Separator />
        <FooterCopyright
          year={2025}
          href="/"
          by={dict.footer.company}
          locale={locale}
        />
      </div>
    </footer>
  );
}
