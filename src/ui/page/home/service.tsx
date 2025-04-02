import { getDictionary, type Locale } from "@/i18n/utils";
import { Section } from "../section";

interface ServicesProps {
  lang: Locale;
}

export async function Service(props: ServicesProps) {
  const dict = await getDictionary(props.lang);

  return (
    <Section name="Service">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {dict.home.service.map((service) => (
          <div key={service.title}>
            <h3 className="text-2xl font-bold">{service.title}</h3>
            <p className="text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
