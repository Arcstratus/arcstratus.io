import { Separator } from "@/components/ui/separator";
import { getDictionary, type I18nType } from "@/i18n/utils";
import Main from "@/ui/layout/main";
import { FeaturedArticle } from "./sections/featured-article";
import { LatestArticle } from "./sections/latest-article";
import { PopularArticle } from "./sections/popular-article";

export default async function Blog({ params }: { params: I18nType }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Main>
      <div className="text-center">
        <h2 className="text-4xl font-bold pb-4">{dict.navigation.blog}</h2>
        <p className="text-gray-500">
          {lang === "zh" ? "樂於分享" : "Happy to share"}
        </p>
      </div>

      <FeaturedArticle />
      <PopularArticle />
      <LatestArticle />

      <Separator />
    </Main>
  );
}
