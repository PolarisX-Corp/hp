import type { Metadata } from "next";
import { Fragment } from "react";
import { Sparkles, ArrowRight, Crosshair, Mountain } from "lucide-react";
import { COMPANY_BRAND, COMPANY_PROFILE } from "@/lib/company";
import CompanyContactForm from "../components/CompanyContactForm";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import "./company.css";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "PolarisX株式会社の会社情報。法人向けAIエージェントの開発、社内ナレッジベースの構築、AIコンサルティングサービスを提供しています。",
};

const MARQUEE_ITEMS = [
  "AIを会社のOSにする",
  "AIファースト",
  "法人向けAIエージェント",
  "社内ナレッジベース",
  "AIコンサルティング",
];

function MarqueeGroup() {
  return (
    <div className="co-mqgroup">
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          <span className="co-mqi">{item}</span>
          <span className="co-mqsep" />
        </Fragment>
      ))}
    </div>
  );
}

export default function Company() {
  return (
    <div
      className={`theme-company ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      {/* HEADER */}
      <header className="co-header">
        <div className="co-wrap co-header__in">
          <a className="co-logo" href="#top" aria-label="PolarisX">
            <img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
          </a>
          <nav className="co-nav">
            <a href="#mission">MISSION</a>
            <a href="#values">VALUES</a>
            <a href="#services">SERVICES</a>
            <a href="#members">MEMBERS</a>
            <a href="#company">COMPANY</a>
          </nav>
          <div className="co-header__cta">
            <a href="#contact" className="px-btn px-btn--primary px-btn--sm">CONTACT</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="co-hero" id="top">
        <div className="co-stars">
          <div className="co-star" style={{ width: "360px", height: "360px", top: "-90px", right: "-60px" }} />
          <div className="co-star" style={{ width: "200px", height: "200px", top: "280px", left: "-70px", opacity: 0.3 }} />
        </div>
        <div className="co-wrap co-hero__in">
          <span className="co-eyebrow"><Sparkles />Founded July 2026 — Tokyo</span>
          <h1>AIを<br /><span className="co-accent">会社のOSに。</span></h1>
          <div className="co-hero__row">
            <p>{COMPANY_BRAND.catchphrase}<br />{COMPANY_BRAND.description}</p>
            <div className="co-hero__acts">
              <a className="px-btn px-btn--primary px-btn--lg" href="#mission">MISSION<ArrowRight className="px-btn__icon" /></a>
              <a className="px-btn px-btn--secondary px-btn--lg" href="#contact">お問い合わせ</a>
            </div>
          </div>
        </div>
        <div className="co-marquee" aria-hidden="true">
          <div className="co-mqtrack">
            <MarqueeGroup />
            <MarqueeGroup />
          </div>
        </div>
      </section>

      {/* MISSION (01) */}
      <section className="co-sec co-mission px-inverse" id="mission">
        <div className="co-stars">
          <div className="co-star" style={{ width: "340px", height: "340px", top: "-80px", left: "8%", background: "radial-gradient(circle,rgba(54,110,255,0.45),transparent 65%)" }} />
          <div className="co-star" style={{ width: "240px", height: "240px", bottom: "-90px", right: "6%", background: "radial-gradient(circle,rgba(124,130,226,0.4),transparent 65%)" }} />
        </div>
        <div className="co-wrap">
          <div className="co-secnum co-reveal">MISSION ／ 01</div>
          <h2 className="co-reveal">{COMPANY_BRAND.mission}</h2>
        </div>
      </section>

      {/* VALUES (02) */}
      <section className="co-sec" id="values">
        <div className="co-wrap">
          <div className="co-secnum co-reveal">CORE VALUES ／ 02</div>
          <div className="co-values">
            {COMPANY_BRAND.values.map((value, index) => {
              const ValueIcon = [Sparkles, Mountain, Crosshair][index];
              return (
                <div className="co-val co-reveal" key={value.name}>
                  <div className="co-val__top">
                    <span className="co-val__no">{String(index + 1).padStart(2, "0")}</span>
                    <span className="co-val__icon"><ValueIcon /></span>
                  </div>
                  <h3>{value.name}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES (03) */}
      <section className="co-sec co-sec--sunken" id="services">
        <div className="co-wrap">
          <div className="co-secnum co-reveal">SERVICES ／ 03</div>
          <h2 className="co-serv-head co-reveal">AIを会社のOSにする、<em>3つの事業。</em></h2>
          <p className="co-serv-lead co-reveal">AI社員の開発、社内ナレッジの整備、導入・運用支援まで。企業がAIを実務で使い続けられる仕組みを、一気通貫で構築します。</p>

          {/* Service 01 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">01</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI Agent Development</span>
                <h3>{COMPANY_PROFILE.businesses[0]}</h3>
                <p>営業・人事・マーケティングなど、担当業務を持つ「AI社員」を、各社の業務と既存環境に合わせて設計・開発します。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Workflow</div><h4>業務別AI社員</h4><p>日常業務の流れや社内ルールを踏まえ、必要な情報収集から成果物の作成までを担うAIエージェントを構築します。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Integration</div><h4>既存環境との接続</h4><p>現在利用している社内ツールやデータを活かし、AI社員が必要な情報を参照して働ける環境を整えます。</p></div>
            </div>
          </div>

          {/* Service 02 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">02</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">Internal Knowledge Base</span>
                <h3>{COMPANY_PROFILE.businesses[1]}</h3>
                <p>社内に散在する文書や業務知見をつなぎ、必要な人とAIが、必要なときに活用できるナレッジ基盤を構築します。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Connection</div><h4>社内情報をつなぐ</h4><p>Notion・Confluence・Slack・Google Driveなど、情報がある場所を横断して参照できる状態へ整えます。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Knowledge</div><h4>属人知を共通知へ</h4><p>個人の頭の中や日々のやり取りに埋もれた判断・進め方を、組織で再利用できる知見として蓄積します。</p></div>
            </div>
          </div>

          {/* Service 03 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">03</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI Consulting</span>
                <h3>{COMPANY_PROFILE.businesses[2]}</h3>
                <p>AI活用の課題整理から導入設計、実装、運用・定着まで、各社の状況に合わせて一貫して支援します。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Planning</div><h4>導入設計</h4><p>業務と課題を整理し、どこからAIを導入すべきか、成果につながる優先順位と進め方を設計します。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Adoption</div><h4>運用・定着支援</h4><p>導入後の改善や社内展開まで伴走し、現場が継続してAIを活用できる運用体制づくりを支援します。</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERS (04) */}
      <section className="co-sec" id="members">
        <div className="co-wrap">
          <div className="co-secnum co-reveal">MEMBERS ／ 04</div>
          <div className="co-members">
            <div className="co-mem co-reveal">
              <div className="co-mem__avatar">SO</div>
              <span className="px-badge px-badge--neutral co-mem__role co-en">代表取締役 CEO</span>
              <h3>折本 聖也</h3>
              <div className="co-mem__romaji">Seiya Orimoto</div>
              <p className="co-mem__bio">東北大学・大学院を卒業後、メガベンチャーで主力事業のPdMとして、年次130%の成長を牽引。その後、東大発AIスタートアップでAIエンジニアとして最先端の深層学習の社会実装に従事。</p>
            </div>
            <div className="co-mem co-reveal">
              <div className="co-mem__avatar">IH</div>
              <span className="px-badge px-badge--neutral co-mem__role co-en">共同創業者 COO</span>
              <h3>He Sibei</h3>
              <div className="co-mem__romaji">Iris He</div>
              <p className="co-mem__bio">中国出身、学生時代に連続起業し、複数事業の収益化を実現。その後、DeNAにて国内最大規模のゲームタイトルの意思決定を支えるデータ分析、AI導入・推進をリード。</p>
            </div>
            <div className="co-mem co-reveal">
              <div className="co-mem__avatar">AA</div>
              <span className="px-badge px-badge--neutral co-mem__role co-en">共同創業者 CTO</span>
              <h3>安部 歩夢</h3>
              <div className="co-mem__romaji">Ayumu Abe</div>
              <p className="co-mem__bio">東京工業大学・大学院を卒業後、在学時から複数のスタートアップでリードエンジニア、CTOとして経営層と連携しながらプロダクト開発を主導。その後、DeNAでフルスタックエンジニアとして複数の新規事業開発に参画。</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY (05) */}
      <section className="co-sec co-sec--sunken" id="company">
        <div className="co-wrap">
          <div className="co-secnum co-reveal">COMPANY ／ 05</div>
          <dl className="co-table co-reveal">
            <div className="co-row"><dt>会社名</dt><dd>{COMPANY_PROFILE.name}</dd></div>
            <div className="co-row"><dt>代表者</dt><dd>{COMPANY_PROFILE.representative}</dd></div>
            <div className="co-row"><dt>設立日</dt><dd>{COMPANY_PROFILE.establishedOn}</dd></div>
            <div className="co-row"><dt>資本金</dt><dd>{COMPANY_PROFILE.capital}</dd></div>
            <div className="co-row"><dt>業種</dt><dd>{COMPANY_PROFILE.industry}</dd></div>
            <div className="co-row"><dt>事業内容</dt><dd>
              <ul className="co-biz">
                {COMPANY_PROFILE.businesses.map((business, index) => (
                  <li key={business}><span className="n">{index + 1}</span><span>{business}</span></li>
                ))}
              </ul>
            </dd></div>
            <div className="co-row"><dt>本店所在地</dt><dd>{COMPANY_PROFILE.address}</dd></div>
            <div className="co-row"><dt>お問い合わせ</dt><dd><a href={`mailto:${COMPANY_PROFILE.contactEmail}`}>{COMPANY_PROFILE.contactEmail}</a></dd></div>
            <div className="co-row"><dt>公式X</dt><dd><a href={COMPANY_PROFILE.officialX.url} target="_blank" rel="noopener noreferrer">{COMPANY_PROFILE.officialX.label}</a></dd></div>
          </dl>
        </div>
      </section>

      {/* CONTACT (06) */}
      <section className="co-sec co-contact px-inverse" id="contact">
        <img className="co-symbol" src="/assets/PolarisX_mark_white.svg" alt="" />
        <div className="co-wrap">
          <div className="co-secnum co-reveal">CONTACT ／ 06</div>
          <h2 className="co-reveal">未来を、<br />一緒につくろう。</h2>
          <p className="co-lead co-reveal">ご相談・取材・協業などのお問い合わせは、お気軽にどうぞ。</p>
          <a className="co-mail" href="mailto:contact@polarisx.ltd">contact@polarisx.ltd</a>
          <CompanyContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="co-footer">
        <div className="co-wrap">
          <div className="co-foot">
            <a className="co-logo" href="#top" aria-label="PolarisX">
              <img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
            </a>
            <ul>
              <li><a href="#mission">MISSION</a></li>
              <li><a href="#values">VALUES</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#members">MEMBERS</a></li>
              <li><a href="#company">COMPANY</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="co-copy">© 2026 PolarisX, Inc. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
