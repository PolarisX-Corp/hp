import type { Metadata } from "next";
import { Fragment } from "react";
import { Sparkles, ArrowRight, Database, Crosshair, Mountain } from "lucide-react";
import CompanyContactForm from "../components/CompanyContactForm";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import "./company.css";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "PolarisX株式会社の会社情報。AI×データ活用で、意思決定に再現性を。MISSION・VALUES・SERVICES・MEMBERS・会社概要。",
};

const MARQUEE_ITEMS = [
  "意思決定に、再現性を",
  "AI×データ活用",
  "良い判断を、仕組みに",
  "誰もが・何度でも",
  "再現可能な意思決定",
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
          <span className="co-eyebrow"><Sparkles />Founded June 2026 — Tokyo</span>
          <h1>意思決定に、<br /><span className="co-accent">再現性を。</span></h1>
          <div className="co-hero__row">
            <p>勘と経験に頼ってきた「良い判断」を、AI×データ活用で、誰もが・何度でも再現できる仕組みへ。私たちは意思決定そのものを、再現可能なものに変えていきます。</p>
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
          <h2 className="co-reveal">勘と経験に頼ってきた「良い判断」を、<em>AI×データ活用</em>で誰もが再現できる仕組みに変える。</h2>
          <div className="co-vision co-reveal">
            <div className="co-vlabel">VISION</div>
            <p>優れた意思決定を、一部の才能に依存するものではなく、誰もが・何度でも再現できる仕組みへ。私たちは、企業の成長が「優れた意思決定者の有無」に左右されない世界を目指します。</p>
          </div>
        </div>
      </section>

      {/* VALUES (02) */}
      <section className="co-sec" id="values">
        <div className="co-wrap">
          <div className="co-secnum co-reveal">CORE VALUES ／ 02</div>
          <div className="co-values">
            <div className="co-val co-reveal">
              <div className="co-val__top">
                <span className="co-val__no">01</span>
                <span className="co-val__icon"><Database /></span>
              </div>
              <h3>AI・データファースト</h3>
              <p>私たち自身がAI・データを信じて投資し、生産性を高める。</p>
            </div>
            <div className="co-val co-reveal">
              <div className="co-val__top">
                <span className="co-val__no">02</span>
                <span className="co-val__icon"><Crosshair /></span>
              </div>
              <h3>本質思考</h3>
              <p>目的に対して真剣に考え、常にベストを尽くします。</p>
            </div>
            <div className="co-val co-reveal">
              <div className="co-val__top">
                <span className="co-val__no">03</span>
                <span className="co-val__icon"><Mountain /></span>
              </div>
              <h3>自己超克</h3>
              <p>難易度の高い課題を、常に選び続ける。</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (03) */}
      <section className="co-sec co-sec--sunken" id="services">
        <div className="co-wrap">
          <div className="co-secnum co-reveal">SERVICES ／ 03</div>
          <h2 className="co-serv-head co-reveal">AIで意思決定を再現可能にする、<em>3つのサービス。</em></h2>
          <p className="co-serv-lead co-reveal">AIが使えるようにデータを整える土台づくりから、分析設計、AIエージェント・モデルの開発まで。データに基づく再現性ある意思決定を、一気通貫で支援します。</p>

          {/* Service 01 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">01</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI-Ready Data Foundation</span>
                <h3>AI Readyなデータ基盤構築支援</h3>
                <p>AI活用で最も重要なのは、AIエージェントにとって扱いやすい形でデータとナレッジを整えること。これまでのデータ分析実務の知見を活かし、御社のデータ基盤を再現性ある意思決定ができる状態へ整えます。</p>
              </div>
            </div>
            <div className="co-serv__list">
              <div className="co-serv-li"><span className="sn">01</span><h4>信頼できる整備済みデータの構築</h4><p>プロダクトDB・CRM・問い合わせ履歴など、システムをまたいで分断したデータを統合し、AIが安心して使える形に整備。顧客ID・企業ID・契約IDの紐づけを早期に設計し、回答の根拠をたどれる土台をつくります。</p></div>
              <div className="co-serv-li"><span className="sn">02</span><h4>データ分析／意思決定のフロー整理</h4><p>社内の既存のデータ分析・施策や、事業における意思決定の業務フローを洗い出し、どこに再現性が欠けているのかを可視化します。</p></div>
              <div className="co-serv-li"><span className="sn">03</span><h4>KPIや業務用語の定義</h4><p>「アクティブユーザー」「解約率」などの指標と業務ルールをセマンティックレイヤーとして一元定義。人の頭の中にあった暗黙の前提を、AIが読める形に外在化します。</p></div>
              <div className="co-serv-li"><span className="sn">04</span><h4>構造化データと非構造化データの接続</h4><p>DWHの数値だけでなく、商談メモ・問い合わせ履歴・社内ドキュメントといった非構造化データも接続。AIが業務の文脈ごと解釈できるようにします。</p></div>
              <div className="co-serv-li"><span className="sn">05</span><h4>権限管理と参照範囲の制御</h4><p>社内向け・顧客向けでAIが参照してよいデータを分離し、権限に応じたアクセス制御を設計。利便性と情報ガバナンスを両立させます。</p></div>
            </div>
          </div>

          {/* Service 02 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">02</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI-Driven Data Analytics Consulting</span>
                <h3>AI駆動型データ分析コンサルティング</h3>
                <p>AI駆動型データ分析の設計・運用まで一気通貫で支援するコンサルティングサービス。何をどう分析すれば意思決定に効くかを設計し、データに基づく再現性ある意思決定を支援します。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Design</div><h4>分析設計</h4><p>何をどう分析すれば意思決定に効くかを設計し、勘と経験に頼っていた判断を、データに基づく再現可能なプロセスへと置き換えます。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Operation</div><h4>運用・定着</h4><p>分析の設計から運用まで一気通貫で伴走。再現性ある意思決定が、現場の業務に根づくところまで支援します。</p></div>
            </div>
          </div>

          {/* Service 03 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">03</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI Agent &amp; Model Development</span>
                <h3>AIエージェント・AIモデルの開発／内製化支援</h3>
                <p>コードを書かなくても自然言語だけで高度な分析ができる仕組みを構築したり、より高度な需要予測・購買予測をするAIを開発。内製化までを見据えて支援します。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Example A</div><h4>分析AIエージェント</h4><p>自然言語で高度な分析ができるAIエージェントの開発。属人化していた分析業務を、誰でも・どこでもできる状態にします。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Example B</div><h4>予測・レコメンドモデル</h4><p>需要予測やレコメンドエンジンなど、業務に組み込む予測モデルを開発し、意思決定とアクションを支えます。</p></div>
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
            <div className="co-row"><dt>会社名</dt><dd>PolarisX株式会社</dd></div>
            <div className="co-row"><dt>代表者</dt><dd>折本 聖也（Seiya Orimoto）／ 代表取締役 CEO</dd></div>
            <div className="co-row"><dt>設立予定日</dt><dd>2026年6月17日</dd></div>
            <div className="co-row"><dt>資本金</dt><dd>1,000,000円</dd></div>
            <div className="co-row"><dt>業種</dt><dd>情報通信業</dd></div>
            <div className="co-row"><dt>事業内容</dt><dd>
              <ul className="co-biz">
                <li><span className="n">①</span><span>AI Readyなデータ基盤の開発</span></li>
                <li><span className="n">②</span><span>AI駆動型データ分析コンサルティング</span></li>
                <li><span className="n">③</span><span>AIエージェント、AIモデルの開発・内製化支援</span></li>
              </ul>
            </dd></div>
            <div className="co-row"><dt>本店所在地</dt><dd>東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C</dd></div>
            <div className="co-row"><dt>お問い合わせ</dt><dd><a href="mailto:contact@polarisx.ltd">contact@polarisx.ltd</a></dd></div>
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
