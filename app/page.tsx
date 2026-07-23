import type { Metadata } from "next";
import Link from "next/link";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "./fonts";
import ServiceContactForm from "./components/ServiceContactForm";
import { ToolLogo, TOOL_ITEMS } from "./components/ToolLogo";
import "./service.css";
import {
  ArrowRight, Check, X, ChevronDown, Mail, CheckCircle2, User, Users,
  AlertTriangle, Star, Route, HelpCircle, PlayCircle, Scale, Bot,
  FileText,
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
          <a className="v2-logo" href="#top"><img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" style={{ height: 26, width: "auto" }} /></a>
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
            <h1 className="v2-h1">そろそろ、<br /><em>AI社員</em>を採用しませんか。</h1>
            <p className="v2-lead">Polaris AIは、御社の業務をまるごと任せられるAI社員です。一人採用するだけで、営業・人事・マーケティングまで、それぞれを担当する専門のAI社員たちがチームで動きます。</p>
            <div className="v2-hero__cta">
              <a className="px-btn px-btn--primary px-btn--lg" href="#contact">無料で相談する<ArrowRight className="px-btn__icon" /></a>
              <a className="px-btn px-btn--secondary px-btn--lg" href="#before-after">導入前後を見る</a>
            </div>
            <div className="v2-hero__note"><Check />初回相談（30分）は無料 ・ オンライン</div>
            <div className="v2-hero__examples">
              <span className="v2-hero__examples-lbl">できること（例）</span>
              <span className="v2-hero__chip">提案書のたたきを作る</span>
              <span className="v2-hero__chip">議事録を要約する</span>
              <span className="v2-hero__chip">社内資料を横断検索する</span>
            </div>
          </div>

          <div className="v2-org" role="img" aria-label="Polaris AIのしくみ：あなたがPolaris AIに話しかけると、司令塔として営業・マーケ・ナレッジの専門AI社員を呼び出し、MCP接続された御社のNotion・Slack・Google Drive・社内DBから必要な情報を取得して仕事を進める構成図">
            <div className="v2-org__cap">Polaris AI のしくみ</div>
            <div className="v2-org__you">
              <span className="v2-org__bubble"><span className="v2-org__av"><User /></span>「株式会社セイリンへの提案書、過去の類似案件から作って」</span>
            </div>
            <div className="v2-vline v2-vline--arrow"></div>
            <div className="v2-org__polaris">
              <div className="nm">Polaris AI</div>
              <div className="rl">司令塔AI社員 ── 依頼を理解し、担当するAI社員を自律的に呼び出す</div>
            </div>
            <div className="v2-branch v2-branch--2"><i></i><i></i></div>
            <div className="v2-teams v2-teams--2">
              <div className="v2-team">
                <div className="v2-team__lbl">営業チーム</div>
                <div className="v2-team__body">
                  <div className="v2-staff__s"><div className="t">議事録リサーチAI社員</div></div>
                  <div className="v2-staff__s"><div className="t">類似提案リサーチAI社員</div></div>
                  <div className="v2-staff__s"><div className="t">提案書作成AI社員</div></div>
                </div>
              </div>
              <div className="v2-team">
                <div className="v2-team__lbl">マーケチーム</div>
                <div className="v2-team__body">
                  <div className="v2-staff__s"><div className="t">価格・実績AI社員</div></div>
                  <div className="v2-staff__s"><div className="t">市場調査AI社員</div></div>
                </div>
              </div>
            </div>
            <div className="v2-mcp"><span className="vl"></span><span className="tag">PolarisX独自開発の高精度RAG</span><span className="vl"></span></div>
            <div className="v2-tools">
              <div className="v2-tools__lbl">御社のナレッジベース・データベース</div>
              <div className="v2-tools__logos">
                {TOOL_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className={`v2-tools__logo${item.keys.length > 1 ? " v2-tools__logo--pair" : ""}`}
                  >
                    <span className="v2-tools__logo-icons">
                      {item.keys.map((k) => (
                        <ToolLogo key={k} name={k} />
                      ))}
                    </span>
                    <span className="v2-tools__logo-name">{item.label}</span>
                  </div>
                ))}
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
            <h2>これから &quot;本気で&quot; AIを活用するなら。</h2>
          </div>
          <div className="v2-problems">
            <div className="v2-problem">
              <div className="v2-problem__viz">
                <div className="pain-viz pain-viz--1">
                  <div className="pain-viz__user"><User /></div>
                  <div className="pain-viz__bubble">???</div>
                  <div className="pain-viz__console">
                    <div className="pain-viz__console-head"><span /><span /><span /></div>
                    <div className="pain-viz__console-body"><i /><i /><i /></div>
                  </div>
                </div>
              </div>
              <h3><span className="no">01</span>AIツールを、使いこなせない</h3>
              <p>プロンプトが書けない、指示の出し方が難しい。結局、一部の詳しい人しか使わず、投資対効果が出ない。</p>
            </div>
            <div className="v2-problem">
              <div className="v2-problem__viz">
                <div className="pain-viz pain-viz--2">
                  <div className="pain-viz__box pain-viz__box--ai">
                    <Bot />
                    <span>汎用AI</span>
                  </div>
                  <div className="pain-viz__break">?</div>
                  <div className="pain-viz__box pain-viz__box--co">
                    <Users />
                    <span>御社の情報</span>
                  </div>
                </div>
              </div>
              <h3><span className="no">02</span>汎用AIは、&quot;御社&quot;を知らない</h3>
              <p>貴社の業務プロセスも、顧客との過去のやり取りも知らない。毎回コピペで背景を教えるくらいなら、自分でやったほうが早い。</p>
            </div>
            <div className="v2-problem">
              <div className="v2-problem__viz">
                <div className="pain-viz pain-viz--3">
                  <div className="pain-viz__vet">
                    <div className="pain-viz__u pain-viz__u--vet"><User /></div>
                    <div className="pain-viz__vet-lbl">ベテランだけ</div>
                  </div>
                  <div className="pain-viz__team">
                    <div className="pain-viz__u pain-viz__u--off"><User /><span className="pain-viz__q">?</span></div>
                    <div className="pain-viz__u pain-viz__u--off"><User /><span className="pain-viz__q">?</span></div>
                    <div className="pain-viz__u pain-viz__u--off"><User /><span className="pain-viz__q">?</span></div>
                  </div>
                </div>
              </div>
              <h3><span className="no">03</span>ノウハウが、属人化している</h3>
              <p>実際の仕事の進め方はベテラン社員の頭の中にしかない。誰が何を知っているかも分からず、退職や異動のたびに振り出しに戻る。</p>
              <div className="v2-problem__hook">AIを活かすには、まずナレッジを整える必要がある。</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="v2-sec" id="solution">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Bot />Polaris AIとは</span>
            <h2>Polaris AI は、話しかけて仕事を任せられる &quot;AI社員&quot; です。</h2>
          </div>
          <div className="v2-zigzag">
            <div className="v2-zigzag__row">
              <div className="v2-zigzag__text">
                <div className="no">01</div>
                <h3>窓口はひとつ、話し方は自由。</h3>
                <p>「どのAIを、どう使うか」を選んだり、プロンプトを工夫する必要はありません。「◯◯を作って」と話しかけるだけで、裏側の専門AI社員たちに自動で仕事が割り振られます。社員全員が、同じ入り口から仕事を頼めます。</p>
              </div>
              <div className="v2-zigzag__vis">
                <div className="viz-01">
                  <div className="viz-01__user">
                    <span className="viz-01__av"><User /></span>
                    <span className="viz-01__bubble">◯◯を任せる</span>
                  </div>
                  <div className="viz-01__arrow" />
                  <div className="viz-01__polaris">Polaris AI</div>
                  <div className="viz-01__fan"><i /><i /><i /></div>
                  <div className="viz-01__team">
                    <span>営業AI</span>
                    <span>マーケAI</span>
                    <span>リサーチAI</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="v2-zigzag__row v2-zigzag__row--rev">
              <div className="v2-zigzag__text">
                <div className="no">02</div>
                <h3>御社の情報を、自分で探しに行く。</h3>
                <p>事前に Notion・Slack・Google Drive・社内DBなどをPolaris AIとつないでおくと、質問に応じて独自開発の高精度RAG<span className="v2-note">（= 社内から必要な情報だけを自動で探す技術）</span>が必要な情報を自分で取りに行きます。背景情報を人がコピペで教える必要はもうありません。</p>
              </div>
              <div className="v2-zigzag__vis">
                <div className="viz-02">
                  <div className="viz-02__q">「◯◯社の資料は？」</div>
                  <div className="viz-02__arrow" />
                  <div className="viz-02__brain">
                    <div className="viz-02__brain-in">Polaris AI</div>
                    <div className="viz-02__rag">独自開発の高精度RAG</div>
                  </div>
                  <div className="viz-02__seek">
                    <div className="viz-02__seek-item"><ToolLogo name="notion" /><em>関連ページを検索</em></div>
                    <div className="viz-02__seek-item"><ToolLogo name="slack" /><em>過去の会話を確認</em></div>
                    <div className="viz-02__seek-item"><ToolLogo name="google-drive" /><em>資料フォルダを探索</em></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="v2-zigzag__row">
              <div className="v2-zigzag__text">
                <div className="no">03</div>
                <h3>成果物が、組織のナレッジになる。</h3>
                <p>Polaris AIと一緒に作成した議事録・提案書・調査メモが、そのまま組織のナレッジとして蓄積されていきます。個人の頭の中に眠っていた判断や進め方が、誰でも参照できる会社の資産になります。</p>
              </div>
              <div className="v2-zigzag__vis">
                <div className="viz-03">
                  <div className="viz-03__pair">
                    <div className="viz-03__actor"><span className="viz-03__av"><User /></span>営業</div>
                    <div className="viz-03__link">↔</div>
                    <div className="viz-03__actor viz-03__actor--ai">Polaris AI</div>
                  </div>
                  <div className="viz-03__arrow" />
                  <div className="viz-03__doc">
                    <div className="viz-03__doc-lines"><i /><i /><i /></div>
                    <div className="viz-03__doc-lbl">議事録・提案書・調査メモ</div>
                  </div>
                  <div className="viz-03__arrow" />
                  <div className="viz-03__base">
                    <div className="viz-03__base-lbl">組織のナレッジ</div>
                    <div className="viz-03__base-lines"><i /><i /><i /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="v2-demo-cta">
            <div className="v2-demo-cta__txt">実際の使用シーンは、初回相談でデモをご覧いただけます。</div>
            <a className="px-btn px-btn--ghost px-btn--sm" href="#contact">無料相談を予約<ArrowRight className="px-btn__icon" /></a>
          </div>
        </div>
      </section>

      {/* 図解2: 比較表 */}
      <section className="v2-sec v2-sec--sunken" id="compare">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Scale />比較</span>
            <h2>ChatGPTと、何が違うのか。</h2>
          </div>
          <p className="v2-cmp__scroll-hint" aria-hidden="true">横にスクロールして比較 →</p>
          <div className="v2-cmp">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th scope="col" className="px">Polaris AI</th>
                  <th scope="col">汎用AIチャット<span className="note">ChatGPT / Gemini 等</span></th>
                  <th scope="col">Microsoft Copilot</th>
                  <th scope="col">個別導入のAIツール</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">使いこなし</th>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">話しかけるだけ</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">プロンプトの習熟が必要</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">アプリごとに学習</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツールごとに学習</span></td>
                </tr>
                <tr>
                  <th scope="row">自社の文脈理解</th>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">独自RAGで社内を自律検索</span></td>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">毎回コピペで説明</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">M365 内のみ</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツール内のみ</span></td>
                </tr>
                <tr>
                  <th scope="row">ナレッジの蓄積</th>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">対話が組織の共通知に</span></td>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">個人のチャットに散在</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">個人の履歴に散在</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツールごとに分断</span></td>
                </tr>
                <tr>
                  <th scope="row">利用可能なAI</th>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">ChatGPT・Gemini・Claude</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ChatGPT / Gemini のみ</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">OpenAI 系のみ</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツールごとに異なる</span></td>
                </tr>
                <tr>
                  <th scope="row">窓口</th>
                  <td className="px"><span className="v2-mark v2-mark--best">◎</span><span className="d">Polaris AI 一人</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">用途ごとに使い分け</span></td>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">Office アプリごと</span></td>
                  <td><span className="v2-mark v2-mark--no">×</span><span className="d">ツールごとにバラバラ</span></td>
                </tr>
                <tr>
                  <th scope="row">導入の手軽さ</th>
                  <td className="px"><span className="v2-mark v2-mark--tri">△</span><span className="d">初期設計あり・最短2週間〜</span></td>
                  <td><span className="v2-mark v2-mark--best">◎</span><span className="d">即利用可</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">M365 テナント設定が必要</span></td>
                  <td><span className="v2-mark v2-mark--tri">△</span><span className="d">ツールごとに導入</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="v2-cmp__note">※ 各社のサービス内容は 2026年7月時点の公開情報に基づく一般的な理解です。</p>
        </div>
      </section>

      {/* 図解3: BEFORE / AFTER */}
      <section className="v2-sec" id="before-after">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><PlayCircle />導入前後</span>
            <h2>導入前と導入後で、現場はこう変わる。</h2>
            <p>※ 導入前の症状はよくあるパターンとしてまとめたもので、御社の状況によって変わります。</p>
          </div>
          <div className="v2-ba">
            <div className="v2-ba__row">
              <div className="v2-ba__cat">
                <span className="v2-ba__cat-n">01</span>
                <span className="v2-ba__cat-lbl">AI活用の実態</span>
              </div>
              <div className="v2-ba__pair">
                <div className="v2-ba__side v2-ba__side--before">
                  <div className="v2-ba__flag">Before</div>
                  <div className="v2-ba__viz">
                    <div className="ba-viz ba-viz--1b">
                      <div className="ba-viz__row">
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                        <span className="ba-viz__u"><User /></span>
                        <span className="ba-viz__u"><User /></span>
                        <span className="ba-viz__u"><User /></span>
                        <span className="ba-viz__u"><User /></span>
                      </div>
                    </div>
                  </div>
                  <div className="v2-ba__text">使いこなす人が、限られがち</div>
                  <div className="v2-ba__desc">プロンプトを書ける一部の社員に活用が偏り、投資対効果が見えにくくなりがちです。</div>
                </div>
                <div className="v2-ba__arrow" aria-hidden="true"><ArrowRight /></div>
                <div className="v2-ba__side v2-ba__side--after">
                  <div className="v2-ba__flag">After</div>
                  <div className="v2-ba__viz">
                    <div className="ba-viz ba-viz--1a">
                      <div className="ba-viz__polaris">Polaris AI</div>
                      <div className="ba-viz__lines ba-viz__lines--down"><i /><i /><i /><i /><i /></div>
                      <div className="ba-viz__row">
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                      </div>
                    </div>
                  </div>
                  <div className="v2-ba__text">現場の誰もが仕事を任せられる</div>
                  <div className="v2-ba__desc">話しかけるだけで、営業もバックオフィスもAIに仕事を任せられる。</div>
                  <div className="v2-ba__metric"><span className="v2-ba__metric-lbl">自社実践の目安</span><span className="v2-ba__metric-val">マーケティング記事作成 <strong>60分 → 5分</strong></span></div>
                </div>
              </div>
            </div>

            <div className="v2-ba__row">
              <div className="v2-ba__cat">
                <span className="v2-ba__cat-n">02</span>
                <span className="v2-ba__cat-lbl">情報の受け渡し</span>
              </div>
              <div className="v2-ba__pair">
                <div className="v2-ba__side v2-ba__side--before">
                  <div className="v2-ba__flag">Before</div>
                  <div className="v2-ba__viz">
                    <div className="ba-viz ba-viz--2b">
                      <div className="ba-viz__flow">
                        <span className="ba-viz__u ba-viz__u--on"><User /></span>
                        <span className="ba-viz__hand"><ArrowRight /></span>
                        <div className="ba-viz__bubble"><i /><i /><i /></div>
                        <span className="ba-viz__hand"><ArrowRight /></span>
                        <span className="ba-viz__ai">AI</span>
                      </div>
                      <div className="ba-viz__loop">× 質問のたびに</div>
                    </div>
                  </div>
                  <div className="v2-ba__text">背景を渡す手間がかかる</div>
                  <div className="v2-ba__desc">質問のたびに背景情報を人がコピペで渡す必要があり、AI に頼む工数と自分でやる工数が変わらなくなりがちです。</div>
                </div>
                <div className="v2-ba__arrow" aria-hidden="true"><ArrowRight /></div>
                <div className="v2-ba__side v2-ba__side--after">
                  <div className="v2-ba__flag">After</div>
                  <div className="v2-ba__viz">
                    <div className="ba-viz ba-viz--2a">
                      <div className="ba-viz__polaris">Polaris AI</div>
                      <div className="ba-viz__fan"><i /><i /><i /></div>
                      <div className="ba-viz__tools">
                        <span className="ba-viz__tool"><ToolLogo name="notion" /></span>
                        <span className="ba-viz__tool"><ToolLogo name="slack" /></span>
                        <span className="ba-viz__tool"><ToolLogo name="google-drive" /></span>
                      </div>
                    </div>
                  </div>
                  <div className="v2-ba__text">AIが自分で取りに行く</div>
                  <div className="v2-ba__desc">Notion・Slack・Driveから、AIが必要な情報を自分で取りに来る。</div>
                </div>
              </div>
            </div>

            <div className="v2-ba__row">
              <div className="v2-ba__cat">
                <span className="v2-ba__cat-n">03</span>
                <span className="v2-ba__cat-lbl">業務知見の在り方</span>
              </div>
              <div className="v2-ba__pair">
                <div className="v2-ba__side v2-ba__side--before">
                  <div className="v2-ba__flag">Before</div>
                  <div className="v2-ba__viz">
                    <div className="ba-viz ba-viz--3b">
                      <div className="ba-viz__row">
                        <span className="ba-viz__u ba-viz__u--vet"><User /><span className="ba-viz__brainmark" aria-hidden="true" /></span>
                        <span className="ba-viz__u ba-viz__u--off"><User /><span className="ba-viz__qmark">?</span></span>
                        <span className="ba-viz__u ba-viz__u--off"><User /><span className="ba-viz__qmark">?</span></span>
                        <span className="ba-viz__u ba-viz__u--off"><User /><span className="ba-viz__qmark">?</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="v2-ba__text">ベテランの頭の中に留まりがち</div>
                  <div className="v2-ba__desc">判断基準や進め方が個人の経験として蓄積され、退職や異動のたびに知見が失われがちです。</div>
                </div>
                <div className="v2-ba__arrow" aria-hidden="true"><ArrowRight /></div>
                <div className="v2-ba__side v2-ba__side--after">
                  <div className="v2-ba__flag">After</div>
                  <div className="v2-ba__viz">
                    <div className="ba-viz ba-viz--3a">
                      <div className="ba-viz__ring">
                        <span className="ba-viz__u ba-viz__u--on ba-viz__u--tl"><User /></span>
                        <span className="ba-viz__u ba-viz__u--on ba-viz__u--tr"><User /></span>
                        <div className="ba-viz__center-doc"><FileText /><span>組織のナレッジ</span></div>
                        <span className="ba-viz__u ba-viz__u--on ba-viz__u--bl"><User /></span>
                        <span className="ba-viz__u ba-viz__u--on ba-viz__u--br"><User /></span>
                      </div>
                    </div>
                  </div>
                  <div className="v2-ba__text">誰でも参照できる資産に</div>
                  <div className="v2-ba__desc">対話と成果物がそのまま蓄積され、誰でも参照できる会社の資産になる。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="v2-sec v2-sec--tint" id="why-us">
        <div className="v2-wrap">
          <div className="v2-shead">
            <span className="v2-eyebrow"><Star />選ばれる理由</span>
            <h2>他社と、ここが違います。</h2>
          </div>
          <div className="v2-why">
            <div className="v2-why__row">
              <div className="v2-why__text">
                <div className="v2-why__n">01</div>
                <div className="v2-why__t">独自開発の高精度RAGで、&quot;御社を知っているAI&quot; を実現</div>
                <p className="v2-why__d">汎用AIやチャット型ツールでは届かない、意思決定に使える精度。暗黙知を含む社内文脈をAIが読める形に整え、質問に応じて&quot;推論してから絞り込む&quot;検索設計で必要な情報だけを取りに行きます。</p>
                <div className="v2-why__proof"><span>裏付け</span>PolarisXが独自開発したRAG技術を Polaris AI に搭載。単なるベクトル検索ではなく、社内文脈を扱うために設計した独自アーキテクチャです。</div>
              </div>
              <div className="v2-why__vis">
                <div className="why-viz why-viz--flow">
                  <div className="why-viz__step"><span className="why-viz__k">STEP 1</span><span className="why-viz__v">質問を理解</span></div>
                  <div className="why-viz__arrow" />
                  <div className="why-viz__step why-viz__step--em"><span className="why-viz__k">STEP 2 · 推論</span><span className="why-viz__v">どこを探すべきか判断</span></div>
                  <div className="why-viz__arrow" />
                  <div className="why-viz__step why-viz__step--em"><span className="why-viz__k">STEP 3 · 絞り込み検索</span><span className="why-viz__v">関連する情報だけ取得</span></div>
                  <div className="why-viz__arrow" />
                  <div className="why-viz__step why-viz__step--goal"><span className="why-viz__k">結果</span><span className="why-viz__v">精度の高い回答</span></div>
                </div>
              </div>
            </div>

            <div className="v2-why__row v2-why__row--rev">
              <div className="v2-why__text">
                <div className="v2-why__n">02</div>
                <div className="v2-why__t">自社がAIネイティブで意思決定している</div>
                <p className="v2-why__d">机上の提案はしません。自分たちの経営判断こそAIで回し、検証済みの形で御社に届けます。「使ってみたら合わなかった」を、事前に潰しきります。</p>
                <div className="v2-why__proof"><span>裏付け</span>マーケ運用・補助金申請・協業調査などの実務を、社内のAI社員組織が日々担っています。<strong>実例: 補助金申請のドラフトは、AI社員が9割を執筆。</strong></div>
              </div>
              <div className="v2-why__vis">
                <div className="why-viz why-viz--metric">
                  <div className="why-viz__lbl">社内で実運用中のAI社員組織</div>
                  <div className="why-viz__metrics">
                    <div className="why-viz__m">
                      <div className="why-viz__mv">3<small>部門</small></div>
                      <div className="why-viz__ml">CMO / CFO / CSO</div>
                    </div>
                    <div className="why-viz__mdiv" aria-hidden="true" />
                    <div className="why-viz__m">
                      <div className="why-viz__mv">約20<small>体</small></div>
                      <div className="why-viz__ml">AI社員が稼働</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="v2-why__row">
              <div className="v2-why__text">
                <div className="v2-why__n">03</div>
                <div className="v2-why__t">実務を回してきたチームが、診断から運用まで伴走</div>
                <p className="v2-why__d">「レポートを作る側」ではなく、その数字で事業を動かしてきたメンバーが在籍。事業成長・大規模データ分析・AIプロダクト開発の経験を持つチームが、御社の実務を理解した上で診断・基盤構築・AI社員開発・運用改善を一貫して担います。</p>
                <div className="v2-why__proof"><span>裏付け</span>「相談は営業、実装は別会社、運用はまた別」という分業型では届かない、事業に効く実装ができる体制です。</div>
              </div>
              <div className="v2-why__vis">
                <div className="why-viz why-viz--team">
                  <div className="why-viz__lbl">実務経験ベースのAI設計</div>
                  <div className="why-viz__creds">
                    <div className="why-viz__cred">
                      <div className="why-viz__cred-t">事業成長 PdM</div>
                      <div className="why-viz__cred-d">メガベンチャー主力事業を年次130%成長</div>
                    </div>
                    <div className="why-viz__cred">
                      <div className="why-viz__cred-t">大規模チームでのAI推進リード</div>
                      <div className="why-viz__cred-d">定常業務を50%以上削減、新人育成期間を60%短縮</div>
                    </div>
                    <div className="why-viz__cred">
                      <div className="why-viz__cred-t">プロダクト開発</div>
                      <div className="why-viz__cred-d">複数スタートアップの CTO / リード経験</div>
                    </div>
                  </div>
                  <div className="why-viz__phases">
                    <span>診断</span>
                    <span>基盤構築</span>
                    <span>AI社員開発</span>
                    <span>運用改善</span>
                  </div>
                  <div className="why-viz__note">全工程を同じチームが担当</div>
                </div>
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
            <h2>まずは無料相談から。</h2>
          </div>

          <div className="v2-process__meta">
            <div className="v2-process__meta-item">
              <span className="v2-process__meta-lbl">最短導入期間</span>
              <span className="v2-process__meta-val">2週間〜</span>
            </div>
            <div className="v2-process__meta-item">
              <span className="v2-process__meta-lbl">スタート地点</span>
              <span className="v2-process__meta-val">Phase 1 / Phase 2 どちらからでも</span>
              <span className="v2-process__meta-note">既に基盤が整っている企業は Phase 2 から着手可能</span>
            </div>
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
            <div className="v2-price__row">
              <div className="v2-price__label">初期費用</div>
              <div className="v2-price__val"><span className="v2-price__num">20万円</span><span className="v2-price__unit">〜</span></div>
            </div>
            <p className="v2-price__note">業務範囲・接続ツールの数・データ量など、御社の実態に応じて個別お見積もりします。月額は業務範囲によって変動するため、無料相談時にレンジをご提示します。</p>
            <ul>
              <li><Check />フェーズ1 から、小さく始められます</li>
              <li><Check />権限体系の再設計、既存ツールのライセンス費用は対象外（すでにあるものを活かします）</li>
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
              <div className="v2-faq__body">Notion・Slack・Google Drive・社内データベースなどとは標準的な接続方式でつなぎ、Polaris AIは質問に応じて必要な情報だけをその都度取得します。情報をまとめて一箇所にコピーしたり、必要のない情報まで渡したりする必要はありません。</div>
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
              <div className="v2-faq__body">日々の業務判断が特定の社員に集中している組織、AI導入で成果を出しきれていない組織に向いています。まずは無料相談で、御社の状況をお聞かせください。</div>
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
              <h2>まずは、<em>御社の課題整理</em>から。</h2>
              <p>初回相談（30分）は無料です。話しながら、現状を整理していきましょう。</p>
              <div className="v2-contact__benefits">
                <div className="v2-contact__benefits-lbl">無料相談で分かること</div>
                <ul className="v2-contact__benefits-list">
                  <li><Check />御社の AI 活用ポテンシャルの診断</li>
                  <li><Check />想定投資額のレンジ（初期費用・月額）</li>
                  <li><Check />導入から成果が出るまでの想定タイムライン</li>
                </ul>
              </div>
              <ul className="v2-assure">
                <li><CheckCircle2 />初回ヒアリング & 現状診断は無料</li>
                <li><CheckCircle2 />オンライン 30〜60 分・営業日 2 日以内にご返信</li>
                <li><CheckCircle2 />無理な提案・しつこい営業はしません</li>
              </ul>
            </div>

            <div className="v2-contact__form-wrap">
              <div className="v2-contact__badge"><Check />初回相談 30分 無料 ・ オンライン</div>
              <ServiceContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="v2-footer">
        <div className="v2-wrap">
          <div className="v2-footer__grid">
            <div className="v2-footer__col">
              <a className="v2-logo" href="#top" style={{ marginBottom: "14px" }}><img src="/assets/PolarisX_wordmark.svg" alt="PolarisX" style={{ height: 26, width: "auto" }} /></a>
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
