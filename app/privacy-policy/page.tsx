import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import "./privacy-policy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "PolarisX株式会社のプライバシーポリシー。データ分析コンサルティングにおける、個人情報の取扱いについて定めます。",
};

const LAST_UPDATED = "2026年6月25日";

export default function PrivacyPolicy() {
  return (
    <div
      className={`theme-legal ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      {/* HEADER */}
      <header className="lg-header">
        <div className="lg-wrap lg-header__in">
          <Link className="lg-logo" href="/" aria-label="PolarisX">
            <img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
          </Link>
          <nav className="lg-nav">
            <Link href="/">HOME</Link>
            <Link href="/company">COMPANY</Link>
            <Link href="/blogs">BLOG</Link>
          </nav>
          <div className="lg-header__cta">
            <Link href="/company#contact" className="px-btn px-btn--primary px-btn--sm">
              CONTACT
            </Link>
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
            <h2>第1条（個人情報）</h2>
            <p>
              「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、メールアドレス、その他の記述等により特定の個人を識別できる情報および個人識別符号が含まれるものを指します。
            </p>
          </section>

          {/* 第2条 */}
          <section className="lg-sec" id="article-2">
            <h2>第2条（個人情報の収集方法）</h2>
            <p>当社は、以下の方法により個人情報を収集することがあります。</p>
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
            </ul>
          </section>

          {/* 第3条 */}
          <section className="lg-sec" id="article-3">
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
            <h2>第4条（利用目的の変更）</h2>
            <ul className="lg-list lg-list--num">
              <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
              <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法によりユーザーに通知し、または本サービス上に公表します。</li>
            </ul>
          </section>

          {/* 第5条 */}
          <section className="lg-sec" id="article-5">
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
              前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。
            </p>
            <ul className="lg-list lg-list--num">
              <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
              <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
              <li>個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合</li>
            </ul>
          </section>

          {/* 第6条 */}
          <section className="lg-sec" id="article-6">
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
            <h2>第7条（個人情報の訂正および削除）</h2>
            <ul className="lg-list lg-list--num">
              <li>ユーザーは、当社の保有する自己の個人情報が誤った情報である場合には、当社が定める手続きにより、訂正、追加または削除（以下「訂正等」）を請求できます。</li>
              <li>当社は、請求に応じる必要があると判断した場合には、遅滞なく訂正等を行います。</li>
              <li>当社は、訂正等を行った場合、または行わない旨を決定したときは、遅滞なくユーザーに通知します。</li>
            </ul>
          </section>

          {/* 第8条 */}
          <section className="lg-sec" id="article-8">
            <h2>第8条（個人情報の利用停止等）</h2>
            <ul className="lg-list lg-list--num">
              <li>当社は、本人から、個人情報が利用目的の範囲を超えて取り扱われている、または不正の手段により取得されたという理由により、利用の停止または消去（以下「利用停止等」）を求められた場合には、遅滞なく必要な調査を行います。</li>
              <li>調査結果に基づき請求に応じる必要があると判断した場合には、遅滞なく利用停止等を行います。</li>
              <li>当社は、利用停止等を行った場合、または行わない旨を決定したときは、遅滞なくユーザーに通知します。</li>
              <li>前2項にかかわらず、利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。</li>
            </ul>
          </section>

          {/* 第9条 */}
          <section className="lg-sec" id="article-9">
            <h2>第9条（プライバシーポリシーの変更）</h2>
            <ul className="lg-list lg-list--num">
              <li>本ポリシーの内容は、法令その他別段の定めのある事項を除き、ユーザーに通知することなく変更できるものとします。</li>
              <li>別途定める場合を除き、変更後の本ポリシーは本ページに掲載したときから効力を生じます。</li>
            </ul>
          </section>

          {/* 第10条 */}
          <section className="lg-sec" id="article-10">
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
            <Link className="lg-logo" href="/" aria-label="PolarisX">
              <img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
            </Link>
            <ul>
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/company">COMPANY</Link>
              </li>
              <li>
                <Link href="/blogs">BLOG</Link>
              </li>
              <li>
                <Link href="/privacy-policy">PRIVACY</Link>
              </li>
            </ul>
          </div>
          <div className="lg-copy">© 2026 PolarisX, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
