import { IconStar } from "@tabler/icons-react";

export const FeaturedArticle = () => {
  return (
    <section>
      <div className="flex gap-2 middle py-4">
        <IconStar />
        <h2 className="text-2xl font-bold">Featured Article</h2>
      </div>

      <div className="w-full h-64 debug rounded">card</div>
    </section>
  );
};
