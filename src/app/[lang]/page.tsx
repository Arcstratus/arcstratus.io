import { Header, HeaderBrand, HeaderHandburger } from "@/ui/layout/header";
import { Main } from "@/ui/layout/main";
import { Footer, FooterCopyright, FooterIcon } from "@/ui/layout/footer";
import { IconBrandGithub } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LocaleToggle } from "@/components/locale-toggle";
import { type I18nType, getDictionary } from "@/i18n/utils";
import { About, Hero, Service } from "@/ui/page/home";

export default async function Home({ params }: { params: I18nType }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header>
        <HeaderBrand title={dict.header.title} href="/" />
        <div className="grow-1"></div>
        <LocaleToggle />
        <ThemeToggle />
        <HeaderHandburger items={[]} />
      </Header>
      <Main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Service lang={lang} />
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
