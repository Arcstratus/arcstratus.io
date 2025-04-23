import { I18nProvider } from "@/components/i18n-provider";
import { getDictionary } from "@/i18n/dictionaries";
import { Locale } from "@/i18n/utils";

interface PageProps {
  params:
    | Promise<{
        lang: Locale;
      }>
    | {
        lang: Locale;
      };
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.termsOfService}
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg mb-6">Last Updated: January 1, 2025</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to Arcstratus (hereinafter referred to as "we," "our," or
              "the Company"). These Terms of Service ("Terms") govern your use
              of our website, products, and services.
            </p>
            <p>
              By accessing or using our website, products, or services, you
              agree to be bound by these Terms. If you do not agree to any part
              of these Terms, you may not use our website, products, or
              services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Service Description
            </h2>
            <p>
              Arcstratus provides cloud solutions, software development, and
              DevOps services to help businesses optimize their technology
              infrastructure and business processes. Our specific services
              include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Cloud architecture design and implementation</li>
              <li>Custom software development</li>
              <li>DevOps automation and optimization</li>
              <li>Technical consulting and support</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. User Accounts
            </h2>
            <p>
              Some services may require you to create an account. You are
              responsible for maintaining the confidentiality of your account
              and for all activities that occur under your account. You agree
              to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate, current, and complete information</li>
              <li>Safeguard your account password</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>
                Be responsible for all activities conducted through your account
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Intellectual Property
            </h2>
            <p>
              Our website, products, and services, including all related
              content, features, and design elements, are the property of
              Arcstratus or its licensors and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
            <p>Without our express permission, you may not:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Copy, modify, or create derivative works of our content</li>
              <li>
                Use our trademarks, logos, or other proprietary information
              </li>
              <li>Attempt to reverse engineer or decompile our software</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. User Content
            </h2>
            <p>
              You may have the opportunity to submit, upload, or provide content
              ("User Content"). You retain all rights to your User Content, but
              grant us a non-exclusive, worldwide, royalty-free license to use,
              copy, modify, publish, display, and distribute your User Content
              for the purpose of providing and improving our services.
            </p>
            <p>
              You represent and warrant that you own or have obtained all rights
              and permissions to use and authorize us to use all User Content.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. Prohibited Conduct
            </h2>
            <p>When using our services, you agree not to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>
                Infringe upon the intellectual property or other rights of
                others
              </li>
              <li>Distribute malware or harmful code</li>
              <li>
                Interfere with or disrupt the functionality of our services
              </li>
              <li>Access our systems or networks without authorization</li>
              <li>Collect or harvest user data</li>
              <li>Engage in any activity that could harm us or other users</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Service Changes and Termination
            </h2>
            <p>
              We reserve the right to modify, suspend, or terminate our services
              at any time without notice. We may also limit certain features and
              services or restrict your access to parts or all of the services.
            </p>
            <p>
              We reserve the right to terminate or suspend your access to our
              services in the event of a violation of these Terms, without
              notice.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Disclaimer of Warranties
            </h2>
            <p>
              Our services are provided on an "as is" and "as available" basis,
              without any warranties of any kind. To the fullest extent
              permitted by law, we disclaim all warranties, express or implied,
              including but not limited to implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
            <p>
              We do not warrant that the services will be uninterrupted, secure,
              or error-free, or that defects will be corrected.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Arcstratus and its
              directors, employees, partners, and agents shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data,
              business interruption, or any other damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Arcstratus and
              its directors, employees, partners, and agents from any claims,
              damages, losses, liabilities, costs, and expenses (including
              reasonable attorneys' fees) arising from your violation of these
              Terms, your User Content, or your use of our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              11. Governing Law
            </h2>
            <p>
              These Terms shall be governed by the laws of the Republic of China
              (Taiwan), without regard to its conflict of law principles. Any
              dispute related to these Terms shall be submitted to the Taipei
              District Court as the court of first instance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              12. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. The
              modified Terms will be effective upon posting on our website. Your
              continued use of our services constitutes acceptance of the
              modified Terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
            <p>
              If you have any questions or concerns about these Terms of
              Service, please contact us at:
            </p>
            <p>
              Email: legal@arcstratus.io
              <br />
              Address: No. 1, Songgao Road, Xinyi District, Taipei City
            </p>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
