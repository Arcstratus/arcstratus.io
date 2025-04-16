import { IconNews } from "@tabler/icons-react";

export const LatestArticle = () => {
  return (
    <section>
      <div className="flex gap-2 middle py-4">
        <IconNews />
        <h2 className="text-2xl font-bold">Latest Article</h2>
      </div>

      <div className="w-full">
        <menu className="space-y-8">
          <li>
            <div className="w-full h-64 debug rounded">card</div>
          </li>
          <li>
            <div className="w-full h-64 debug rounded">card</div>
          </li>
          <li>
            <div className="w-full h-64 debug rounded">card</div>
          </li>
        </menu>
      </div>
    </section>
  );
};
