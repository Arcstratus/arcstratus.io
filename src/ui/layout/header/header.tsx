import { Navbar } from "@/components/aceternity/resizable-navbar";
import logo from "@/public/logo.png";
import { HeaderActions } from "./header-actions";
import { HeaderDesktop } from "./header-desktop";
import { HeaderMobile } from "./header-mobile";

const navItems = [
  {
    name: "Products",
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
    name: "News",
    link: "/news",
  },
  {
    name: "Careers",
    link: "#",
    // link: "/careers",
  },
];

export const Header = () => {
  const title = "Arcstratus";

  return (
    <Navbar className="container mx-auto">
      <HeaderDesktop logo={logo} items={navItems} title={title}>
        <HeaderActions />
      </HeaderDesktop>
      <HeaderMobile logo={logo} items={navItems} title={title} />
      {/* fixme: add children prop to HeaderMobile for <HeaderActions /> */}
    </Navbar>
  );
};
