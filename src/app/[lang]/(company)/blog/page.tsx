import { Separator } from "@/components/ui/separator";
import Main from "@/ui/layout/main";
import { FeaturedArticle } from "./sections/featured-article";
import { LatestArticle } from "./sections/latest-article";
import { PopularArticle } from "./sections/popular-article";

export default function Blog() {
  return (
    <Main>
      <div className="text-center">
        <h2 className="text-4xl font-bold pb-4">Blog</h2>
        <p className="text-gray-500">樂於分享</p>
      </div>

      <FeaturedArticle />
      <PopularArticle />
      <LatestArticle />

      <Separator />
    </Main>
  );
}
