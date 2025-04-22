import { ProductCard } from "@/components/animation/product";
import { getDictionary, type Locale } from "@/i18n/utils";

interface ProductsProps {
  lang?: Locale;
}

export const Products = async ({ lang = "tw" }: ProductsProps = {}) => {
  const dict = await getDictionary(lang);

  return (
    <section className="relative w-full">
      <div className="container mx-auto">
        <hgroup>
          <h2 className="text-xl font-bold">{dict.services.title}</h2>
        </hgroup>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 place-content-center">
          <ProductCard
            label={dict.products.unitobuy.label}
            link="https://unitobuy.com"
            title={dict.products.unitobuy.title}
            description={dict.products.unitobuy.description}
          />
          <ProductCard
            label={dict.common.comingSoon}
            link="#"
            title={dict.common.comingSoon}
            description={dict.products.comingSoon.description}
          />
        </div>
      </div>
    </section>
  );
};
