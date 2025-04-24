import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function SecurityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.resources.security}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Our Security Practices
            </h2>
            <p>
              At Arcstratus, we take security seriously. Our security measures
              include:
            </p>
            <ul>
              <li>End-to-end encryption for all data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Compliance with industry security standards</li>
              <li>24/7 monitoring and threat detection</li>
              <li>Regular security training for all employees</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Reporting Security Issues
            </h2>
            <p>
              If you discover a security vulnerability, please report it to us
              at security@arcstratus.io. We appreciate your help in keeping our
              services secure.
            </p>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
