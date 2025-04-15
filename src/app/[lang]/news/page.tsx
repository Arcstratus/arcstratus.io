import { ProductCard } from "@/components/animation/product";
import { getDictionary, type I18nType } from "@/i18n/utils";
import Main from "@/ui/layout/main";

export default async function NewsPage({ params }: { params: I18nType }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <Main>
      <section className="relative w-full">
        <h1 className="capitalize">latest news</h1>
        <h2>2025 4</h2>
        <p>
          We're about to launch our first product, BuyForYou, a shopping
          assistant for every family that makes purchasing easier and more
          accurate. Upload photos, record voice notes, and sync shopping lists
          effortlessly. Even "Panic Dad" can instantly transform into a shopping
          pro and team MVP.
        </p>
      </section>

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

      <section className="relative w-full">
        <h1>timeline</h1>

        <div>
          <h2>Company Launch</h2>
          <p>
            We are a team of developers who are passionate about creating
            products that help people live better lives.
          </p>
        </div>
      </section>
    </Main>
  );
}
