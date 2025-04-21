import { type I18nType } from "@/i18n/utils";
import Main from "@/ui/layout/main";
import { Contact } from "./sections/contact";
import { Products } from "./sections/products";

export default async function Page({ params }: { params: I18nType }) {
  const { lang } = await params;

  return (
    <Main fluid>
      <Products lang={lang} />
      <Contact lang={lang} />
    </Main>
  );
}
