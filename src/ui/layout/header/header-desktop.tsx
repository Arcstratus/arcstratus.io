import {
  NavbarLogo,
  NavBody,
  NavItems,
  type NavItemsProps,
} from "@/components/aceternity/resizable-navbar";
import { type StaticImageData } from "next/image";

interface HeaderDesktopProps {
  logo: StaticImageData;
  title: string;
  items: NavItemsProps["items"];
  children?: React.ReactNode;
}

export const HeaderDesktop = ({
  logo,
  title,
  items,
  children,
}: HeaderDesktopProps) => {
  return (
    <NavBody>
      <NavbarLogo src={logo.src} title={title} />
      <NavItems items={items} />
      {children}
    </NavBody>
  );
};
