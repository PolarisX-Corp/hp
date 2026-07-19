import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "./fonts";
import ServiceContactForm from "./components/ServiceContactForm";
import "./service.css";
import {
  ArrowRight, Check, X, ChevronDown, Mail, CheckCircle2, User, Users,
  AlertTriangle, Star, Route, HelpCircle, PlayCircle, Scale, Bot,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Polaris AI — そろそろ、AI社員を採用しませんか。",
  description:
    "Polaris AIは、御社の業務をまるごと任せられるAI社員です。一人採用するだけで、営業・人事・マーケティングまで、それぞれを担当する専門のAI社員たちがチームで動きます。基盤づくりから運用まで、PolarisXが一気通貫で伴走します。",
};

export default function Home() {
  return (
    <div
      className={`theme-service ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      {/* HEADER */}
      <header className="v2-header">
        <div className="v2-wrap v2-header__in">
          <a className="v2-logo" href="#top"><img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} /><span>Polaris<span style={{ color: "var(--blue-500)" }}>X</span></span></a>
          <nav className="v2-nav">
            <a href="#problem">課題</a>
            <a href="#solution">Polaris AIとは</a>
            <a href="#compare">比較</a>
            <a href="#before-after">導入前後</a>
            <a href="#why-us">選ばれる理由</a>
            <a href="#process">導入の流れ</a>
          </nav>
          <div className="v2-header__cta">
            <a className="px-btn px-btn--ghost px-btn--sm" href="#contact">資料請求</a>
            <a className="px-btn px-btn--primary px-btn--sm" href="#contact">無料で相談する</a>
          </div>
        </div>
      </header>

      {/* HERO + 図解1: サービス構成図 */}
      <section className="v2-hero" id="top">
        <div className="v2-wrap v2-hero__grid">
          <div>
            <span className="v2-eyebrow"><Users />Polaris AI / AI社員</span>
            <h1 className="v2-h1">そろそろ、<em>AI社員</em>を<br />採用しませんか。</h1>
            <p className="v2-lead">Polaris AIは、御社の業務をまるごと任せられるAI社員です。一人採用するだけで、営業・人事・マーケティングまで、それぞれを担当する専門のAI社員たちがチームで動きます。</p>
            <div className="v2-hero__cta">
              <a className="px-btn px-btn--primary px-btn--lg" href="#contact">無料で相談する<ArrowRight className="px-btn__icon" /></a>
              <a className="px-btn px-btn--secondary px-btn--lg" href="#before-after">導入前後を見る</a>
            </div>
            <div className="v2-hero__note"><Check />初回相談（30分）は無料 ・ オンライン</div>
          </div>

          <div className="v2-org" role="img" aria-label="Polaris AIのしくみ：あなたがPolaris AIに話しかけると、司令塔として営業・マーケ・ナレッジの専門AI社員を呼び出し、MCP接続された御社のNotion・Slack・Google Drive・社内DBから必要な情報を取得して仕事を進める構成図">
            <div className="v2-org__cap">Polaris AI のしくみ — 話しかけるのは一人だけ</div>
            <div className="v2-org__you">
              <span className="v2-org__bubble"><span className="v2-org__av"><User /></span>「◯◯社への提案書のたたきを作って」</span>
            </div>
            <div className="v2-vline v2-vline--arrow"></div>
            <div className="v2-org__polaris">
              <div className="nm">Polaris AI</div>
              <div className="rl">司令塔AI社員 ── 依頼を理解し、担当するAI社員を自律的に呼び出す</div>
            </div>
            <div className="v2-branch"><i></i><i></i><i></i></div>
            <div className="v2-staff">
              <div className="v2-staff__s"><div className="t">営業AI社員</div><div className="d">過去の類似提案を参照</div></div>
              <div className="v2-staff__s"><div className="t">マーケAI社員</div><div className="d">価格ポリシーを反映</div></div>
              <div className="v2-staff__s"><div className="t">ナレッジAI社員</div><div className="d">社内情報を横断検索</div></div>
            </div>
            <div className="v2-mcp"><span className="vl"></span><span className="tag">MCP接続</span><span className="vl"></span></div>
            <div className="v2-tools">
              <div className="v2-tools__lbl">御社の社内ツール・データ（入れ替え不要・そのまま接続）</div>
              <div className="v2-tools__chips">
                <span className="v2-tools__chip">Notion</span>
                <span className="v2-tools__chip">Slack</span>
                <span className="v2-tools__chip">Google Drive</span>
                <span className="v2-tools__chip">社内DB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="v2-sec v2-sec--sunken" id="problem">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><AlertTriangle />課題・現状</span>
            <h2>なぜ、AIを入れても現場は変わらないのか。</h2>
            <p>ChatGPTは使い始めた。それでも、思うように成果につながっていない。原因は、いつも同じ3つの壁に行き着きます。</p>
          </div>
          <div className="v2-problems">
            <div className="v2-problem">
              <div className="no">01</div>
              <h3>AIツールを、使いこなせない</h3>
              <p>プロンプトが書けない、指示の出し方が難しい。結局、一部の詳しい人しか使わず、投資対効果が出ない。</p>
              <div className="q">＝「導入した」と「成果が出ている」の間に、大きな差がある。</div>
            </div>
            <div className="v2-problem">
              <div className="no">02</div>
              <h3>汎用AIは、&quot;御社&quot;を知らない</h3>
              <p>貴社の業務プロセスも、顧客との過去のやり取りも知らない。毎回コピペで背景を教えるくらいなら、自分でやったほうが早い。</p>
              <div className="q">＝ AIが、あなたの会社の文脈につながっていない。</div>
            </div>
            <div className="v2-problem">
              <div className="no">03</div>
              <h3>ノウハウが、属人化している</h3>
              <p>実際の仕事の進め方はベテラン社員の頭の中にしかない。誰が何を知っているかも分からず、退職や異動のたびに振り出しに戻る。</p>
              <div className="q">＝ ナレッジが、ブラックボックスのまま。</div>
            </div>
          </div>

          <div className="v2-stat">
            <div className="v2-stat__bars">
              <div className="v2-statbar">
                <div className="v2-statbar__val">10%</div>
                <div className="v2-statbar__track"><div className="v2-statbar__fill--lo"></div></div>
                <div className="v2-statbar__lbl">日本</div>
              </div>
              <div className="v2-statbar v2-statbar--hi">
                <div className="v2-statbar__val">45%</div>
                <div className="v2-statbar__track"><div className="v2-statbar__fill--hi"></div></div>
                <div className="v2-statbar__lbl">米国</div>
              </div>
            </div>
            <div className="v2-stat__txt">
              生成AIで「期待を大きく上回る効果」を出せている日本企業はわずか <strong>10%</strong>（米国は45%）。<strong>原因は、AIが「あなたの会社」を知らないから。</strong>KPI定義も事業背景も知らないAIが返すのは、一般論だけです。
              <div className="v2-stat__src">出典：PwC Japan「生成AIに関する実態調査2025春 5カ国比較」</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="v2-sec" id="solution">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Bot />Polaris AIとは</span>
            <h2>話しかける相手は、Polaris AI一人だけ。</h2>
            <p>裏側で必要な専門AI社員を自律的に呼び出し、営業・人事・マーケティングなどの業務を進めます。3つの壁は、こう越えます。</p>
          </div>
          <div className="v2-problems">
            <div className="v2-problem">
              <div className="no">01</div>
              <h3>Polaris AIに話しかけるだけ</h3>
              <p>「どのAIを、どう使うか」を考える必要はありません。上司や同僚に頼むのと同じ感覚で、仕事を任せられます。ITリテラシーに関係なく、全社員が使えます。</p>
            </div>
            <div className="v2-problem">
              <div className="no">02</div>
              <h3>御社の情報を、自律的に取得</h3>
              <p>導入時に、Notion・Slack・Google Drive・社内データベースなどとMCPで接続。以降、質問に応じて必要な情報を自ら探しに行きます。背景情報のコピペはもう不要です。</p>
            </div>
            <div className="v2-problem">
              <div className="no">03</div>
              <h3>日々の対話が、組織の知見に</h3>
              <p>個人の頭の中にあった判断や進め方が、Polaris AIとのやり取りを通じて自然に見える化。誰が聞いても、同じ品質の答えが返ってきます。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 図解2: 比較表 */}
      <section className="v2-sec v2-sec--sunken" id="compare">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Scale />比較</span>
            <h2>汎用AIチャットと、何が違うのか。</h2>
            <p>AIの賢さではなく、「御社を知っているか」「窓口がひとつか」が違いです。</p>
          </div>
          <div className="v2-cmp">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">汎用AIチャット<span className="note">ChatGPT等</span></th>
                  <th scope="col">AIツールを個別導入</th>
                  <th scope="col" className="px">Polaris AI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">使いこなし</th>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">プロンプトの習熟が必要</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツールごとに操作を学習</span></td>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">話しかけるだけ</span></td>
                </tr>
                <tr>
                  <th scope="row">自社の文脈理解</th>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">毎回コピペで説明</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツール内のデータのみ</span></td>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">MCPで社内情報を自律取得</span></td>
                </tr>
                <tr>
                  <th scope="row">ナレッジの蓄積</th>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">個人のチャットに散在</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツールごとに分断</span></td>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">対話が組織の共通知に</span></td>
                </tr>
                <tr>
                  <th scope="row">窓口</th>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">用途ごとに使い分け</span></td>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">ツールごとにバラバラ</span></td>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">Polaris AI 一人</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 図解3: BEFORE / AFTER */}
      <section className="v2-sec" id="before-after">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><PlayCircle />導入前後</span>
            <h2>導入前と導入後で、現場はこう変わる。</h2>
          </div>
          <div className="v2-ba">
            <div className="v2-ba__col">
              <div className="v2-ba__h">Before ・ 導入前</div>
              <div className="v2-ba__item"><X className="ic-x" />AIツールを入れたが、一部の詳しい人しか使っていない</div>
              <div className="v2-ba__item"><X className="ic-x" />毎回、背景情報をコピペでAIに教えている</div>
              <div className="v2-ba__item"><X className="ic-x" />ノウハウがベテランの頭の中にあり、退職や異動で消える</div>
            </div>
            <div className="v2-ba__arrow" aria-hidden="true"><ArrowRight /></div>
            <div className="v2-ba__col v2-ba__col--after">
              <div className="v2-ba__h">After ・ Polaris AI導入後</div>
              <div className="v2-ba__item"><Check className="ic-c" />現場の誰もが、話しかけるだけで仕事を任せられる</div>
              <div className="v2-ba__item"><Check className="ic-c" />Polaris AIが社内情報を自律的に取りに行く</div>
              <div className="v2-ba__item"><Check className="ic-c" />日々の対話がそのまま組織の共通知として残る</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF: 自社実践 */}
      <section className="v2-proof" id="proof">
        <div className="v2-wrap">
          <div className="v2-proof__lbl">自社実践</div>
          <h2>私たちはまず、自分たちの会社にPolaris AIを実装しました。</h2>
          <div className="v2-proof__grid">
            <div className="v2-metric">
              <div className="v2-metric__v">3<small>部門</small></div>
              <div className="v2-metric__l">CMO・CFO・CSOの3部門を構築</div>
            </div>
            <div className="v2-metric">
              <div className="v2-metric__v">約20<small>体</small></div>
              <div className="v2-metric__l">稼働する専門AIエージェント数</div>
            </div>
          </div>
          <p className="v2-proof__note">Claude Code上に構築した&quot;AI社員組織&quot;が、マーケティング運用・補助金申請・協業調査といった実務を担っています。</p>
        </div>
      </section>

      {/* WHY US */}
      <section className="v2-sec" id="why-us">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Star />選ばれる理由</span>
            <h2>&quot;入れただけ&quot;で終わらせない、5つの理由。</h2>
          </div>
          <div className="v2-why">
            <div className="v2-why__item">
              <div className="v2-why__n">01</div>
              <div>
                <div className="v2-why__t">「AIを入れたのに効果が出ない」を越える</div>
                <p className="v2-why__d">組織に眠る暗黙知を、AIが読めるコンテキストレイヤーへ整備。独自のコンテキストレイヤー成熟度診断と、&quot;推論してから絞り込む&quot;検索設計で、意思決定に使えるAIを実現します。</p>
              </div>
            </div>
            <div className="v2-why__item">
              <div className="v2-why__n">02</div>
              <div>
                <div className="v2-why__t">分析の当事者だった</div>
                <p className="v2-why__d">レポートを作る側ではなく、その数字で事業を動かしてきた人間が設計します。メガベンチャー主力事業のPdMとして年次130%成長を牽引、DeNAで国内最大規模のデータ分析・AI導入をリードした経験を持つメンバーが在籍。</p>
              </div>
            </div>
            <div className="v2-why__item">
              <div className="v2-why__n">03</div>
              <div>
                <div className="v2-why__t">自社がAIネイティブで意思決定している</div>
                <p className="v2-why__d">机上の提案はしません。Claude Code上にCMO・CFO・CSOの3部門・約20のAIエージェントによる&quot;AI社員組織&quot;を構築し、自分たち自身の意思決定を実際に回しながら実証しています。</p>
              </div>
            </div>
            <div className="v2-why__item">
              <div className="v2-why__n">04</div>
              <div>
                <div className="v2-why__t">診断からAI社員の開発・配属まで一気通貫</div>
                <p className="v2-why__d">マーケティング実務・データ分析・AI／プロダクト開発を役員3名で内製完結できる体制。診断・基盤構築・AI社員開発を、同じチームが分断なく担います。</p>
              </div>
            </div>
            <div className="v2-why__item" style={{ gridColumn: "1 / -1" }}>
              <div className="v2-why__n">05</div>
              <div>
                <div className="v2-why__t">成果を、仕組みとして残す</div>
                <p className="v2-why__d">成功した意思決定・分析をナレッジ化し、御社側に蓄積していく提供設計です。担当者にも私たちにも依存しない、再現可能な状態をつくります。使うほど、Polaris AIは御社の文脈に磨かれていきます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS: フェーズ図 + 料金 */}
      <section className="v2-sec v2-sec--sunken" id="process">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Route />導入の流れ</span>
            <h2>はじめ方は、2つのフェーズです。</h2>
            <p>「相談内容がまだ固まっていない」段階で十分です。まずは無料相談から。</p>
          </div>

          <div className="v2-phases">
            <div className="v2-phase">
              <div className="v2-phase__tag">Phase 1</div>
              <h3>基盤をつくる</h3>
              <div className="v2-phase__steps">
                <div className="v2-phase__step"><span className="v2-phase__dot">1</span><div><div className="t">診断</div><div className="d">現状のAI活用・データ環境を確認します。</div></div></div>
                <div className="v2-phase__step"><span className="v2-phase__dot">2</span><div><div className="t">ナレッジ基盤の整備</div><div className="d">無ければ構築を並走します。</div></div></div>
                <div className="v2-phase__step"><span className="v2-phase__dot">3</span><div><div className="t">RAG SaaS導入</div><div className="d">AIが社内情報を読める状態をつくります。</div></div></div>
              </div>
            </div>
            <div className="v2-phases__arrow" aria-hidden="true"><ArrowRight /></div>
            <div className="v2-phase v2-phase--2">
              <div className="v2-phase__tag">Phase 2</div>
              <h3>AI社員を配属する</h3>
              <div className="v2-phase__steps">
                <div className="v2-phase__step"><span className="v2-phase__dot">1</span><div><div className="t">AI社員テンプレート選定</div><div className="d">業務に合わせて担当を選びます。</div></div></div>
                <div className="v2-phase__step"><span className="v2-phase__dot">2</span><div><div className="t">個社カスタマイズ</div><div className="d">御社の業務・文脈に合わせ込みます。</div></div></div>
                <div className="v2-phase__step"><span className="v2-phase__dot">3</span><div><div className="t">配属・運用改善</div><div className="d">配属後も継続的に改善します。</div></div></div>
              </div>
            </div>
          </div>

          <div className="v2-price">
            <h3>料金は、規模とフェーズに応じて個別にお見積もりします。</h3>
            <p>初期費用・月額は、業務範囲や接続するツールの数によって変わります。まずは無料相談で、御社に合った進め方をご提案します。</p>
            <ul>
              <li><Check />フェーズ1から、小さく始められます</li>
              <li><Check />権限体系の再設計や、既存ツールのライセンス費用は対象外です（すでにあるものを活かします）</li>
            </ul>
            <div><a className="px-btn px-btn--primary" href="#contact">無料で相談する<ArrowRight className="px-btn__icon" /></a></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="v2-sec" id="faq">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><HelpCircle />よくある質問</span>
            <h2>導入前に、よくいただくご質問。</h2>
          </div>
          <div className="v2-faq">
            <details className="v2-faq__item">
              <summary>セキュリティが心配です。社内の機密情報を渡しても大丈夫ですか？<ChevronDown /></summary>
              <div className="v2-faq__body">Notion・Slack・Google Drive・社内データベースなどとはMCPで接続し、Polaris AIは質問に応じて必要な情報だけをその都度取得します。情報をまとめて一箇所にコピーしたり、必要のない情報まで渡したりする必要はありません。</div>
            </details>
            <details className="v2-faq__item">
              <summary>今使っているツール（Slack・Notionなど）は入れ替える必要がありますか？<ChevronDown /></summary>
              <div className="v2-faq__body">いいえ。既存のツールはそのまま活かします。権限体系そのものの再設計や、既存ツールのライセンス費用は対象外です。Polaris AIは、すでにある環境に接続する形で導入します。</div>
            </details>
            <details className="v2-faq__item">
              <summary>ITに詳しい社員がいなくても使えますか？<ChevronDown /></summary>
              <div className="v2-faq__body">はい。話しかける相手はPolaris AI一人だけです。「どのAIを、どう使うか」を考える必要はなく、上司や同僚に頼むのと同じ感覚で仕事を任せられます。</div>
            </details>
            <details className="v2-faq__item">
              <summary>どんな会社にフィットしますか？<ChevronDown /></summary>
              <div className="v2-faq__body">従業員50名以上のSaaS・EC・人材紹介企業を中心に、日々の業務判断が特定の社員に集中している組織に向いています。まずは無料相談で、御社の状況をお聞かせください。</div>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="v2-sec v2-contact" id="contact">
        <div className="v2-wrap">
          <div className="v2-contact__grid">
            <div className="v2-contact__intro">
              <span className="v2-eyebrow"><Mail />お問い合わせ</span>
              <h2>御社に、<em>Polaris AI</em>という<br />AI社員を。</h2>
              <p>初回相談（30分）は無料です。話しながら、現状を整理していきましょう。</p>
              <ul className="v2-assure">
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
      <footer className="v2-footer">
        <div className="v2-wrap">
          <div className="v2-footer__grid">
            <div className="v2-footer__col">
              <a className="v2-logo" href="#top" style={{ marginBottom: "14px" }}><img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} /><span>Polaris<span style={{ color: "var(--blue-500)" }}>X</span></span></a>
              <p className="v2-footer__lead">そろそろ、AI社員を採用しませんか。Polaris AIが、御社の業務をまるごと引き受けます。</p>
            </div>
            <div className="v2-footer__col"><h4>サービス</h4><a href="#problem">課題・現状</a><a href="#solution">Polaris AIとは</a><a href="#compare">比較</a><a href="#why-us">選ばれる理由</a><a href="#process">導入の流れ</a><a href="#faq">よくある質問</a></div>
            <div className="v2-footer__col"><h4>会社情報</h4><Link href="/company">会社情報</Link><Link href="/company#contact">お問い合わせ</Link></div>
            <div className="v2-footer__col"><h4>リソース</h4><Link href="/blogs">ブログ</Link><Link href="/privacy-policy">プライバシー</Link></div>
          </div>
          <div className="v2-footer__bottom">
            <span>© 2026 PolarisX, Inc.</span>
            <span style={{ display: "flex", gap: "16px" }}><Link href="/privacy-policy" style={{ color: "inherit", textDecoration: "none" }}>プライバシー</Link></span>
          </div>
        </div>
      </footer>
    </div>
  );
}
