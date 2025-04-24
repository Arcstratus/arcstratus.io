import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function PartnersPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.developers.partners}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Partners</h2>
            <p>
              We work with a network of trusted partners to deliver the best
              solutions to our clients. Our partners include:
            </p>
            <ul>
              <li>Technology providers</li>
              <li>Cloud service providers</li>
              <li>Consulting firms</li>
              <li>System integrators</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Partner Benefits
            </h2>
            <ul>
              <li>Access to our technology stack</li>
              <li>Technical support and training</li>
              <li>Marketing and sales resources</li>
              <li>Revenue sharing opportunities</li>
            </ul>

            <div className="mt-8">
              <a
                href={`/${resolvedParams.lang}/partners/become`}
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {dictionary.common.footer.developers.becomePartner}
              </a>
            </div>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
