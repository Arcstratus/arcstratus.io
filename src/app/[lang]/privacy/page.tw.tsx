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

export default async function PrivacyPolicyPageTW({ params }: PageProps) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const dictionary = getDictionary(resolvedParams.lang);

  return (
    <I18nProvider locale={resolvedParams.lang} dictionary={dictionary}>
      <div className="container mx-auto py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">
            {dictionary.common.footer.privacyPolicy}
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg mb-6">最後更新日期：2025年1月1日</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. 引言</h2>
            <p>
              諾澄科技（以下簡稱「我們」、「本公司」或「Arcstratus」）尊重您的隱私，並致力於保護您的個人資料。本隱私政策將告知您我們如何收集、使用、披露、傳輸和存儲您的個人資料。
            </p>
            <p>
              請仔細閱讀本隱私政策，以了解我們對您個人資料的處理方式。使用我們的服務即表示您同意本隱私政策中描述的做法。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. 我們收集的資料
            </h2>
            <p>我們可能收集以下類型的資料：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>個人識別資訊</strong>
                ：包括姓名、電子郵件地址、電話號碼、郵寄地址等。
              </li>
              <li>
                <strong>商業資訊</strong>：包括公司名稱、職位、業務需求等。
              </li>
              <li>
                <strong>技術資訊</strong>
                ：包括IP地址、瀏覽器類型、設備資訊、訪問時間等。
              </li>
              <li>
                <strong>使用資料</strong>
                ：包括您如何使用我們的網站、產品和服務的資訊。
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. 我們如何收集資料
            </h2>
            <p>我們通過以下方式收集資料：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>直接互動</strong>
                ：當您填寫表單、訂閱我們的服務、請求資料或與我們聯繫時。
              </li>
              <li>
                <strong>自動技術</strong>
                ：當您使用我們的網站時，我們可能會自動收集技術資料。
              </li>
              <li>
                <strong>第三方</strong>：我們可能從第三方服務提供商處接收資料。
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. 我們如何使用您的資料
            </h2>
            <p>我們使用您的資料的目的包括：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>提供和管理我們的產品和服務</li>
              <li>改進我們的網站、產品和服務</li>
              <li>與您溝通並回應您的查詢</li>
              <li>向您發送相關的營銷資訊（如果您已選擇接收）</li>
              <li>遵守法律義務</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. 資料共享與披露
            </h2>
            <p>我們可能與以下各方共享您的個人資料：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>我們的服務提供商和業務合作夥伴</li>
              <li>法律要求的政府機構和監管機構</li>
              <li>在業務轉讓、合併或收購的情況下的第三方</li>
            </ul>
            <p>我們不會出售您的個人資料給第三方。</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. 資料安全</h2>
            <p>
              我們實施了適當的安全措施，以防止您的個人資料被意外丟失、使用或訪問、更改或披露。我們限制只有那些出於業務需要而必須訪問您個人資料的員工、代理商、承包商和其他第三方才能訪問您的個人資料。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. 資料保留</h2>
            <p>
              我們只會在滿足收集目的所需的時間內保留您的個人資料，包括出於滿足任何法律、會計或報告要求的目的。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. 您的權利</h2>
            <p>根據適用的資料保護法律，您可能擁有以下權利：</p>
            <ul className="list-disc pl-6 mb-6">
              <li>訪問您的個人資料</li>
              <li>更正不準確的個人資料</li>
              <li>要求刪除您的個人資料</li>
              <li>反對處理您的個人資料</li>
              <li>要求限制處理您的個人資料</li>
              <li>請求轉移您的個人資料</li>
              <li>撤回同意</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookie 政策</h2>
            <p>
              我們使用 Cookie
              和類似技術來提升您的瀏覽體驗、分析網站流量和個性化內容。您可以通過瀏覽器設置控制
              Cookie 的使用。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              10. 隱私政策的變更
            </h2>
            <p>
              我們可能會不時更新本隱私政策。我們會在網站上發布任何變更，並在進行重大變更時通知您。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. 聯繫我們</h2>
            <p>如果您對本隱私政策有任何問題或疑慮，請通過以下方式聯繫我們：</p>
            <p>
              電子郵件：privacy@arcstratus.io
              <br />
              地址：台北市信義區松高路1號
            </p>
          </div>
        </div>
      </div>
    </I18nProvider>
  );
}
