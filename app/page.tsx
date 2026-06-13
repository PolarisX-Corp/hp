import type { Metadata } from "next";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "./fonts";
import ServiceContactForm from "./components/ServiceContactForm";
import "./service.css";
import {
  LineChart, ArrowRight, Check, FileCheck2, TrendingUp, Package, History,
  User, Calendar, AlertTriangle, UserX, RotateCcw, FileX, HelpCircle, Layers,
  Search, Database, Users, CheckCircle2, Repeat, Zap, Unlock, Sparkles,
  ChevronUp, Route, Mail, PlusCircle, GitCommit,
} from "lucide-react";

export const metadata: Metadata = {
  title: "分析コンサルティング — 意思決定に、再現性を。",
  description:
    "勘と経験に頼ってきた「良い判断」を、データとAIで誰もが・何度でも再現できる仕組みへ。PolarisXの分析コンサルティングが、意思決定に“文脈”を実装します。",
};

export default function Home() {
  return (
    <div
      className={`theme-service ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      {/* HEADER */}
      <header className="mk-header">
        <div className="mk-wrap mk-header__in">
          <a className="mk-logo" href="#top"><img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} /><span>Polaris<span style={{ color: "var(--blue-500)" }}>X</span></span></a>
          <nav className="mk-nav">
            <a href="#problem">課題</a>
            <a href="#provocation">提起</a>
            <a href="#solution">ソリューション</a>
            <a href="#benefits">メリット</a>
            <a href="#process">導入の流れ</a>
            <a href="/company">会社情報</a>
          </nav>
          <div className="mk-header__cta">
            <a className="px-btn px-btn--ghost px-btn--sm" href="#contact">資料請求</a>
            <a className="px-btn px-btn--primary px-btn--sm" href="#contact">無料で相談する</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mk-hero" id="top">
        <div className="mk-stars">
          <div className="mk-star" style={{ width: "340px", height: "340px", top: "-90px", right: "-50px" }}></div>
          <div className="mk-star" style={{ width: "180px", height: "180px", top: "320px", left: "-70px", opacity: 0.3 }}></div>
        </div>
        <div className="mk-wrap mk-hero__grid">
          <div className="sv-reveal">
            <span className="mk-eyebrow"><LineChart />分析コンサルティング</span>
            <h1 className="mk-h1">意思決定に、<br /><em>再現性</em>を。</h1>
            <p className="mk-lead">勘と経験に頼ってきた「良い判断」を、データと AI で誰もが・何度でも再現できる仕組みへ。PolarisX の分析コンサルティングが、あなたのチームの意思決定に“文脈”を実装します。</p>
            <div className="mk-hero__cta">
              <a className="px-btn px-btn--primary px-btn--lg" href="#contact">無料で相談する<ArrowRight className="px-btn__icon" /></a>
              <a className="px-btn px-btn--secondary px-btn--lg" href="#solution">進め方を見る</a>
            </div>
            <div className="mk-hero__note"><Check style={{ width: 15, height: 15, color: "var(--success)" }} />初回相談は無料 ・ オンライン 60 分</div>
          </div>

          {/* HERO DEMO: 意思決定ログ / decision record */}
          <div className="mk-preview sv-reveal" style={{ transitionDelay: ".08s" }}>
            <div className="sv-rec">
              <div className="sv-rec__head">
                <span className="sv-rec__title"><FileCheck2 />意思決定ログ</span>
                <span className="sv-score">再現スコア <b>0.92</b></span>
              </div>
              <div className="sv-rec__decision">東日本セグメントの在庫配分を <em>+15%</em> 引き上げる。</div>
              <div className="sv-grounds">
                <span className="sv-grounds__lbl">根拠 ・ データ出典</span>
                <div className="sv-ground"><TrendingUp />需要予測：東日本の伸長率 +12.4%<span>forecast.v3</span></div>
                <div className="sv-ground"><Package />欠品リスク：閾値超過 3 SKU<span>inventory.db</span></div>
                <div className="sv-ground"><History />類似の過去判断：2 件で再現<span>decisions/2025</span></div>
              </div>
              <div className="sv-rec__meta"><span><User />承認：事業企画部</span><span><Calendar />2026-06-10</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / framing strip */}
      <div className="mk-trust">
        <div className="mk-wrap">
          <div className="mk-trust__lbl">こんなチームの意思決定を、仕組みに変えてきました</div>
          <div className="mk-trust__row">
            <span>経営企画</span><span>事業開発</span><span>マーケティング</span><span>サプライチェーン</span><span>経営層</span>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="mk-section" id="problem">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><AlertTriangle />課題感</span>
            <h2>なぜ、同じ意思決定を<br />毎回ゼロからやり直すのか。</h2>
            <p>データもダッシュボードも揃っている。それでも「良い判断」は再現できない。原因は、いつも決まった3つに行き着きます。</p>
          </div>
          <div className="sv-problems">
            <div className="sv-pcard sv-reveal">
              <div className="sv-pcard__n">01</div>
              <div className="sv-pcard__icon"><UserX /></div>
              <h3>判断が属人化する</h3>
              <p>「あの人にしか分からない」。なぜその判断に至ったかが個人の頭の中に閉じ、異動や退職とともに失われていく。</p>
              <div className="sv-pcard__q">＝ 判断の理由が、組織に残らない。</div>
            </div>
            <div className="sv-pcard sv-reveal" style={{ transitionDelay: ".07s" }}>
              <div className="sv-pcard__n">02</div>
              <div className="sv-pcard__icon"><RotateCcw /></div>
              <h3>毎回ゼロからやり直す</h3>
              <p>過去に同じ問いに答えたはずなのに、前提も分析も残っていない。アナリストは似た集計を何度も作り直す。</p>
              <div className="sv-pcard__q">＝ 分析が、使い捨てになっている。</div>
            </div>
            <div className="sv-pcard sv-reveal" style={{ transitionDelay: ".14s" }}>
              <div className="sv-pcard__n">03</div>
              <div className="sv-pcard__icon"><FileX /></div>
              <h3>根拠が残らない</h3>
              <p>結果の数字は記録されても、「どの前提で・なぜその一手を選んだか」の文脈は記録されず、検証も改善もできない。</p>
              <div className="sv-pcard__q">＝ 良い判断を、学習に変えられない。</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROVOCATION (dark) */}
      <section className="mk-section sv-prov" id="provocation">
        <div className="mk-stars">
          <div className="mk-star" style={{ width: "300px", height: "300px", top: "-60px", right: "8%", background: "radial-gradient(circle,rgba(54,110,255,0.4),transparent 65%)" }}></div>
          <div className="mk-star" style={{ width: "220px", height: "220px", bottom: "-90px", left: "6%", background: "radial-gradient(circle,rgba(124,130,226,0.32),transparent 65%)" }}></div>
        </div>
        <div className="mk-wrap">
          <span className="sv-prov__eyebrow sv-reveal"><HelpCircle />ひとつの問い</span>
          <h2 className="sv-reveal">それって、<br /><em>コンテキストレイヤー</em>が<br />無いんじゃない？</h2>
          <p className="sv-prov__lead sv-reveal">データはある。ダッシュボードもある。それでも判断が再現できないのは、データと意思決定の<strong style={{ color: "#fff" }}>“あいだ”</strong>が抜けているから。前提・指標の定義・過去の決定とその根拠 —— 判断の<strong style={{ color: "#fff" }}>文脈</strong>を蓄積し、再利用する層がないのです。</p>

          <div className="sv-gap sv-reveal" style={{ transitionDelay: ".1s" }}>
            <div className="sv-gap__node">
              <div className="k">Data</div>
              <div className="t">データ層</div>
              <div className="s">BI・DWH・SaaS<br />数字は揃っている</div>
            </div>
            <div className="sv-gap__arrow"><ArrowRight /></div>
            <div className="sv-gap__node sv-gap__node--miss">
              <div className="k">Missing</div>
              <div className="t">コンテキストレイヤー</div>
              <div className="s">前提・根拠・過去の決定<br />—— ここが空白</div>
            </div>
            <div className="sv-gap__arrow"><ArrowRight /></div>
            <div className="sv-gap__node">
              <div className="k">Decision</div>
              <div className="t">意思決定</div>
              <div className="s">毎回ゼロから<br />属人的に判断</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="mk-section" id="solution">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><Layers />ソリューション</span>
            <h2>PolarisX は、その“あいだ”をつくる。</h2>
            <p>散在する前提・指標・判断基準を、再利用できる「コンテキストレイヤー」として構造化。データと意思決定をつなぎ、判断を再現可能な資産に変えます。</p>
          </div>

          {/* layer stack diagram */}
          <div className="sv-stack">
            <div className="sv-layer sv-reveal">
              <div className="sv-layer__tag">Decision</div>
              <div className="sv-layer__body">
                <span className="sv-layer__title">意思決定</span>
                <div className="sv-layer__items"><span className="sv-chip">再現可能なアクション</span><span className="sv-chip">根拠付きの一手</span></div>
              </div>
            </div>
            <div className="sv-stack__rail"><ChevronUp /></div>
            <div className="sv-layer sv-layer--ctx sv-reveal" style={{ transitionDelay: ".05s" }}>
              <div className="sv-layer__tag">Context Layer</div>
              <div className="sv-layer__body">
                <span className="sv-layer__title"><Sparkles />コンテキストレイヤー</span>
                <div className="sv-layer__items"><span className="sv-chip">前提</span><span className="sv-chip">指標定義</span><span className="sv-chip">過去の意思決定</span><span className="sv-chip">根拠</span></div>
              </div>
            </div>
            <div className="sv-stack__rail"><ChevronUp /></div>
            <div className="sv-layer sv-reveal" style={{ transitionDelay: ".1s" }}>
              <div className="sv-layer__tag">Data</div>
              <div className="sv-layer__body">
                <span className="sv-layer__title">データ層</span>
                <div className="sv-layer__items"><span className="sv-chip">BI</span><span className="sv-chip">DWH</span><span className="sv-chip">基幹・SaaS</span></div>
              </div>
            </div>
          </div>

          {/* three pillars */}
          <div className="mk-cards">
            <div className="mk-fcard sv-reveal">
              <div className="mk-fcard__icon"><Search /></div>
              <h3>文脈の可視化</h3>
              <p>散在する指標・前提・判断基準を棚卸しし、意思決定の文脈として構造化。「何を見て、なぜ決めるか」を言語化します。</p>
            </div>
            <div className="mk-fcard sv-reveal" style={{ transitionDelay: ".07s" }}>
              <div className="mk-fcard__icon"><Database /></div>
              <h3>再現可能な意思決定基盤</h3>
              <p>コンテキストレイヤーをデータ基盤上に実装。AI が過去の文脈を踏まえ、次の一手を再現スコア付きで提案します。</p>
            </div>
            <div className="mk-fcard sv-reveal" style={{ transitionDelay: ".14s" }}>
              <div className="mk-fcard__icon"><Users /></div>
              <h3>定着と内製化</h3>
              <p>運用に乗せ、再現スコアで判断の質を測りながらチームに定着。使うほど磨かれ、自走できる状態へ導きます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS with embedded demos */}
      <section className="mk-section mk-section--sunken" id="benefits">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><CheckCircle2 />導入のメリット</span>
            <h2>判断が、再現できる資産になる。</h2>
          </div>

          {/* Benefit 1 */}
          <div className="mk-frow">
            <div className="sv-reveal">
              <span className="mk-eyebrow"><Repeat />再現性</span>
              <h3>意思決定が、積み上がる資産になる</h3>
              <p>すべての判断が、前提・根拠・成果とともに記録されます。次に同じ問いが来たとき、ゼロからではなく過去の文脈から始められます。</p>
              <ul className="mk-checklist">
                <li><Check />判断ごとに根拠とデータ出典を自動で紐付け</li>
                <li><Check />再現スコアで「再び使える判断か」を可視化</li>
                <li><Check />成果のフィードバックで判断の質が学習される</li>
              </ul>
            </div>
            <div className="mk-frow__media sv-reveal" style={{ transitionDelay: ".06s" }}>
              <div className="mk-media">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                  <span className="px-badge px-badge--accent">意思決定ログ</span>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>直近 3 件</span>
                </div>
                <div className="sv-log">
                  <div className="sv-logitem">
                    <div className="sv-logitem__d">在庫配分を東日本に +15%</div>
                    <div className="sv-logitem__s">0.92</div>
                    <div className="sv-logitem__m">事業企画部 ・ 採用</div>
                    <div className="sv-logitem__bar"><i style={{ width: "92%" }} /></div>
                  </div>
                  <div className="sv-logitem">
                    <div className="sv-logitem__d">Pro プランを 5% 値上げ</div>
                    <div className="sv-logitem__s">0.88</div>
                    <div className="sv-logitem__m">プライシング ・ 検証中</div>
                    <div className="sv-logitem__bar"><i style={{ width: "88%" }} /></div>
                  </div>
                  <div className="sv-logitem">
                    <div className="sv-logitem__d">関西の広告予算を再配分</div>
                    <div className="sv-logitem__s">0.79</div>
                    <div className="sv-logitem__m">マーケ ・ 要見直し</div>
                    <div className="sv-logitem__bar"><i style={{ width: "79%" }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="mk-frow mk-frow--rev">
            <div className="sv-reveal">
              <span className="mk-eyebrow"><Zap />スピード</span>
              <h3>判断のスピードが上がる</h3>
              <p>聞きたいことを、そのまま問いかけるだけ。文脈を踏まえた回答が、根拠とデータ出典つきで返ってきます。会議の前に答えが揃います。</p>
              <ul className="mk-checklist">
                <li><Check />自然言語で問いかけ、根拠付きで即回答</li>
                <li><Check />前提や指標定義はコンテキストレイヤーから自動補完</li>
                <li><Check />「なぜ」まで遡れるから、その場で意思決定できる</li>
              </ul>
            </div>
            <div className="mk-frow__media sv-reveal" style={{ transitionDelay: ".06s" }}>
              <div className="mk-media">
                <div className="sv-ask">
                  <div className="sv-ask__bar"><Search /><span>東日本の在庫、来月どうすべき？</span><span className="sv-caret"></span></div>
                  <div className="sv-answer">
                    <div className="sv-answer__mark"><Sparkles /></div>
                    <div>
                      <div className="sv-answer__txt">需要予測は <b>+12.4%</b>、欠品リスクは 3 SKU。過去の類似判断 2 件はいずれも再現。<b>+15% の増配</b>を再現スコア 0.92 で推奨します。</div>
                      <div className="sv-srcs"><span className="sv-src">forecast.v3</span><span className="sv-src">inventory.db</span><span className="sv-src">decisions/2025</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="mk-frow">
            <div className="sv-reveal">
              <span className="mk-eyebrow"><Unlock />脱・属人化</span>
              <h3>属人化から、解放される</h3>
              <p>判断の前提も指標の定義も、組織の資産として蓄積。担当者が代わっても、文脈は引き継がれます。チームの判断力が、人に依存しなくなります。</p>
              <ul className="mk-checklist">
                <li><Check />前提・指標定義・過去の決定を一元的に蓄積</li>
                <li><Check />異動・退職があっても文脈はそのまま残る</li>
                <li><Check />新メンバーも初日から同じ土台で判断できる</li>
              </ul>
            </div>
            <div className="mk-frow__media sv-reveal" style={{ transitionDelay: ".06s" }}>
              <div className="mk-media">
                <div className="sv-ctx">
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}><Layers style={{ width: 16, height: 16, color: "var(--blue-600)" }} /><span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "14px", color: "var(--indigo-950)" }}>蓄積された文脈</span></div>
                  <div className="sv-ctx__counts">
                    <div className="sv-ctx__count"><div className="v">12</div><div className="l">前提</div></div>
                    <div className="sv-ctx__count"><div className="v">34</div><div className="l">指標定義</div></div>
                    <div className="sv-ctx__count"><div className="v">128</div><div className="l">過去の決定</div></div>
                  </div>
                  <div className="sv-ctx__feed">
                    <div className="sv-ctx__row"><PlusCircle />「粗利は配送費控除後」を前提に追加<time>2分前</time></div>
                    <div className="sv-ctx__row"><GitCommit />指標「再現スコア」の定義を更新<time>今日</time></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / steps */}
      <section className="mk-section" id="process">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><Route />導入の流れ</span>
            <h2>最短4ステップで、判断を仕組みに。</h2>
            <p>現状の診断から内製化まで、伴走します。初回のヒアリングと現状診断は無料です。</p>
          </div>
          <div className="sv-steps">
            <div className="sv-step sv-reveal"><span className="sv-step__dot"></span><div className="sv-step__n">STEP 01</div><h3>ヒアリング & 現状診断</h3><p>意思決定の課題と、散在する文脈を洗い出す。どこに再現性の欠落があるかを可視化します。<br /><strong style={{ color: "var(--blue-600)" }}>（初回無料）</strong></p></div>
            <div className="sv-step sv-reveal" style={{ transitionDelay: ".07s" }}><span className="sv-step__dot"></span><div className="sv-step__n">STEP 02</div><h3>コンテキスト設計</h3><p>指標・前提・判断基準を棚卸しし、再利用できるコンテキストレイヤーとして設計します。</p></div>
            <div className="sv-step sv-reveal" style={{ transitionDelay: ".14s" }}><span className="sv-step__dot"></span><div className="sv-step__n">STEP 03</div><h3>実装 & 検証</h3><p>データ基盤上に実装し、実際の意思決定で運用。再現スコアで効果を検証します。</p></div>
            <div className="sv-step sv-reveal" style={{ transitionDelay: ".21s" }}><span className="sv-step__dot"></span><div className="sv-step__n">STEP 04</div><h3>定着 & 内製化</h3><p>運用に乗せ、チームが自走できる状態へ。判断の質が使うほど磨かれていきます。</p></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mk-section sv-contact" id="contact">
        <div className="mk-wrap">
          <div className="sv-contact__grid">
            <div className="sv-contact__intro sv-reveal">
              <span className="mk-eyebrow"><Mail />お問い合わせ</span>
              <h2>意思決定を、<br /><em>属人化</em>から解放する。</h2>
              <p>今日から、あなたのチームの判断に再現性を。まずは現状の課題をお聞かせください。初回相談は無料です。</p>
              <ul className="sv-assure">
                <li><CheckCircle2 />初回ヒアリング & 現状診断は無料</li>
                <li><CheckCircle2 />オンライン 60 分・営業日 2 日以内にご返信</li>
                <li><CheckCircle2 />無理な提案・しつこい営業はしません</li>
              </ul>
            </div>

            <ServiceContactForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mk-footer">
        <div className="mk-wrap">
          <div className="mk-footer__grid">
            <div className="mk-footer__col">
              <a className="mk-logo" href="#top" style={{ marginBottom: "14px" }}><img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} /><span>Polaris<span style={{ color: "var(--blue-500)" }}>X</span></span></a>
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "24em" }}>AI × データで、意思決定に再現性を。北極星のように、組織の判断を導きます。</p>
            </div>
            <div className="mk-footer__col"><h4>サービス</h4><a href="#problem">課題感</a><a href="#solution">ソリューション</a><a href="#benefits">導入のメリット</a><a href="#process">導入の流れ</a></div>
            <div className="mk-footer__col"><h4>会社情報</h4><a href="/company">会社情報</a><a href="#">導入事例</a><a href="#">採用情報</a><a href="#contact">お問い合わせ</a></div>
            <div className="mk-footer__col"><h4>リソース</h4><a href="#">ブログ</a><a href="#">ドキュメント</a><a href="#">利用規約</a><a href="#">プライバシー</a></div>
          </div>
          <div className="mk-footer__bottom">
            <span>© 2026 PolarisX, Inc.</span>
            <span style={{ display: "flex", gap: "16px" }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>プライバシー</a><a href="#" style={{ color: "inherit", textDecoration: "none" }}>セキュリティ</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
