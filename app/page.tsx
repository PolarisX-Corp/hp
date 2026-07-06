import type { Metadata } from "next";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "./fonts";
import ServiceContactForm from "./components/ServiceContactForm";
import "./service.css";
import {
  BarChart2, ArrowRight, Check, FileCheck2, TrendingUp, Package, History,
  User, Calendar, AlertTriangle, UserX, RotateCcw, Cpu, Layers, Link2, Tag,
  Shield, BookOpen, Sparkles, Repeat2, PlayCircle, Star, CreditCard, Route,
  Mail, CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI経営 — AIを、会社のOSに。",
  description:
    "個人利用で止まっているAIを、担当業務を担う\"AI社員\"へ。AIが会社の一員として自律的に動き続ける「AI経営」を、御社に実装します。AI Readyなデータ基盤の構築から、AIエージェント開発・内製化まで、PolarisXが一気通貫で伴走します。",
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
            <a href="#solution">AI経営とは</a>
            <a href="#demo">デモ</a>
            <a href="#why-us">選ばれる理由</a>
            <a href="#pricing">料金</a>
            <a href="#process">導入の流れ</a>
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
            <span className="mk-eyebrow"><BarChart2 />AI経営 / AI Management</span>
            <h1 className="mk-h1">AIを、<br /><em>会社のOS</em>に。</h1>
            <p className="mk-lead">個人利用で止まっているAIを、担当業務を担う&quot;AI社員&quot;へ。AIが会社の一員として自律的に動き続ける「AI経営」を、御社に実装します。土台づくりから内製化まで一気通貫で伴走します。</p>
            <div className="mk-hero__cta">
              <a className="px-btn px-btn--primary px-btn--lg" href="#contact">無料で相談する<ArrowRight className="px-btn__icon" /></a>
              <a className="px-btn px-btn--secondary px-btn--lg" href="#demo">デモを見る</a>
            </div>
            <div className="mk-hero__note"><Check style={{ width: 15, height: 15, color: "var(--success)" }} />初回相談（30分）は無料 ・ オンライン</div>
          </div>

          {/* HERO DEMO: 意思決定ログ / decision record */}
          <div className="mk-preview sv-reveal" style={{ transitionDelay: ".08s" }}>
            <div className="sv-rec">
              <div className="sv-rec__head">
                <span className="sv-rec__title"><FileCheck2 />経営参謀AI ・ 稼働ログ</span>
                <span className="sv-score">確信度 <b>0.92</b></span>
              </div>
              <div className="sv-rec__decision">東日本セグメントの在庫配分を <em>+15%</em> 引き上げることを提案。</div>
              <div className="sv-grounds">
                <span className="sv-grounds__lbl">根拠 ・ データ出典</span>
                <div className="sv-ground"><TrendingUp />需要予測：東日本の伸長率 +12.4%<span>forecast.v3</span></div>
                <div className="sv-ground"><Package />欠品リスク：閾値超過 3 SKU<span>inventory.db</span></div>
                <div className="sv-ground"><History />類似の過去判断：2 件で再現<span>decisions/2025</span></div>
              </div>
              <div className="sv-rec__meta"><span><User />担当：経営参謀AI</span><span><Calendar />2026-06-10</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / framing strip */}
      <div className="mk-trust">
        <div className="mk-wrap">
          <div className="mk-trust__lbl">こんなチームの業務を、&quot;AI社員&quot;が担い始めています</div>
          <div className="mk-trust__row">
            <span>経営企画</span><span>事業開発</span><span>マーケティング</span><span>サプライチェーン</span><span>経営層</span>
          </div>
        </div>
      </div>

      {/* PROBLEM */}
      <section className="mk-section" id="problem">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><AlertTriangle />課題・現状</span>
            <h2>なぜ、AIは&quot;個人の便利ツール&quot;で止まるのか。</h2>
            <p>ChatGPTは使い始めた。それでも会社の力にはなっていない。原因は、いつも同じ3つに行き着きます。</p>
          </div>
          <div className="sv-problems">
            <div className="sv-pcard sv-reveal">
              <div className="sv-pcard__n">01</div>
              <div className="sv-pcard__icon"><Cpu /></div>
              <h3>AIが個人利用で止まっている</h3>
              <p>社員それぞれがChatGPTを触ってはいる。でも会社全体・組織としてのナレッジは何も積み上がっていかない。</p>
              <div className="sv-pcard__q">＝ AIが、組織の力になっていない。</div>
            </div>
            <div className="sv-pcard sv-reveal" style={{ transitionDelay: ".07s" }}>
              <div className="sv-pcard__n">02</div>
              <div className="sv-pcard__icon"><UserX /></div>
              <h3>業務が属人化している</h3>
              <p>営業もマーケも分析も、担当者の頭の中に閉じたまま。人が代われば振り出しに戻り、人手の限界がそのまま事業の限界になる。</p>
              <div className="sv-pcard__q">＝ ナレッジが、組織に残らない。</div>
            </div>
            <div className="sv-pcard sv-reveal" style={{ transitionDelay: ".14s" }}>
              <div className="sv-pcard__n">03</div>
              <div className="sv-pcard__icon"><RotateCcw /></div>
              <h3>AIを入れても効果が出ない</h3>
              <p>とりあえず導入もPoCもやった。でも成果に結びつかず「入れただけ」で止まっている。AIが御社固有の文脈を知らないからです。</p>
              <div className="sv-pcard__q">＝ AIが、あなたの会社を知らない。</div>
            </div>
          </div>

          {/* stat strip */}
          <div className="sv-statstrip sv-reveal" style={{ transitionDelay: ".1s" }}>
            <div className="sv-statstrip__bars">
              <div className="sv-statbar">
                <div className="sv-statbar__val">10%</div>
                <div className="sv-statbar__track"><div className="sv-statbar__fill--lo"></div></div>
                <div className="sv-statbar__lbl">日本</div>
              </div>
              <div className="sv-statbar sv-statbar--hi">
                <div className="sv-statbar__val">45%</div>
                <div className="sv-statbar__track"><div className="sv-statbar__fill--hi"></div></div>
                <div className="sv-statbar__lbl">米国</div>
              </div>
            </div>
            <div className="sv-statstrip__txt">
              生成AIで「期待を大きく上回る効果」を出せている日本企業はわずか <strong>10%</strong>（米国は45%）。<strong>原因は、AIが「あなたの会社」を知らないから。</strong>KPI定義も事業背景も知らないAIが返すのは、一般論だけです。
              <div className="sv-statstrip__src">出典：PwC Japan「生成AIに関する実態調査2025春 5カ国比較」</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION: 2つの土台 */}
      <section className="mk-section mk-section--sunken" id="solution">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><Layers />AI経営とは</span>
            <h2>&quot;AI社員&quot;が動き出す、2つの共通の土台。</h2>
          </div>

          <div className="sv-sol-intro sv-reveal">
            <p className="sv-sol-intro__line">AI経営とは、AIが担当業務を持ち、人間の社員のように自律的に動き続ける経営です。汎用AIが頼りないのは、頭が悪いからではなく<em>あなたの会社を知らない</em>だけ。だから私たちは、&quot;AI社員&quot;が動くための共通の土台をつくります。</p>
          </div>

          <div className="sv-pillars sv-reveal" style={{ transitionDelay: ".06s" }}>
            <div className="sv-pillar-card">
              <div className="sv-pillar-card__top">
                <div className="sv-pillar-card__badge">FOUNDATION 01</div>
                <div className="sv-pillar-card__n">C</div>
              </div>
              <div className="sv-pillar-card__title">AI Ready なデータ基盤</div>
              <div className="sv-pillar-card__desc">AIが安心して使えるよう、散在するデータを整え、統合する。土台なしには、何も始まりません。</div>
              <div className="sv-pillar-card__items">
                <div className="sv-pillar-card__item"><Link2 />分断データの統合・ID紐づけ</div>
                <div className="sv-pillar-card__item"><Tag />KPI・業務用語のセマンティック定義</div>
                <div className="sv-pillar-card__item"><Shield />権限・参照範囲の制御</div>
              </div>
            </div>
            <div className="sv-pillar-card sv-pillar-card--ctx">
              <div className="sv-pillar-card__top">
                <div className="sv-pillar-card__badge">FOUNDATION 02</div>
                <div className="sv-pillar-card__n">B</div>
              </div>
              <div className="sv-pillar-card__title">コンテキストレイヤー</div>
              <div className="sv-pillar-card__desc">会社の知見・KPI定義・業務の文脈を、AIが読める形に外在化する。一度教えれば、忘れない・全員で共有できる・退職しない。</div>
              <div className="sv-pillar-card__items">
                <div className="sv-pillar-card__item"><BookOpen />前提・指標定義・業務ルールの蓄積</div>
                <div className="sv-pillar-card__item"><History />過去の意思決定と根拠のアーカイブ</div>
                <div className="sv-pillar-card__item"><Sparkles />AI が自社の文脈で考えられる状態へ</div>
              </div>
            </div>
          </div>

          <div className="sv-pillar-result sv-reveal" style={{ transitionDelay: ".12s" }}>
            <div className="sv-pillar-result__icon"><Repeat2 /></div>
            <div>
              <div className="sv-pillar-result__title">AIが、担当業務を持つ&quot;社員&quot;になる</div>
              <div className="sv-pillar-result__desc">土台の上で、AIは営業・分析・ヘルプデスク・経営参謀といった担当業務を自律的にこなす&quot;AI社員&quot;として動き出します。人手の限界に縛られない経営へ。</div>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO: BEFORE / AFTER */}
      <section className="mk-section" id="demo">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><PlayCircle />デモ</span>
            <h2>同じ問いでも、&quot;AI社員&quot;の答えはこれだけ変わる。</h2>
            <p>言葉より、見てもらうのが早い。会社の文脈を知るAI社員なら、業種を問わず打ち手まで返します。</p>
          </div>

          <div className="sv-demo-block sv-reveal">
            <div className="sv-demo-q">
              <span className="sv-demo-q__tag">SaaS · チャーン増加</span>
              <span className="sv-demo-q__text">「先月チャーンが増えた。なぜ？防げたのか？」</span>
            </div>
            <div className="sv-demo-pair">
              <div className="sv-demo-box before">
                <div className="sv-demo-box__lbl">BEFORE · 汎用AI</div>
                <div className="sv-demo-box__txt">価値提供やオンボーディングに課題があるかもしれません。ヘルススコアの導入や、チャーンした顧客へのインタビューを実施することをお勧めします。</div>
                <div className="sv-demo-crit">← 御社の数字も文脈も不在。一般論しか返らない。</div>
              </div>
              <div className="sv-demo-box after">
                <div className="sv-demo-box__lbl">AFTER · 分析AIエージェント</div>
                <div className="sv-demo-grid">
                  <span className="dk">結論</span><span className="dv">MRRチャーン <span className="num-neg">▲480万円</span></span>
                  <span className="dk">要因</span><span className="dv">解約13社中9社が旧プランの<strong>更新月に集中</strong></span>
                  <span className="dk">予兆</span><span className="dv">7社は60日前にシート率55%以下＝<strong>事前検知できた</strong></span>
                  <span className="dk">打ち手</span><span className="dv">旧プランの年間巻き取り＋60日前アラート</span>
                  <span className="dk">効果</span><span className="dv"><span className="num-pos">MRR約390万円</span>、半分は防げる</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sv-demo-block sv-reveal" style={{ transitionDelay: ".08s" }}>
            <div className="sv-demo-q">
              <span className="sv-demo-q__tag">EC · D2C · CVR低下</span>
              <span className="sv-demo-q__text">「流入は増えてるのにCVRが落ちた。何が起きてる？」</span>
            </div>
            <div className="sv-demo-pair">
              <div className="sv-demo-box before">
                <div className="sv-demo-box__lbl">BEFORE · 汎用AI</div>
                <div className="sv-demo-box__txt">表示速度や導線の問題、または季節要因が影響している可能性があります。A/Bテストで原因を特定することをお勧めします。</div>
                <div className="sv-demo-crit">← 何も特定できていない。打てる手がない。</div>
              </div>
              <div className="sv-demo-box after">
                <div className="sv-demo-box__lbl">AFTER · 分析AIエージェント</div>
                <div className="sv-demo-grid">
                  <span className="dk">結論</span><span className="dv">CVR <span className="num-neg">2.8%→2.3%</span>（流入+12%＝転換の問題）</span>
                  <span className="dk">要因</span><span className="dv">カート→決済が71→58%。<strong>送料無料ライン変更</strong>（5,000→8,000円）で定期初回客がラインを割った</span>
                  <span className="dk">打ち手</span><span className="dv">ラインを6,000円に戻す</span>
                  <span className="dk">効果</span><span className="dv">月 <span className="num-pos">+約330万円</span>の回復見込み</span>
                </div>
              </div>
            </div>
          </div>

          <div className="sv-demo-disc sv-reveal">※ デモ数値はリアル想定のダミーです。本番は自社データ・PoC結果に差し替えます。</div>
        </div>
      </section>

      {/* WHY US: 4 reasons */}
      <section className="mk-section mk-section--sunken" id="why-us">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><Star />選ばれる理由</span>
            <h2>&quot;入れただけ&quot;で終わらせない、5つの理由。</h2>
          </div>
          <div className="sv-why-grid sv-reveal" style={{ transitionDelay: ".06s" }}>
            <div className="sv-why-card">
              <div className="sv-why-n">01</div>
              <div>
                <div className="sv-why-title">「AIを入れたのに効果が出ない」を越える</div>
                <p className="sv-why-desc">組織に眠る暗黙知を、AIが読めるコンテキストレイヤーへ。汎用AIには届かなかった&quot;担当業務を任せられるAI社員&quot;を実現します。</p>
              </div>
            </div>
            <div className="sv-why-card">
              <div className="sv-why-n">02</div>
              <div>
                <div className="sv-why-title">分析の当事者だった</div>
                <p className="sv-why-desc">レポートを作る側ではなく、その数字で事業を動かしてきた人間が、経営に本当に効くAI活用を設計します。</p>
              </div>
            </div>
            <div className="sv-why-card">
              <div className="sv-why-n">03</div>
              <div>
                <div className="sv-why-title">私たち自身が、AIを会社のOSにしている</div>
                <p className="sv-why-desc">机上の提案はしません。自分たちの業務こそ誰よりもAIで回し、実証した手応えで御社に届けます。</p>
              </div>
            </div>
            <div className="sv-why-card">
              <div className="sv-why-n">04</div>
              <div>
                <div className="sv-why-title">診断から土台構築・AI社員開発まで一気通貫</div>
                <p className="sv-why-desc">AI活用診断から共通の土台の構築、AI社員（エージェント）開発まで、同じチームが分断なく担います。</p>
              </div>
            </div>
            <div className="sv-why-card" style={{ gridColumn: "1 / -1" }}>
              <div className="sv-why-n">05</div>
              <div>
                <div className="sv-why-title">成果を、仕組みとして残す</div>
                <p className="sv-why-desc">AIを外注し続ければ、ノウハウは社外に貯まり費用も発生し続けます。私たちはAI社員と共通の土台を御社の&quot;資産&quot;として残し、内製で運用・更新できる状態まで伴走します。私たちが離れても、回り続けます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mk-section" id="pricing">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><CreditCard />料金プラン</span>
            <h2>スモールスタートから、継続的な伴走まで。</h2>
            <p>初期導入で土台をつくり、月次伴走で定着とナレッジ化を続けます。</p>
          </div>
          <div className="sv-prices sv-reveal" style={{ transitionDelay: ".06s" }}>
            <div className="sv-price">
              <div className="sv-price__plan">Initial</div>
              <div className="sv-price__title">初期導入</div>
              <div className="sv-price__sub">アセスメント＋コンテキストレイヤー構築＋導入設定</div>
              <div className="sv-price__val">¥100万〜300万</div>
              <div className="sv-price__unit">一括 / 導入設定までを含む</div>
              <div className="sv-price__desc">現状のデータと業務を評価し、AIが意思決定に使える状態の土台を構築します。</div>
            </div>
            <div className="sv-price feat">
              <div className="sv-price__plan">Monthly</div>
              <div className="sv-price__title">月次伴走</div>
              <div className="sv-price__sub">運用・定着支援と継続的なチューニング・テンプレ化</div>
              <div className="sv-price__val">¥20万〜80万</div>
              <div className="sv-price__unit">月額 / 継続</div>
              <div className="sv-price__desc">定義チューニング、新規分析のテンプレート化、定着支援を継続。使うほど磨かれます。</div>
            </div>
            <div className="sv-price">
              <div className="sv-price__plan">Option</div>
              <div className="sv-price__title">オプション開発</div>
              <div className="sv-price__sub">AIエージェント・予測モデル受託・基盤拡張</div>
              <div className="sv-price__val">要相談</div>
              <div className="sv-price__unit">プロジェクト個別見積（100万円〜想定）</div>
              <div className="sv-price__desc">需要予測モデル受託、追加ワークフロー、基盤拡張。DWH/DBがない企業もご相談ください。</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / steps */}
      <section className="mk-section mk-section--sunken" id="process">
        <div className="mk-wrap">
          <div className="mk-shead sv-reveal">
            <span className="mk-eyebrow"><Route />導入の流れ</span>
            <h2>はじめ方は、シンプルです。</h2>
            <p>「相談内容がまだ固まっていない」段階で十分です。まずは現状をお聞かせください。</p>
          </div>
          <div className="sv-steps">
            <div className="sv-step sv-reveal"><span className="sv-step__dot"></span><div className="sv-step__n">STEP 01</div><h3>無料相談・AI活用診断</h3><p>現状の課題とデータ環境を伺い、AI活用の論点を整理。まだ何も決まっていなくて大丈夫です。<strong style={{ color: "var(--blue-600)" }}>（初回無料）</strong></p></div>
            <div className="sv-step sv-reveal" style={{ transitionDelay: ".07s" }}><span className="sv-step__dot"></span><div className="sv-step__n">STEP 02</div><h3>共通の土台を構築</h3><p>データ基盤を整え、会社の知見・KPI定義・業務の文脈をAIが読める形に。&quot;AI社員&quot;が動ける状態へ。</p></div>
            <div className="sv-step sv-reveal" style={{ transitionDelay: ".14s" }}><span className="sv-step__dot"></span><div className="sv-step__n">STEP 03</div><h3>月次伴走・定着</h3><p>運用と定着を継続支援。テンプレ化とチューニングで、成果を組織の仕組みとして残します。</p></div>
            <div className="sv-step sv-reveal" style={{ transitionDelay: ".21s" }}><span className="sv-step__dot"></span><div className="sv-step__n">STEP 04</div><h3>AI社員・モデル開発（任意）</h3><p>土台が整ったら、営業・分析・経営参謀などのAI社員や需要予測モデルを開発・内製化支援。</p></div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mk-section sv-contact" id="contact">
        <div className="mk-wrap">
          <div className="sv-contact__grid">
            <div className="sv-contact__intro sv-reveal">
              <span className="mk-eyebrow"><Mail />お問い合わせ</span>
              <h2>御社の「先月、なぜ？」に、<br />AI が答えられるか<em>試しませんか。</em></h2>
              <p>初回相談（30分）は無料です。話しながら整理していきましょう。</p>
              <ul className="sv-assure">
                <li><CheckCircle2 />初回ヒアリング & 現状診断は無料</li>
                <li><CheckCircle2 />オンライン 30〜60 分・営業日 2 日以内にご返信</li>
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
              <p style={{ fontSize: "13.5px", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "24em" }}>AIを、会社のOSに。担当業務を持つ&quot;AI社員&quot;が動く経営を、あらゆる企業の当たり前に。</p>
            </div>
            <div className="mk-footer__col"><h4>サービス</h4><a href="#problem">課題・現状</a><a href="#solution">AI経営とは</a><a href="#why-us">選ばれる理由</a><a href="#pricing">料金プラン</a><a href="#process">導入の流れ</a></div>
            <div className="mk-footer__col"><h4>会社情報</h4><a href="/company">会社情報</a><a href="/company#contact">お問い合わせ</a></div>
            <div className="mk-footer__col"><h4>リソース</h4><a href="/blogs">ブログ</a><a href="/privacy-policy">プライバシー</a></div>
          </div>
          <div className="mk-footer__bottom">
            <span>© 2026 PolarisX, Inc.</span>
            <span style={{ display: "flex", gap: "16px" }}><a href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>プライバシー</a></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
