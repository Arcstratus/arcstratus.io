import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";
import { I18nProvider } from "@/components/i18n-provider";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const dictionary = getDictionary(params.lang);

  return (
    <I18nProvider locale={params.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.privacyPolicy}
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Last Updated: January 1, 2025
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              Arcstratus (hereinafter referred to as "we," "our," or "the Company") respects your privacy and is committed to protecting your personal data. This Privacy Policy will inform you about how we collect, use, disclose, transfer, and store your personal data.
            </p>
            <p>
              Please read this Privacy Policy carefully to understand our practices regarding your personal data. By using our services, you agree to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Personal Identification Information</strong>: Including name, email address, phone number, postal address, etc.
              </li>
              <li>
                <strong>Business Information</strong>: Including company name, job title, business needs, etc.
              </li>
              <li>
                <strong>Technical Information</strong>: Including IP address, browser type, device information, access times, etc.
              </li>
              <li>
                <strong>Usage Data</strong>: Including information about how you use our website, products, and services.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Collect Information</h2>
            <p>We collect information through the following methods:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Direct Interactions</strong>: When you fill out forms, subscribe to our services, request information, or contact us.
              </li>
              <li>
                <strong>Automated Technologies</strong>: When you use our website, we may automatically collect technical data.
              </li>
              <li>
                <strong>Third Parties</strong>: We may receive data from third-party service providers.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. How We Use Your Information</h2>
            <p>We use your information for purposes including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Providing and managing our products and services</li>
              <li>Improving our website, products, and services</li>
              <li>Communicating with you and responding to your inquiries</li>
              <li>Sending you relevant marketing information (if you have opted in)</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Information Sharing and Disclosure</h2>
            <p>
              We may share your personal data with:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Our service providers and business partners</li>
              <li>Government agencies and regulatory bodies as required by law</li>
              <li>Third parties in the event of a business transfer, merger, or acquisition</li>
            </ul>
            <p>
              We do not sell your personal data to third parties.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Your Rights</h2>
            <p>
              Under applicable data protection laws, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate personal data</li>
              <li>Erasure of your personal data</li>
              <li>Objection to processing of your personal data</li>
              <li>Restriction of processing of your personal data</li>
              <li>Transfer of your personal data</li>
              <li>Withdrawal of consent</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookie Policy</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control the use of cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post any changes on our website and notify you of significant changes.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@arcstratus.io<br />
              Address: No. 1, Songgao Road, Xinyi District, Taipei City
            </p>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
