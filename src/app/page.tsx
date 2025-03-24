import { Header, HeaderBrand, HeaderHandburger } from "@/ui/layout/header";
import { Main } from "@/ui/layout/main";
import { Footer, FooterCopyright, FooterIcon } from "@/ui/layout/footer";
import { Hero, About, Services } from "@/ui/page/home/inext";
import { IconBrandGithub } from "@tabler/icons-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderBrand title="Arcstratus" href="/" />
        <div className="grow-1"></div>
        <ThemeToggle />
        <HeaderHandburger items={[]} />
      </Header>
      <Main>
        <Hero />
        <About />
        <Services />
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
