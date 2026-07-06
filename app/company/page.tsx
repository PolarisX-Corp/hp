import type { Metadata } from "next";
import { Fragment } from "react";
import { Sparkles, ArrowRight, Database, Crosshair, Mountain } from "lucide-react";
import CompanyContactForm from "../components/CompanyContactForm";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import "./company.css";

export const metadata: Metadata = {
  title: "会社情報",
  description:
    "PolarisX株式会社の会社情報。AIを、会社のOSに。個人利用で止まったAIを、担当業務を担う\"AI社員\"へ。MISSION・VALUES・SERVICES・MEMBERS・会社概要。",
};

const MARQUEE_ITEMS = [
  "AIを、会社のOSに",
  "AI経営",
  "個人の道具から、AI社員へ",
  "自律的に働くAI",
  "人手の限界に縛られない経営",
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
          <h1>AIを、<br /><span className="co-accent">会社のOSに。</span></h1>
          <div className="co-hero__row">
            <p>個人利用で止まっているAIを、担当業務を担う&quot;AI社員&quot;へ。人手の限界に縛られない経営を、あらゆる企業の当たり前にする。私たちはAIを、会社のOSにします。</p>
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
          <h2 className="co-reveal">個人利用で止まっているAIを、担当業務を担う<em>&quot;AI社員&quot;</em>へ。人手の限界に縛られない経営を、あらゆる企業の当たり前にする。</h2>
          <div className="co-vision co-reveal">
            <div className="co-vlabel">VISION</div>
            <p>AIが「使えるツール」で止まらず、会社の一員として自律的に働く世界へ。私たちは、企業の成長が人材の採用・育成の限界に縛られない世界を目指します。</p>
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
          <h2 className="co-serv-head co-reveal">AIを会社のOSにする、<em>3つのサービス。</em></h2>
          <p className="co-serv-lead co-reveal">AI社員が動く共通の土台の構築から、AIエージェントを基盤とした経営インフラの内製化、2D・3Dデータ解析まで。担当業務を持つAI社員が動く経営を、一気通貫で実装します。</p>

          {/* Service 01 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">01</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI Ready Data Foundation</span>
                <h3>AI社員が動く「共通の土台」の構築（AI Readyなデータ基盤）</h3>
                <p>AIエージェント＝AI社員が、会社の文脈で判断・実行できる基盤を整えます。AI活用で最も重要な、データとナレッジをAIにとって扱いやすい形に整える土台づくりを担います。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Data</div><h4>信頼できるデータ基盤</h4><p>システムをまたいで分断したデータを統合し、AIが安心して使える形へ整備。顧客・企業・契約IDを紐づけ、回答の根拠をたどれる土台をつくります。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Context</div><h4>言葉と文脈を揃える</h4><p>KPIや業務用語をセマンティックレイヤーとして一元定義。商談メモや社内ドキュメントなど非構造化データも接続し、AIが業務の文脈ごと解釈できる状態へ。</p></div>
            </div>
          </div>

          {/* Service 02 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">02</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">AI Agent-Driven Operations</span>
                <h3>AIエージェントを基盤とした経営インフラ構築・内製化支援</h3>
                <p>営業・分析・ヘルプデスク・経営参謀など、担当業務を持つ&quot;AI社員&quot;を開発し、経営インフラとして組み込みます。自社で運用・更新できる状態まで伴走します。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">Implementation</div><h4>AI社員の開発</h4><p>提案の場で答える営業AI、自然言語で高度な分析を担う分析AI、社内情報を横断するヘルプデスクAI、KPIを見張る経営参謀AIなどを業務に組み込みます。</p></div>
              <div className="co-ex"><div className="co-ex-tag">Internalization</div><h4>内製化支援</h4><p>導入にとどまらず、社内チームが自走できるよう技術移転・体制構築まで伴走。ノウハウを御社の資産として残し、私たちが離れても回り続ける状態へ。</p></div>
            </div>
          </div>

          {/* Service 03 */}
          <div className="co-serv co-reveal">
            <div className="co-serv__top">
              <div className="co-serv__no">03</div>
              <div className="co-serv__meta">
                <span className="px-badge px-badge--accent co-serv__tag co-en">2D / 3D Data Analytics</span>
                <h3>2D・3Dデータ解析コンサルティング</h3>
                <p>画像・点群・CADデータなど、従来の表形式では扱えなかった2D・3Dデータを解析し、製造・建設・空間設計領域での意思決定を、データに基づいて支えます。</p>
              </div>
            </div>
            <div className="co-serv__ex">
              <div className="co-ex"><div className="co-ex-tag">2D Analysis</div><h4>画像・2Dデータ解析</h4><p>カメラ映像・図面・衛星画像など2Dデータから定量的なインサイトを抽出。目視に頼っていた判断を、データに基づく再現可能なプロセスへ置き換えます。</p></div>
              <div className="co-ex"><div className="co-ex-tag">3D Analysis</div><h4>点群・3Dデータ解析</h4><p>LiDAR・3Dスキャンなどの点群データを解析し、空間・構造物の定量評価を実現。現場の複雑な意思決定を根拠ある形で支えます。</p></div>
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
                <li><span className="n">①</span><span>AI社員が動く「共通の土台」の構築（AI Readyなデータ基盤）</span></li>
                <li><span className="n">②</span><span>AIエージェントを基盤とした経営インフラ構築・内製化支援</span></li>
                <li><span className="n">③</span><span>2D・3Dデータ解析コンサルティング</span></li>
              </ul>
            </dd></div>
            <div className="co-row"><dt>本店所在地</dt><dd>東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C</dd></div>
            <div className="co-row"><dt>お問い合わせ</dt><dd><a href="mailto:contact@polarisx.ltd">contact@polarisx.ltd</a></dd></div>
            <div className="co-row"><dt>公式X</dt><dd><a href="https://x.com/polarisx_inc" target="_blank" rel="noopener noreferrer">@polarisx_inc</a></dd></div>
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
