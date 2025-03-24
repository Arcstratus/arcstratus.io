import { ThemeToggle } from "@/components/theme-toggle";
import { Header, HeaderBrand, HeaderHandburger } from "@/ui/layout/header";
import { Main } from "@/ui/layout/main";
import { Footer, FooterCopyright } from "@/ui/layout/footer";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderBrand title="Arcstratus" href="/" />
        <HeaderHandburger items={[]} />
      </Header>
      <Main>
        <h1 className="text-4xl font-bold">Welcome to Arcstratus</h1>
        <ThemeToggle />
      </Main>
      <Footer className="border border-border">
        <FooterCopyright year={2025} href="/" by="Arcstratus" />
      </Footer>
    </>
  );
}
