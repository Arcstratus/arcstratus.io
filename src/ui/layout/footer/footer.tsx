import { NavbarLogo } from "@/components/aceternity/resizable-navbar";
import { Separator } from "@/components/ui/separator";
import logo from "@/public/logo.png";
import { FooterCopyright } from "./footer-copyright";
import { FooterSection } from "./footer-section";
import { FooterSocialMedia } from "./footer-social-media";

export function Footer() {
  const title = "Arcstratus";

  return (
    <footer className="w-full relative py-8">
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 place-items-center gap-8">
          <section className="h-full space-y-4">
            <NavbarLogo src={logo.src} title={title} link="/" />
            <FooterSocialMedia />
          </section>

          <FooterSection
            title="Products"
            items={[
              { label: "Overview", link: "/products" },
              { label: "Service Status", link: "/service-status" },
              { label: "Release", link: "/release" },
              { label: "FAQ", link: "/faq" },
            ]}
          />

          <FooterSection
            title="Company"
            items={[
              { label: "About", link: "/about" },
              { label: "Blog", link: "/blog" },
              { label: "Careers", link: "/careers" },
              { label: "Contact", link: "/contact" },
            ]}
          />

          <FooterSection
            title="Resources"
            items={[
              { label: "Community", link: "/community" },
              { label: "Help Center", link: "/help-center" },
              { label: "Support", link: "/support" },
            ]}
          />

          <FooterSection
            title="Developers"
            items={[
              { label: "API", link: "/api" },
              { label: "Documentation", link: "/documentation" },
              { label: "Guides", link: "/guides" },
            ]}
          />
        </div>

        <Separator />
        <FooterCopyright year={2025} href="/" by="Arcstratus Co., Ltd." />
      </div>
    </footer>
  );
}
