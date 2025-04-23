import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function SupportPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.resources.support}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Our support team is here to help you with any questions or issues
              you may have. Please contact us through the following channels:
            </p>
            <ul>
              <li>Email: support@arcstratus.io</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                Business Hours: Monday to Friday, 9:00 AM - 6:00 PM (UTC+8)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
