import { IconTrendingUp } from "@tabler/icons-react";

export const PopularArticle = () => {
  return (
    <section>
      <div className="flex gap-2 middle py-4">
        <IconTrendingUp />
        <h2 className="text-2xl font-bold">Popular Article</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full h-64 debug rounded">card</div>
        <div className="w-full h-64 debug rounded">card</div>
      </div>
    </section>
  );
};
