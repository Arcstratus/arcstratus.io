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
        <div className="grid grid-cols-2 lg:grid-cols-5 place-items-center gap-8">
          <section className="h-full space-y-4 col-span-2 lg:col-span-1">
            <NavbarLogo src={logo.src} title={title} link="/" />
            <FooterSocialMedia />
          </section>

          <FooterSection
            title="Products"
            items={[
              { label: "Overview", link: "/products" },
              { label: "Service Status", link: "#" },
              { label: "Release", link: "#" },
              { label: "FAQ", link: "#" },
            ]}
          />

          <FooterSection
            title="Company"
            items={[
              { label: "About", link: "/about" },
              { label: "Blog", link: "/blog" },
              { label: "Careers", link: "/careers" },
              { label: "Contact", link: "#" },
            ]}
          />

          <FooterSection
            title="Resources"
            items={[
              { label: "Community", link: "#" },
              { label: "Help Center", link: "#" },
              { label: "Support", link: "#" },
            ]}
          />

          <FooterSection
            title="Developers"
            items={[
              { label: "API", link: "#" },
              { label: "Documentation", link: "#" },
              { label: "Guides", link: "#" },
            ]}
          />
        </div>

        <Separator />
        <FooterCopyright year={2025} href="/" by="Arcstratus Co., Ltd." />
      </div>
    </footer>
  );
}
