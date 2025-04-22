import { Navbar } from "@/components/aceternity/resizable-navbar";
import { getDictionary } from "@/i18n/utils";
import logo from "@/public/logo.png";
import { cookies } from "next/headers";
import { HeaderActions } from "./header-actions";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

export const Header = async () => {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value as "en" | "tw") || "tw";
  const dict = await getDictionary(locale);

  const navItems = [
    {
      name: dict.navigation.services,
      submenu: [
        {
          name: "UniToBuy",
          link: "#",
          // link: "/products/unitobuy",
        },
      ],
    },
    {
      name: "API",
      link: "#",
      // link: "/api",
    },
    {
      name: dict.navigation.blog,
      link: "/news",
    },
    {
      name: dict.careers.title,
      link: "/careers",
    },
  ];

  const title = dict.header.title;

  return (
    <Navbar className="container mx-auto">
      <HeaderDesktop logo={logo} items={navItems} title={title}>
        <HeaderActions />
      </HeaderDesktop>
      <HeaderMobile logo={logo} items={navItems} title={title}>
        <HeaderActions />
      </HeaderMobile>
    </Navbar>
  );
};
