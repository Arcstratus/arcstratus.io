import { Navbar } from "@/components/aceternity/resizable-navbar";
import { getDictionary, type Locale } from "@/i18n/utils";
import logo from "@/public/logo.png";
import { cookies } from "next/headers";
import { HeaderActions } from "./header-actions";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

interface HeaderProps {
  lang?: Locale;
}

export const Header = async ({ lang }: HeaderProps = {}) => {
  // Get locale from props if provided, otherwise from cookies with fallback to default
  let locale: Locale;
  if (lang) {
    locale = lang;
  } else {
    const cookieStore = await cookies();
    locale = (cookieStore.get("locale")?.value as Locale) || "tw";
  }

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
