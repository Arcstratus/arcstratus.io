import { type I18nType } from "@/i18n/utils";
import Main from "@/ui/layout/main";
import { Hero, Platform, Service, ServiceAI } from "@/ui/page/home";
import { Contact } from "@/ui/page/home/contact";

export default async function Home({ params }: { params: I18nType }) {
  const { lang } = await params;

  return (
    <Main>
      <Hero lang={lang} />
      <Platform />
      <ServiceAI />
      <Service lang={lang} />
      <Contact lang={lang} />
    </Main>
  );
}
