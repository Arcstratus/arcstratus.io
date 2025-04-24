import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function LegalPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.resources.legal}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Legal Documents
            </h2>
            <ul>
              <li>
                <a
                  href={`/${resolvedParams.lang}/privacy`}
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={`/${resolvedParams.lang}/terms`}
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href={`/${resolvedParams.lang}/cookies`}
                  className="text-primary hover:underline"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Compliance</h2>
            <p>
              Arcstratus complies with relevant data protection and privacy
              laws, including:
            </p>
            <ul>
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>
                Personal Information Protection and Electronic Documents Act
                (PIPEDA)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
