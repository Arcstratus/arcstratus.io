import { Button } from "@/components/ui/button";
import { getDictionary, type Locale } from "@/i18n/utils";
import { Section } from "../section";

export async function Contact(props: { lang: Locale }) {
  const dict = await getDictionary(props.lang);

  return (
    <Section name="Contact" noLable className="py-16">
      <div className="container mx-auto bg-muted p-8 rounded-lg">
        <div className="flex flex-col gap-8 center middle">
          <p className="max-w-lg text-center">{dict.home.contact.content}</p>
          <Button className="max-w-fit">{dict.home.contact.cta}</Button>
        </div>
      </div>
    </Section>
  );
}
