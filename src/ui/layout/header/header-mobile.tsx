"use client";

import {
  MobileNav,
  MobileNavHeader,
  MobileNavItems,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  type NavItemsProps,
} from "@/components/aceternity/resizable-navbar";
import { Separator } from "@/components/ui/separator";
import { type StaticImageData } from "next/image";
import { useState } from "react";
import { HeaderActions } from "./header-actions";

interface HeaderMobileProps {
  logo: StaticImageData;
  title: string;
  items: NavItemsProps["items"];
}

export const HeaderMobile = ({ logo, title, items }: HeaderMobileProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MobileNav>
      <MobileNavHeader>
        <NavbarLogo src={logo.src} title={title} link="/" />
        <MobileNavToggle
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </MobileNavHeader>

      <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <MobileNavItems
          items={items}
          onItemClick={() => setIsMenuOpen(false)}
        />
        <Separator />
        <HeaderActions />
      </MobileNavMenu>
    </MobileNav>
  );
};
