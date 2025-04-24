import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function BecomePartnerPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.developers.becomePartner}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Join our partner program and grow your business with our
              technology solutions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Partner Program Tiers
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Silver</h3>
                <ul className="space-y-2">
                  <li>Basic technical support</li>
                  <li>Marketing materials</li>
                  <li>Partner portal access</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Gold</h3>
                <ul className="space-y-2">
                  <li>Priority technical support</li>
                  <li>Dedicated account manager</li>
                  <li>Training sessions</li>
                  <li>Co-marketing opportunities</li>
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Platinum</h3>
                <ul className="space-y-2">
                  <li>24/7 technical support</li>
                  <li>Strategic partnership</li>
                  <li>Custom solutions</li>
                  <li>Revenue sharing program</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Application Process
            </h2>
            <ol className="space-y-4">
              <li>Fill out the partner application form</li>
              <li>Schedule an introductory call with our team</li>
              <li>Complete the partner onboarding process</li>
              <li>Start your partnership journey</li>
            </ol>

            <div className="mt-8">
              <a
                href="mailto:partners@arcstratus.io"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
