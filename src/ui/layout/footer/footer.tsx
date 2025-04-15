import { NavbarLogo } from "@/components/aceternity/resizable-navbar";
import { Separator } from "@/components/ui/separator";
import logo from "@/public/logo.png";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { FooterCopyright } from "./footer-copyright";
import { FooterIcon } from "./footer-icon";

export function Footer() {
  const title = "Arcstratus";

  return (
    <footer className="w-full relative py-8">
      <div className="container mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-4">
            <NavbarLogo src={logo.src} title={title} link="/" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="p-4">
              <h1>Product</h1>
              <menu>
                <li>
                  <Link href="/overview">Overview</Link>
                </li>
                <li>
                  <Link href="/release">Release</Link>
                </li>
              </menu>
            </div>

            <div className="p-4">
              <h1>Resource</h1>
              <menu>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/support">Support</Link>
                </li>
              </menu>
            </div>

            <div className="p-4">
              <h1>Company</h1>
              <menu>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
                <li>
                  <Link href="/contact">Contact us</Link>
                </li>
              </menu>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center lg:flex-row flex-col gap-4">
          <FooterCopyright year={2025} href="/" by="Arcstratus Co., Ltd." />

          <div className="flex gap-2">
            <FooterIcon
              href="https://github.com/arcstratus"
              icon={<IconBrandGithub />}
            />
            <FooterIcon
              href="https://github.com/arcstratus"
              icon={<IconBrandGithub />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
