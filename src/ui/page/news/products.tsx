import { ProductCard } from "@/components/animation/product";

export const Products = () => {
  return (
    <section>
      <h1 className="capitalize">Products</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 place-content-center">
        <ProductCard
          label="unitobuy.com"
          link="https://unitobuy.com"
          title="UniToBuy"
          description={`"BuyForYou" - your family's shopping assistant. Upload photos, sync lists, and turn any panicked parent into a shopping champion instantly.`}
        />
      </div>
    </section>
  );
};
