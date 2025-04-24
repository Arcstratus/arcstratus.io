import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function CareersPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.careers.title}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg mb-6">{dictionary.careers.description}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {dictionary.careers.currentOpenings}
            </h2>
            <div className="space-y-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Software Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full-time | Remote
                </p>
                <p className="mb-4">
                  We're looking for a skilled software engineer to join our
                  development team and help build innovative solutions.
                </p>
                <a
                  href="mailto:careers@arcstratus.io?subject=Software Engineer Application"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {dictionary.careers.applyNow}
                </a>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Product Designer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full-time | Remote
                </p>
                <p className="mb-4">
                  Join our design team to create beautiful and intuitive user
                  experiences for our products.
                </p>
                <a
                  href="mailto:careers@arcstratus.io?subject=Product Designer Application"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {dictionary.careers.applyNow}
                </a>
              </div>

              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Technical Support Specialist
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Full-time | Remote
                </p>
                <p className="mb-4">
                  Help our customers succeed by providing excellent technical
                  support and guidance.
                </p>
                <a
                  href="mailto:careers@arcstratus.io?subject=Technical Support Specialist Application"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  {dictionary.careers.applyNow}
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {dictionary.careers.whyJoinUs}
            </h2>
            <ul className="space-y-2">
              <li>Competitive salary and benefits</li>
              <li>Remote work flexibility</li>
              <li>Professional development opportunities</li>
              <li>Collaborative and inclusive work environment</li>
              <li>Opportunity to work on cutting-edge technology</li>
            </ul>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
