"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  type NavItemsProps,
} from "@/components/aceternity/resizable-navbar";
import { type StaticImageData } from "next/image";
import { useState } from "react";

interface HeaderMobileProps {
  logo: StaticImageData;
  title: string;
  items: NavItemsProps["items"];
  children?: React.ReactNode;
}

export const HeaderMobile = ({
  logo,
  title,
  items,
  children,
}: HeaderMobileProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MobileNav>
      <MobileNavHeader>
        <NavbarLogo src={logo.src} title={title} />
        <MobileNavToggle
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </MobileNavHeader>

      <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {items.map((item, idx) => (
          <a
            key={`mobile-link-${idx}`}
            href={item.link}
            onClick={() => setIsMenuOpen(false)}
            className="relative text-neutral-600 dark:text-neutral-300"
          >
            <span className="block">{item.name}</span>
          </a>
        ))}
        {children}
      </MobileNavMenu>
    </MobileNav>
  );
};
