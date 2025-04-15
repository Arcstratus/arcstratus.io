import { ProductCard } from "@/components/animation/product";

export const Products = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto">
        <hgroup>
          <h2 className="text-xl font-bold">Products</h2>
        </hgroup>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 place-content-center">
          <ProductCard
            label="unitobuy.com"
            link="https://unitobuy.com"
            title="UniToBuy"
            description={`"BuyForYou" - your family's shopping assistant. Upload photos, sync lists, and turn any panicked parent into a shopping champion instantly.`}
          />
          <ProductCard
            label="Coming soon"
            link="#"
            title="Coming soon"
            description="我們正在跟下一個合作夥伴談論新的產品專案"
          />
        </div>
      </div>
    </section>
  );
};
