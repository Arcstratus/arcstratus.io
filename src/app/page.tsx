import { ThemeToggle } from "@/components/theme-toggle";
import { Footer, FooterCopyright } from "@/ui/layout/footer";
import { Header, HeaderBrand, HeaderHandburger } from "@/ui/layout/header";
import { Main } from "@/ui/layout/main";

export default function Home() {
  return (
    <>
      <Header>
        <HeaderBrand title="Arcstratus" href="/" />
        <HeaderHandburger items={[]} />
      </Header>
      <Main breadcrumb={false}>
        <h1 className="text-4xl font-bold">Welcome to Arcstratus</h1>
        <ThemeToggle />
      </Main>
      <Footer className="border-t border-border">
        <FooterCopyright year={2025} href="/" by="Arcstratus" />
      </Footer>
    </>
  );
}
