import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function Page({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">{dictionary.common.title}</h1>
      <p className="mt-2">{dictionary.common.description}</p>
    </div>
  );
}
