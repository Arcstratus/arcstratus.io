import { getDictionary, type I18nType } from "@/i18n/utils";
import Main from "@/ui/layout/main";
import { LatestNews, Milestone, Products } from "@/ui/page/news";

export default async function NewsPage({ params }: { params: I18nType }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Main>
      <LatestNews />
      <Products />
      <Milestone />
    </Main>
  );
}
