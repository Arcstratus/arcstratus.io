import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.contact.title}
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg mb-6">{dictionary.contact.subtitle}</p>

            <div className="grid gap-8 md:grid-cols-2 mt-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {dictionary.contact.info.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:contact@arcstratus.io"
                      className="text-primary hover:underline"
                    >
                      contact@arcstratus.io
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-primary hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p>123 Tech Street, Suite 456</p>
                    <p>San Francisco, CA 94107</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {dictionary.contact.info.title}
                </h2>
                <div className="space-y-2">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (PST)</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4">
                  {dictionary.contact.info.title}
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="https://twitter.com/arcstratus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/company/arcstratus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/arcstratus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
