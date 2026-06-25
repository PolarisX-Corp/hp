import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import "./privacy-policy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "PolarisX株式会社のプライバシーポリシー。データ分析コンサルティングにおける、個人情報の取扱いについて定めます。",
};

const LAST_UPDATED = "2026年6月25日";

const THIRD_PARTY_SERVICES = [
  {
    name: "LLMプロバイダ（Google / OpenAI 等）",
    use: "AI分析・レポート生成",
    data: "質問内容、関連メタデータ、スキーマ情報",
  },
  {
    name: "ユーザーのクラウド（Google Cloud / AWS / Azure 等）",
    use: "分析対象データの保管・参照",
    data: "業務データへのアクセス（ユーザー権限内）",
  },
  {
    name: "Slack / Microsoft Teams 等",
    use: "コミュニケーション",
    data: "ユーザー入力、応答、レポートリンク",
  },
  {
    name: "GitHub 等",
    use: "成果物リポジトリの納品・管理",
    data: "分析プロジェクト・設定",
  },
  {
    name: "Supabase 等",
    use: "運用管理データベース",
    data: "アカウント情報、契約情報",
  },
  {
    name: "Resend",
    use: "お問い合わせメールの送信",
    data: "氏名、メールアドレス、お問い合わせ内容",
  },
  {
    name: "Google Analytics / GTM 等",
    use: "ウェブサイトのアクセス解析",
    data: "閲覧履歴、技術情報（匿名化）",
  },
  {
    name: "Vercel（ホスティング事業者）",
    use: "ウェブサイトのホスティング",
    data: "サーバーログ",
  },
];

export default function PrivacyPolicy() {
  return (
    <div
      className={`theme-legal ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      {/* HEADER */}
      <header className="lg-header">
        <div className="lg-wrap lg-header__in">
          <a className="lg-logo" href="/" aria-label="PolarisX">
            <img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
          </a>
          <nav className="lg-nav">
            <a href="/">HOME</a>
            <a href="/company">COMPANY</a>
            <a href="/blogs">BLOG</a>
          </nav>
          <div className="lg-header__cta">
            <a href="/company#contact" className="px-btn px-btn--primary px-btn--sm">
              CONTACT
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="lg-hero">
        <div className="lg-narrow">
          <span className="lg-eyebrow">
            <ShieldCheck size={14} />
            Privacy Policy
          </span>
          <h1>プライバシーポリシー</h1>
          <p className="lg-updated">最終更新日: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* BODY */}
      <main className="lg-body">
        <div className="lg-narrow">
          <p className="lg-intro">
            <strong>PolarisX株式会社</strong>（以下「当社」）は、データ分析コンサルティング（以下「本サービス」）における、お客様（以下「ユーザー」）の個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
          </p>

          {/* 第1条 */}
          <section className="lg-sec" id="article-1">
            <div className="lg-sec__no">Article 01</div>
            <h2>第1条（個人情報）</h2>
            <p>
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、メールアドレス、その他の記述等により特定の個人を識別できる情報および個人識別符号が含まれるものを指します。
            </p>
          </section>

          {/* 第2条 */}
          <section className="lg-sec" id="article-2">
            <div className="lg-sec__no">Article 02</div>
            <h2>第2条（個人情報の収集方法）</h2>
            <p>当社は、以下の方法により個人情報を収集します。</p>
            <ul className="lg-list">
              <li>
                <dfn>お問い合わせ・相談時:</dfn> 氏名、メールアドレス、会社名、電話番号、役職、ご相談内容
              </li>
              <li>
                <dfn>コンサルティング契約時:</dfn> 担当者氏名、所属、連絡先、契約書記載事項
              </li>
              <li>
                <dfn>コンサルティング実施中:</dfn> ヒアリング内容、業務概念・指標定義のドキュメント、分析設計情報
              </li>
              <li>
                <dfn>継続的なご支援の中で:</dfn> 分析依頼内容、分析・レポートの提供ログ、利用統計
              </li>
              <li>
                <dfn>ウェブサイト訪問時:</dfn> IPアドレス、ブラウザ情報、アクセス日時、ページ閲覧履歴（Cookieおよびアクセス解析ツール経由）
              </li>
            </ul>
          </section>

          {/* 第3条 */}
          <section className="lg-sec" id="article-3">
            <div className="lg-sec__no">Article 03</div>
            <h2>第3条（個人情報を収集・利用する目的）</h2>
            <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
            <ul className="lg-list lg-list--num">
              <li>本サービスの提供・運営のため（分析、コンサルティング、レポート提供等）</li>
              <li>ユーザーとの契約締結・契約履行のため</li>
              <li>ユーザーからのお問い合わせ・相談に対応するため</li>
              <li>本サービスのメンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
              <li>本サービスの利用状況の分析および品質改善のため</li>
              <li>不正利用の防止、セキュリティ管理のため</li>
              <li>請求・支払処理のため</li>
              <li>本サービスに関するマーケティング情報の提供のため（ユーザーの同意がある場合に限る）</li>
              <li>上記の利用目的に付随する目的</li>
            </ul>
          </section>

          {/* 第4条 */}
          <section className="lg-sec" id="article-4">
            <div className="lg-sec__no">Article 04</div>
            <h2>第4条（利用目的の変更）</h2>
            <ul className="lg-list lg-list--num">
              <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
              <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法によりユーザーに通知し、または本サービス上に公表します。</li>
            </ul>
          </section>

          {/* 第5条 */}
          <section className="lg-sec" id="article-5">
            <div className="lg-sec__no">Article 05</div>
            <h2>第5条（第三者提供）</h2>
            <p>
              当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供しません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
            </p>
            <ul className="lg-list lg-list--num">
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
            </ul>
            <p>
              前項にかかわらず、本サービスの提供にあたり以下の第三者サービスを利用しており、各サービスのプライバシーポリシーに従って情報が処理されます。これらは業務委託に該当し、第三者提供には該当しません。
            </p>
            <div className="lg-tablewrap">
              <table className="lg-table">
                <thead>
                  <tr>
                    <th>サービス</th>
                    <th>用途</th>
                    <th>提供される情報</th>
                  </tr>
                </thead>
                <tbody>
                  {THIRD_PARTY_SERVICES.map((svc) => (
                    <tr key={svc.name}>
                      <td>{svc.name}</td>
                      <td>{svc.use}</td>
                      <td>{svc.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 第6条 */}
          <section className="lg-sec" id="article-6">
            <div className="lg-sec__no">Article 06</div>
            <h2>第6条（個人情報の開示）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、本人から個人情報の開示を求められたときは、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないことがあり、開示しない決定をした場合はその旨を遅滞なく通知します。
                <ul className="lg-list" style={{ marginTop: "0.75rem" }}>
                  <li>本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合</li>
                  <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
                  <li>その他法令に違反することとなる場合</li>
                </ul>
              </li>
              <li>前項にかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示しません。</li>
            </ul>
          </section>

          {/* 第7条 */}
          <section className="lg-sec" id="article-7">
            <div className="lg-sec__no">Article 07</div>
            <h2>第7条（個人情報の訂正および削除）</h2>
            <ul className="lg-list lg-list--num">
              <li>ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、訂正、追加または削除（以下「訂正等」）を請求できます。</li>
              <li>当社は、請求に応じる必要があると判断した場合には、遅滞なく訂正等を行います。</li>
              <li>当社は、訂正等を行った場合、または行わない旨を決定したときは、遅滞なくユーザーに通知します。</li>
            </ul>
          </section>

          {/* 第8条 */}
          <section className="lg-sec" id="article-8">
            <div className="lg-sec__no">Article 08</div>
            <h2>第8条（個人情報の利用停止等）</h2>
            <ul className="lg-list lg-list--num">
              <li>当社は、本人から、個人情報が利用目的の範囲を超えて取り扱われている、または不正の手段により取得されたという理由により、利用の停止または消去（以下「利用停止等」）を求められた場合には、遅滞なく必要な調査を行います。</li>
              <li>調査結果に基づき請求に応じる必要があると判断した場合には、遅滞なく利用停止等を行います。</li>
              <li>当社は、利用停止等を行った場合、または行わない旨を決定したときは、遅滞なくユーザーに通知します。</li>
            </ul>
          </section>

          {/* 第9条 */}
          <section className="lg-sec" id="article-9">
            <div className="lg-sec__no">Article 09</div>
            <h2>第9条（プライバシーポリシーの変更）</h2>
            <ul className="lg-list lg-list--num">
              <li>本ポリシーの内容は、法令その他別段の定めのある事項を除き、ユーザーに通知することなく変更できるものとします。</li>
              <li>別途定める場合を除き、変更後の本ポリシーは本ページに掲載したときから効力を生じます。</li>
            </ul>
          </section>

          {/* 第10条 */}
          <section className="lg-sec" id="article-10">
            <div className="lg-sec__no">Article 10</div>
            <h2>第10条（お問い合わせ窓口）</h2>
            <p>
              本ポリシーに関するお問い合わせは、
              <a href="/company#contact">お問い合わせフォーム</a>
              または下記メールアドレスよりご連絡ください。
            </p>
            <div className="lg-contact">
              <dl>
                <dt>運営者</dt>
                <dd>PolarisX株式会社</dd>
                <dt>お問い合わせ</dt>
                <dd>
                  <a href="mailto:contact@polarisx.ltd">contact@polarisx.ltd</a>
                </dd>
              </dl>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="lg-footer">
        <div className="lg-wrap">
          <div className="lg-foot">
            <a className="lg-logo" href="/" aria-label="PolarisX">
              <img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
            </a>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/company">COMPANY</a>
              </li>
              <li>
                <a href="/blogs">BLOG</a>
              </li>
              <li>
                <a href="/privacy-policy">PRIVACY</a>
              </li>
            </ul>
          </div>
          <div className="lg-copy">© 2026 PolarisX, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
