import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n/utils";
import { IconChevronsDown } from "@tabler/icons-react";

interface HeroProps {
  lang: Locale;
}

export async function Hero(props: HeroProps) {
  const dict = await getDictionary(props.lang);

  return (
    <section id="hero" className="relative pt-16 h-svh">
      <div className="container mx-auto h-full flex flex-col">
        <div className="grid grid-cols-1 gap-8  items-center md:grid-cols-2 grow">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                {dict.home.hero.title}
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                {dict.home.hero.slogan}
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg">{dict.home.hero.buttons.primary}</Button>
              <Button variant="outline" size="lg">
                {dict.home.hero.buttons.secondary}
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-8">
            <div className="bg-muted rounded-md aspect-square"></div>
            <div className="bg-muted rounded-md row-span-2"></div>
            <div className="bg-muted rounded-md aspect-square"></div>
          </div>
        </div>
        <div className="absolute bottom-6 right-2 md:relative md:p-8">
          <IconChevronsDown size={32} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
