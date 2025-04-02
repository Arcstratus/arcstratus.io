import { ThemeToggle } from "@/components/theme-toggle";
import { type I18nType } from "@/i18n/utils";
import { Footer, FooterCopyright, FooterIcon } from "@/ui/layout/footer";
import {
  Header,
  HeaderBrand,
  HeaderHandburger,
  HeaderMenu,
} from "@/ui/layout/header";
import { Main } from "@/ui/layout/main/main";
import { Hero, Platform, Service, ServiceAI } from "@/ui/page/home";
import { Contact } from "@/ui/page/home/contact";
import { IconBrandGithub } from "@tabler/icons-react";

export default async function Home({ params }: { params: I18nType }) {
  const { lang } = await params;

  return (
    <>
      <Header>
        <HeaderBrand />
        <HeaderMenu />
        <ThemeToggle />
        <HeaderHandburger />
      </Header>
      <Main>
        <Hero lang={lang} />
        <Platform />
        <ServiceAI />
        <Service lang={lang} />
        <Contact lang={lang} />
      </Main>
      <Footer className="border-t border-border">
        <FooterCopyright year={2025} href="/" by="Arcstratus" />
        <div className="grow-1"></div>
        <FooterIcon
          href="https://github.com/arcstratus"
          icon={<IconBrandGithub />}
        />
      </Footer>
    </>
  );
}
