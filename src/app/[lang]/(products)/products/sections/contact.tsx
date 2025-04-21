import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getDictionary, type Locale } from "@/i18n/utils";

interface ContactProps {
  lang: Locale;
}

export const Contact = async ({ lang }: ContactProps) => {
  const dict = await getDictionary(lang);

  return (
    <section className="relative w-full bg-muted">
      <div className="max-w-5xl mx-auto p-8">
        <div className="flex flex-col middle center gap-4">
          <h2 className="text-2xl font-bold">{dict.contact.title}</h2>
          <p className="pb-8">{dict.contact.description}</p>
          <Separator />
          <div className="flex flex-col xl:flex-row right gap-4 w-full">
            <Button>{dict.contact.form.submit}</Button>
            <Button variant="outline">{dict.home.contact.cta}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
