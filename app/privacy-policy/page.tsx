import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import "./privacy-policy.css";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "PolarisX株式会社のプライバシーポリシー。社内ナレッジベースSaaSの開発・提供、AI社員（AIエージェント）の構築・提供・運用支援における個人情報の取扱いについて定めます。",
};

const ENACTED_DATE = "2026年6月25日";
const REVISED_DATE = "2026年7月17日";

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
          <p className="lg-updated">
            制定日: {ENACTED_DATE}　／　最終改定日: {REVISED_DATE}
          </p>
        </div>
      </section>

      {/* BODY */}
      <main className="lg-body">
        <div className="lg-narrow">
          <p className="lg-intro">
            <strong>PolarisX株式会社</strong>
            （以下「当社」といいます。）は、社内ナレッジベースSaaSの開発・提供、AI社員（AIエージェント）の構築・提供・運用支援、データ解析コンサルティング等の事業（以下総称して「本サービス」といいます。）を営むにあたり、お客様（以下「ユーザー」）の個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」）その他関係法令を遵守し、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定め、適切な取扱いに努めます。なお、当社は、本ポリシーの全部または一部を改定することがあります。重要な変更がある場合には、本サイト上でお知らせします。
          </p>

          {/* 第1条 */}
          <section className="lg-sec" id="article-1">
            <h2>第1条（基本方針）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、個人情報の取得、利用および提供を、事業遂行に必要な範囲内で適切に行い、あらかじめ示した利用目的の範囲を超えて利用しません。
              </li>
              <li>
                当社は、個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守します。
              </li>
              <li>
                当社は、個人情報の漏えい、滅失またはき損の防止その他の安全管理のために必要かつ適切な措置を講じます。
              </li>
              <li>
                当社は、個人情報に関する苦情および相談に、窓口を設けて速やかに対応します。
              </li>
              <li>
                当社は、本ポリシーの運用状況を継続的に見直し、改善に努めます。
              </li>
            </ul>
          </section>

          {/* 第2条 */}
          <section className="lg-sec" id="article-2">
            <h2>第2条（個人情報の定義）</h2>
            <p>
              本ポリシーにおいて「個人情報」とは、個人情報保護法にいう「個人情報」を指し、生存する個人に関する情報であって、氏名、メールアドレスその他の記述等により特定の個人を識別できる情報（他の情報と容易に照合することができ、それにより特定の個人を識別できることとなるものを含む）および個人識別符号が含まれる情報をいいます。
            </p>
          </section>

          {/* 第3条 */}
          <section className="lg-sec" id="article-3">
            <h2>第3条（個人情報の収集方法）</h2>
            <p>
              当社は、本サービスの提供にあたり、以下のような方法で個人情報を取得することがあります。
            </p>
            <ul className="lg-list">
              <li>
                <dfn>お問い合わせ・ご相談時：</dfn>
                氏名、メールアドレス、会社名、電話番号、役職、ご相談内容
              </li>
              <li>
                <dfn>ご契約締結時：</dfn>
                ご担当者様の氏名、所属、連絡先、契約書記載事項
              </li>
              <li>
                <dfn>本サービス（SaaS）のご利用時：</dfn>
                アカウント情報（氏名、メールアドレス、所属部署等）、認証情報、アクセスログ・利用ログ
              </li>
              <li>
                <dfn>顧客企業のナレッジデータの連携時：</dfn>
                本サービスに接続またはアップロードされたドキュメント・社内情報等に含まれる個人情報
              </li>
              <li>
                <dfn>AI社員（AIエージェント）の構築・運用支援の提供中：</dfn>
                ヒアリング内容、業務ドキュメント、データ連携・権限設計に関する情報
              </li>
              <li>
                <dfn>本サイトの閲覧時：</dfn>
                Cookie等を通じて取得するアクセスログ、IPアドレス等（詳細は第9条）
              </li>
            </ul>
            <p>
              なお、ご提供いただいたお客様の業務データのうち、特定の個人を識別できない統計情報・指標データ等は、個人情報には該当しません。
            </p>
          </section>

          {/* 第4条 */}
          <section className="lg-sec" id="article-4">
            <h2>第4条（個人情報の種類および利用目的）</h2>
            <p>
              当社は、以下の種類の個人情報を、それぞれ対応する目的の範囲内で取得・利用します。
            </p>
            <div className="lg-table-wrap">
              <table className="lg-table">
                <thead>
                  <tr>
                    <th>個人情報の種類</th>
                    <th>利用目的</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      ①
                      本サービスの開発・品質改善に利用するデータに含まれる個人情報
                    </td>
                    <td>
                      本サービスの開発・改善（ナレッジ検索・回答精度の向上等）のため
                    </td>
                  </tr>
                  <tr>
                    <td>
                      ②
                      本サービスをご利用いただくお客様・お問い合わせをいただいた方の個人情報
                    </td>
                    <td>
                      本サービスの提供・運営、ご連絡、お問い合わせ・ご相談への対応、重要なお知らせの通知、サービスの改善・品質向上、マーケティング情報のご案内（同意がある場合に限る）のため
                    </td>
                  </tr>
                  <tr>
                    <td>③ お取引先の個人情報</td>
                    <td>
                      ご契約の締結・履行、ご請求・お支払等の事務処理、その他各種管理のため
                    </td>
                  </tr>
                  <tr>
                    <td>④ 採用応募者の個人情報</td>
                    <td>採用選考業務、募集情報等の提供・ご連絡のため</td>
                  </tr>
                  <tr>
                    <td>⑤ 従業者の個人情報</td>
                    <td>
                      業務上の連絡、雇用管理、報酬の支払、税務・社会保険関連手続き等のため
                    </td>
                  </tr>
                  <tr>
                    <td>⑥ 顧客企業からお預かりした個人情報</td>
                    <td>
                      委託を受けた業務（ナレッジ基盤の構築、AI社員の構築・運用等）の遂行のため
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              当社は、あらかじめご本人の同意を得ず、利用目的の達成に必要な範囲を超えて個人情報を取り扱うことはありません。合併その他の事由により個人情報を取得した場合も、承継前の利用目的の範囲を超えて取り扱うことはありません。ただし、法令等により例外として認められる場合はこの限りではありません。
            </p>
          </section>

          {/* 第5条 */}
          <section className="lg-sec" id="article-5">
            <h2>第5条（利用目的の変更）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更します。
              </li>
              <li>
                利用目的を変更した場合は、変更後の目的について、当社所定の方法によりユーザーに通知し、または本サービスのウェブサイト上に公表します。
              </li>
            </ul>
          </section>

          {/* 第6条 */}
          <section className="lg-sec" id="article-6">
            <h2>第6条（個人情報の第三者提供）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、次の各号に掲げる場合を除くほか、あらかじめユーザー本人の同意を得ることなく、第三者に個人情報を提供しません。
                <ol className="lg-list lg-list--num" style={{ marginTop: "0.75rem" }}>
                  <li>法令に基づく場合</li>
                  <li>
                    人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                  </li>
                  <li>
                    公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                  </li>
                  <li>
                    国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                  </li>
                </ol>
              </li>
              <li>
                前項にかかわらず、次に掲げる場合は、提供先は第三者に該当しないものとします。
                <ol className="lg-list lg-list--num" style={{ marginTop: "0.75rem" }}>
                  <li>
                    当社が利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を委託する場合
                  </li>
                  <li>
                    合併その他の事由による事業承継に伴って個人情報が提供される場合
                  </li>
                </ol>
              </li>
              <li>
                前項第1号のとおり業務の委託を行う場合、当社は委託先の選定にあたり十分な個人情報保護水準を有することを確認するとともに、委託先に対して必要かつ適切な監督を行います。
              </li>
            </ul>
          </section>

          {/* 第7条 */}
          <section className="lg-sec" id="article-7">
            <h2>第7条（外国にある第三者への提供）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、本サービスの提供にあたり、クラウドサービス等のシステム基盤として外国のサーバーを利用する事業者を用いる場合があります。この場合、当該外国の事業者に個人情報を移転することがあります。
              </li>
              <li>
                現時点で個人情報の取扱いに関して利用している主な外国の事業者・移転先国は以下のとおりです。
                <div className="lg-table-wrap" style={{ marginTop: "0.75rem" }}>
                  <table className="lg-table">
                    <thead>
                      <tr>
                        <th>提供先事業者</th>
                        <th>所在国</th>
                        <th>用途</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Amazon Web Services, Inc.</td>
                        <td>アメリカ合衆国</td>
                        <td>クラウドインフラ・データ保管基盤</td>
                      </tr>
                      <tr>
                        <td>Vercel Inc.</td>
                        <td>アメリカ合衆国</td>
                        <td>ウェブサイト・アプリケーションのホスティング基盤</td>
                      </tr>
                      <tr>
                        <td>OpenAI, LLC</td>
                        <td>アメリカ合衆国</td>
                        <td>AIモデル／API（第8条参照）</td>
                      </tr>
                      <tr>
                        <td>Anthropic, PBC</td>
                        <td>アメリカ合衆国</td>
                        <td>AIモデル／API（第8条参照）</td>
                      </tr>
                      <tr>
                        <td>Google LLC</td>
                        <td>アメリカ合衆国</td>
                        <td>
                          AIモデル／API（第8条参照）およびアクセス解析（Google
                          Analytics・第9条参照）
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="lg-note" style={{ marginBottom: 0 }}>
                  ※移転先国における個人情報保護制度については、個人情報保護委員会ウェブサイト（
                  <a
                    href="https://www.ppc.go.jp/personalinfo/legal/kaiseihogohou/#gaikoku"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    外国における個人情報の保護に関する制度等の調査
                  </a>
                  ）をご参照ください。
                </p>
              </li>
              <li>
                当社は、当該外国事業者との契約等において、適切な安全管理措置が講じられるよう定めています。
              </li>
            </ul>
          </section>

          {/* 第8条 */}
          <section className="lg-sec" id="article-8">
            <h2>第8条（サードパーティAIの利用について）</h2>
            <p>
              当社は、本サービスの提供にあたり、以下の事業者が提供するAIモデル／API等（以下「サードパーティAI」といいます。）を利用します。利用するモデルの名称・バージョンは、性能改善・安全性向上等のため随時変更される場合があります。
            </p>
            <ul className="lg-list lg-list--num">
              <li>
                <dfn>利用するサードパーティAIの提供事業者</dfn>
                <ul className="lg-list" style={{ marginTop: "0.75rem" }}>
                  <li>OpenAI, LLC</li>
                  <li>Anthropic, PBC</li>
                  <li>Google LLC</li>
                </ul>
              </li>
              <li>
                <dfn>サードパーティAIに連携するデータ</dfn>
                <ul className="lg-list" style={{ marginTop: "0.75rem" }}>
                  <li>
                    ユーザーが本サービス上で入力した質問・プロンプト、アップロードしたテキスト、ファイル等
                  </li>
                  <li>
                    本サービスに接続されたナレッジデータのうち、回答の生成またはAI社員（AIエージェント）の業務遂行に必要な範囲の情報
                  </li>
                </ul>
              </li>
              <li>
                <dfn>データを利用する目的</dfn>
                <ul className="lg-list" style={{ marginTop: "0.75rem" }}>
                  <li>
                    ナレッジの検索・回答の生成、AI社員による業務の実行等、本サービスの提供のため
                  </li>
                </ul>
              </li>
              <li>
                <dfn>データの取扱いに関する方針</dfn>
                <ul className="lg-list" style={{ marginTop: "0.75rem" }}>
                  <li>
                    当社は、業務上必要な範囲を超えてサードパーティAIにデータを送信せず、顧客企業からお預かりしたデータは契約等で定めた範囲でのみ利用します。
                  </li>
                  <li>
                    当社は、サードパーティAIの利用にあたり、送信したデータが提供事業者によるAIモデルの学習に利用されない設定・契約（法人向けプラン・API等）の下で利用します。
                  </li>
                  <li>
                    ユーザーが機密情報を意図せず入力した場合に備え、当社は運用上の対策に努めます。
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 第9条 */}
          <section className="lg-sec" id="article-9">
            <h2>第9条（Cookie等の利用）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社のウェブサイトでは、サービス向上やアクセス状況の分析を目的として、Cookieおよびこれに類する技術（アクセス解析ツール等）を使用することがあります。
              </li>
              <li>
                これらの技術により、ご本人を直接特定できる情報を取得することはありませんが、ブラウザの設定によりCookieを無効にすることが可能です。ただし、その場合、本サイトの一部機能がご利用いただけなくなることがあります。
              </li>
              <li>
                当社は、アクセス状況の分析のためにGoogle
                Analytics（Google LLCが提供）を利用することがあります。同サービスにおけるデータの取扱いについては、Google社のプライバシーポリシーが適用されます。
              </li>
            </ul>
          </section>

          {/* 第10条 */}
          <section className="lg-sec" id="article-10">
            <h2>第10条（安全管理措置）</h2>
            <p>
              当社は、保有する個人データの安全管理のため、以下の措置を講じています。
            </p>
            <ul className="lg-list">
              <li>
                <dfn>組織的安全管理措置：</dfn>
                個人情報の取扱いに関する責任者を設置し、取扱規程を整備するとともに、漏えい等の事案または兆候を把握した場合の責任者への報告連絡体制を整備しています。
              </li>
              <li>
                <dfn>人的安全管理措置：</dfn>
                従業者に対し、個人情報の取扱いに関する留意事項について教育を行うとともに、秘密保持に関する誓約を求めています。
              </li>
              <li>
                <dfn>物理的安全管理措置：</dfn>
                個人情報を取り扱う機器・電子媒体等の盗難・紛失を防止するための措置を講じ、これらを持ち運ぶ場合には容易に個人データが判明しないよう措置を実施しています。
              </li>
              <li>
                <dfn>技術的安全管理措置：</dfn>
                アクセス制御により取り扱う担当者および個人データの範囲を限定し、通信の暗号化（SSL/TLS）その他の不正アクセス対策を実施しています。
              </li>
              <li>
                <dfn>外的環境の把握：</dfn>
                個人データを外国で保管・処理する場合は、当該国における個人情報保護制度を把握したうえで、必要な安全管理措置を実施します。
              </li>
            </ul>
            <p>
              また、個人データの漏えい、滅失もしくは毀損またはそれらのおそれのある事案が発生した場合には、法令に従い、個人情報保護委員会への報告および本人への通知を行います。
            </p>
          </section>

          {/* 第11条 */}
          <section className="lg-sec" id="article-11">
            <h2>第11条（個人情報の開示）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、本人から、保有個人データまたは第三者提供記録の開示を求められたときは、遅滞なくこれを開示します。ただし、以下のいずれかに該当する場合は、その全部または一部を開示しないことがあり、その場合は理由を付して遅滞なく通知します。
                <ol className="lg-list lg-list--num" style={{ marginTop: "0.75rem" }}>
                  <li>
                    本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
                  </li>
                  <li>
                    当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合
                  </li>
                  <li>その他法令に違反することとなる場合</li>
                </ol>
              </li>
              <li>
                開示の請求にあたっては、電磁的記録の提供または書面の交付のいずれかの方法をご指定いただけます。ご指定がない場合、または指定された方法による開示に多額の費用を要する場合その他当該方法による開示が困難な場合は、書面の交付により開示します。
              </li>
              <li>
                前2項にかかわらず、履歴情報等の保有個人データに該当しない情報については、原則として開示の対象としません。
              </li>
            </ul>
          </section>

          {/* 第12条 */}
          <section className="lg-sec" id="article-12">
            <h2>第12条（個人情報の訂正および削除）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                ユーザーは、当社が保有する自己の個人情報が誤りである場合、当社所定の手続きにより訂正、追加または削除（以下「訂正等」）を請求できます。
              </li>
              <li>
                当社は、請求に理由があると判断した場合、遅滞なく訂正等を行い、その旨をユーザーに通知します。行わない旨を決定した場合も同様に通知します。
              </li>
            </ul>
          </section>

          {/* 第13条 */}
          <section className="lg-sec" id="article-13">
            <h2>第13条（個人情報の利用停止等）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、本人から、個人情報が利用目的の範囲を超えて取り扱われている、不正の手段により取得されたものである、当社が利用する必要がなくなった、漏えい等が発生した、その他本人の権利または正当な利益が害されるおそれがあるとの理由により、利用停止、消去または第三者への提供の停止（以下「利用停止等」）を求められた場合、遅滞なく必要な調査を行います。
              </li>
              <li>
                調査の結果に基づき請求に理由があると判断した場合は、遅滞なく利用停止等を行い、その旨を通知します。行わない旨を決定した場合も同様に通知します。
              </li>
              <li>
                利用停止等に多額の費用を要する場合等、対応が困難な場合であって、ユーザーの権利利益を保護するための代替措置を講じられるときは、その代替措置をもって対応します。
              </li>
            </ul>
          </section>

          {/* 第14条 */}
          <section className="lg-sec" id="article-14">
            <h2>第14条（保有個人データに関する事項）</h2>
            <p>
              当社が保有する個人データに関して、本人からのお申し出があった場合は、以下のとおり対応します。
            </p>
            <ul className="lg-list">
              <li>
                <dfn>事業者名称：</dfn>PolarisX株式会社
              </li>
              <li>
                <dfn>所在地・代表者：</dfn>本ポリシー末尾に記載のとおり
              </li>
              <li>
                <dfn>利用目的：</dfn>第4条に記載のとおり
              </li>
              <li>
                <dfn>安全管理措置：</dfn>
                第10条に記載のとおり（詳細については、第16条のお問い合わせ窓口にご連絡いただければ、遅滞なく回答します）
              </li>
              <li>
                <dfn>苦情の申出先：</dfn>第16条の問い合わせ窓口
              </li>
              <li>
                <dfn>開示等の請求手続き：</dfn>次条のとおり
              </li>
            </ul>
          </section>

          {/* 第15条 */}
          <section className="lg-sec" id="article-15">
            <h2>第15条（開示等の請求手続き）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                前3条の請求（以下「開示等の請求」）をする場合は、第16条のお問い合わせ窓口まで、本人確認のできる資料（運転免許証、マイナンバーカード（表面）、パスポート等いずれか1点の写し）を添えてご連絡ください。なお、当社は個人番号（マイナンバー）を取得しないため、マイナンバーカードの写しは個人番号が記載されていない表面のみをご提出ください。
              </li>
              <li>
                代理人による請求の場合は、委任状等の代理権を確認できる書類および代理人の本人確認書類をあわせてご提出ください。
              </li>
              <li>
                開示等の請求への対応は、書類受領後、原則として2週間以内にメールまたは書面にて回答します。
              </li>
              <li>
                利用目的の通知および開示の請求について、手数料はいただきません。
              </li>
              <li>
                ご提出いただいた本人確認書類は、確認後、適切な方法により速やかに廃棄します。
              </li>
            </ul>
          </section>

          {/* 第16条 */}
          <section className="lg-sec" id="article-16">
            <h2>第16条（お問い合わせ窓口）</h2>
            <p>
              本ポリシーおよび個人情報の取扱いに関するお問い合わせ、苦情・相談は、以下の窓口までご連絡ください。
            </p>
            <div className="lg-contact">
              <dl>
                <dt>運営者</dt>
                <dd>PolarisX株式会社</dd>
                <dt>所在地</dt>
                <dd>
                  東京都渋谷区道玄坂1丁目10番8号　渋谷道玄坂東急ビル2F−C
                </dd>
                <dt>お問い合わせ</dt>
                <dd>
                  <a href="/company#contact">お問い合わせフォーム</a>
                </dd>
                <dt>メール</dt>
                <dd>
                  <a href="mailto:contact@polarisx.ltd">contact@polarisx.ltd</a>
                </dd>
              </dl>
            </div>
          </section>

          {/* 第17条 */}
          <section className="lg-sec" id="article-17">
            <h2>第17条（本ポリシーの変更）</h2>
            <ul className="lg-list lg-list--num">
              <li>
                当社は、法令上ユーザーの同意が必要となる変更を除き、本ポリシーを随時変更できるものとします。
              </li>
              <li>
                利用目的の変更など、ユーザーに重要な影響を及ぼす変更を行う場合は、変更内容を本サイト上に掲示し、または相当な方法により事前に周知します。
              </li>
              <li>
                変更後の本ポリシーは、本サイトに掲載した時点から効力を生じるものとします。
              </li>
            </ul>
          </section>

          {/* Company seal */}
          <div className="lg-seal">
            <p>PolarisX株式会社</p>
            <p>代表取締役CEO　折本 聖也</p>
            <p>東京都渋谷区道玄坂1丁目10番8号　渋谷道玄坂東急ビル2F−C</p>
          </div>
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
