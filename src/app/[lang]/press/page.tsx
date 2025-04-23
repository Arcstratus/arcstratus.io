import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { PageProps } from "@/types/page";

export default async function PressPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.company.press}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">Press Releases</h2>
            <p>
              Welcome to the Arcstratus press center. Here you'll find our
              latest news, press releases, and media resources.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Media Contact</h2>
            <p>For media inquiries, please contact our press team at:</p>
            <ul>
              <li>Email: press@arcstratus.io</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Media Kit</h2>
            <p>
              Download our media kit for company information, logos, and other
              resources:
            </p>
            <ul>
              <li>
                <a
                  href="/media/arcstratus-media-kit.zip"
                  className="text-primary hover:underline"
                >
                  Arcstratus Media Kit (ZIP)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
