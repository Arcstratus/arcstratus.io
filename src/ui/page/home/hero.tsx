import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n/utils";

interface HeroProps {
  lang: "en" | "tw";
}

export async function Hero(props: HeroProps) {
  const dict = await getDictionary(props.lang);

  return (
    <section id="hero">
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 tracking-tight text-gray-900">
                  {dict.hero.title}
                </h1>
                <h2 className="mt-6 text-gray-600">{dict.hero.subtitle}</h2>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {dict.hero.description}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button size="lg">{dict.hero.cta}</Button>
                  <a href="#" className="text-sm leading-6 text-gray-900">
                    {dict.navigation.about} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
            <div
              className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl ring-1 ring-gray-900/10 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                />
                <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                  <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                    <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900">
                      <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                        <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                          <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                            App.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            Content.jsx
                          </div>
                          <div className="border-r border-gray-600/10 px-4 py-2">
                            Data.jsx
                          </div>
                        </div>
                      </div>
                      <div className="px-6 pt-6 pb-14">
                        {/* 這裡可以放置程式碼預覽或動畫 */}
                        <div className="text-white text-center">
                          <p className="text-lg font-semibold">
                            Cloud Technology Innovation
                          </p>
                          <p className="mt-2 text-sm text-gray-400">
                            Building the future of cloud computing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
