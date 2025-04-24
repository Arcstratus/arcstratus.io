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

export default async function TermsOfServicePageTW({ params }: PageProps) {
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
            <p className="text-lg mb-6">最後更新日期：2025年1月1日</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. 接受條款</h2>
            <p>
              歡迎使用諾澄科技（以下簡稱「我們」、「本公司」或「Arcstratus」）的網站和服務。本服務條款（「條款」）規定了您使用我們網站、產品和服務的條件。
            </p>
            <p>
              通過訪問或使用我們的網站、產品或服務，您同意受這些條款的約束。如果您不同意這些條款的任何部分，則您不得使用我們的網站、產品或服務。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. 服務描述</h2>
            <p>
              Arcstratus 提供雲端解決方案、軟體開發和 DevOps
              服務，幫助企業優化其技術基礎設施和業務流程。我們的具體服務包括但不限於：
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>雲端架構設計和實施</li>
              <li>定制軟體開發</li>
              <li>DevOps 自動化和優化</li>
              <li>技術諮詢和支持</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. 用戶帳戶</h2>
            <p>
              某些服務可能需要您創建帳戶。您負責維護您帳戶的機密性，並對發生在您帳戶下的所有活動負責。您同意：
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>提供準確、完整和最新的資訊</li>
              <li>保護您的帳戶密碼</li>
              <li>立即通知我們任何未經授權使用您帳戶的情況</li>
              <li>對通過您的帳戶進行的所有活動負責</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. 知識產權</h2>
            <p>
              我們的網站、產品和服務，包括所有相關的內容、功能和設計元素，均為
              Arcstratus
              或其許可方的財產，受著作權、商標和其他知識產權法律的保護。
            </p>
            <p>未經我們明確許可，您不得：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>複製、修改或創建我們內容的衍生作品</li>
              <li>使用我們的商標、標誌或其他專有資訊</li>
              <li>嘗試反向工程或反編譯我們的軟體</li>
              <li>移除任何著作權或專有權聲明</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. 用戶內容</h2>
            <p>
              您可能有機會提交、上傳或提供內容（「用戶內容」）。您保留對您的用戶內容的所有權利，但授予我們非獨家、全球性、免版稅的許可，以使用、複製、修改、發布、展示和分發您的用戶內容，用於提供和改進我們的服務。
            </p>
            <p>
              您聲明並保證您擁有或已獲得使用和授權我們使用所有用戶內容的權利。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. 禁止行為</h2>
            <p>使用我們的服務時，您同意不會：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>違反任何適用的法律或法規</li>
              <li>侵犯他人的知識產權或其他權利</li>
              <li>傳播惡意軟體或有害代碼</li>
              <li>干擾或破壞我們服務的功能</li>
              <li>未經授權訪問我們的系統或網絡</li>
              <li>收集或收穫用戶資料</li>
              <li>從事任何可能損害我們或其他用戶的活動</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. 服務變更和終止
            </h2>
            <p>
              我們保留隨時修改、暫停或終止我們服務的權利，恕不另行通知。我們也可能限制某些功能和服務的使用，或限制您對部分或全部服務的訪問。
            </p>
            <p>
              我們保留在違反這些條款的情況下終止或暫停您訪問我們服務的權利，恕不另行通知。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. 免責聲明</h2>
            <p>
              我們的服務按「現狀」和「可用性」提供，不提供任何明示或暗示的保證。在法律允許的最大範圍內，我們否認所有保證，包括但不限於適銷性、特定用途適用性和非侵權的暗示保證。
            </p>
            <p>我們不保證服務將不間斷、安全或無錯誤，也不保證缺陷將被糾正。</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. 責任限制</h2>
            <p>
              在法律允許的最大範圍內，Arcstratus
              及其董事、員工、合作夥伴和代理人不對任何間接、附帶、特殊、後果性或懲罰性損害負責，包括但不限於利潤損失、數據損失、業務中斷或任何其他損害。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. 賠償</h2>
            <p>
              您同意賠償、辯護並使 Arcstratus
              及其董事、員工、合作夥伴和代理人免受因您違反這些條款、您的用戶內容或您使用我們服務而產生的任何索賠、損害、損失、責任、成本和費用（包括合理的律師費）的影響。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. 適用法律</h2>
            <p>
              這些條款受中華民國法律管轄，不考慮法律衝突原則。與這些條款相關的任何爭議應提交給台北地方法院作為第一審管轄法院。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">12. 條款變更</h2>
            <p>
              我們保留隨時修改這些條款的權利。修改後的條款將在我們的網站上發布時生效。繼續使用我們的服務即表示您接受修改後的條款。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">13. 聯繫我們</h2>
            <p>
              如果您對這些服務條款有任何問題或疑慮，請通過以下方式聯繫我們：
            </p>
            <p>
              電子郵件：legal@arcstratus.io
              <br />
              地址：台北市信義區松高路1號
            </p>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
