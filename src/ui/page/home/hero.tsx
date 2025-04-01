import { getDictionary } from "@/i18n/utils";
import { cn } from "@/lib/utils";
import {
  IconArrowBigRightLinesFilled,
  IconChevronsDown,
} from "@tabler/icons-react";

interface HeroProps {
  lang: "en" | "tw";
}

export async function Hero(props: HeroProps) {
  const dict = await getDictionary(props.lang);

  return (
    <section
      id="hero"
      className={cn(
        "pt-16", // header height
        "relative h-svh w-full border-b border-border overflow-hidden md:overflow-x-hidden",
        "pb-4"
      )}
    >
      <div className="relative w-full h-full">
        <div className="mx-auto w-full xl:max-w-7xl px-4 h-full flex flex-col">
          <div className="relative w-full flex grow center start">
            <div className="absolute inset-0 bottom-20 flex center middle">
              <div className="flex flex-col gap-4 middle">
                <p
                  className={cn(
                    "text-6xl lg:text-[250px] font-extrabold",
                    "bg-gradient-to-tr from-foreground to-background text-transparent bg-clip-text"
                  )}
                >
                  Arcstratus
                </p>
                <button
                  type="button"
                  className="px-4 py-2 border-2 hover:border-foreground border-border rounded-full block min-w-xl max-w-4xl"
                >
                  <div className="flex between gap-2">
                    <span>Ask Arcstratus</span>
                    <IconArrowBigRightLinesFilled size={24} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex end between gap-4">
            <div className="flex between gap-4">
              <IconChevronsDown className="animate-bounce" size={36} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
