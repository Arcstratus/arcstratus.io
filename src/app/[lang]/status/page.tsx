import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function StatusPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.resources.serviceStatus}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>All systems are operational.</p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">System Status</h2>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">Cloud Services</span>
                  <span className="text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">API Services</span>
                  <span className="text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="font-medium">Database Services</span>
                  <span className="text-green-600 dark:text-green-400">
                    Operational
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
