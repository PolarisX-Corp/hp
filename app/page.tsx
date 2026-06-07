import Image from "next/image";
import { Fragment } from "react";
import ContactForm from "./components/ContactForm";
import logoBlack from "@/public/assets/polarisx-logo-black.png";
import symbolBlack from "@/public/assets/polarisx-symbol-black.png";

const MARQUEE_ITEMS = [
  "人が人らしく生きられる社会",
  "労働を無くす",
  "人が暇を謳歌できる社会",
  "人の可能性を最大化",
  "すばらしき新世界",
];

function MarqueeRow() {
  return (
    <span>
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          {item}
          <span className="sep">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap nav">
          <Image className="logo" src={logoBlack} alt="PolarisX" height={24} priority />
          <ul>
            <li><a href="#mission">MISSION</a></li>
            <li><a href="#values">VALUES</a></li>
            <li><a href="#members">MEMBERS</a></li>
            <li><a href="#company">COMPANY</a></li>
          </ul>
          <a className="cta" href="#contact">CONTACT</a>
        </div>
      </header>

      <section className="hero">
        <div className="wrap">
          <Image className="symbig" src={symbolBlack} alt="" width={148} />
          <div className="est">Founded June 2026 — Tokyo</div>
          <h1>労働を、<br /><span className="out">無くす。</span></h1>
          <div className="hero-row">
            <p>
              人がやらなくてよい労働は、すべてテクノロジーへ。私たちは、人が人らしく生き、暇を謳歌できる「すばらしき新世界」をつくります。
            </p>
            <div className="acts">
              <a className="btn btn-fill" href="#mission">MISSION →</a>
              <a className="btn btn-out" href="#contact">お問い合わせ</a>
            </div>
          </div>
        </div>
        <div className="marquee">
          <div className="mq-track">
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>
      </section>

      <section className="sec mission" id="mission">
        <div className="wrap">
          <div className="secnum">MISSION ／ 01</div>
          <h2>人が人らしく生きられる、<em>すばらしき新世界</em>を実現する。</h2>
          <div className="manifesto">
            <div className="mf"><div className="no">01</div><p>労働を無くす</p></div>
            <div className="mf"><div className="no">02</div><p>人が暇を謳歌できる社会を実現する</p></div>
            <div className="mf"><div className="no">03</div><p>人の可能性を最大化させる</p></div>
            <div className="mf"><div className="no">04</div><p>すばらしき新世界を実現する</p></div>
          </div>
        </div>
      </section>

      <section className="sec" id="values">
        <div className="wrap">
          <div className="secnum">CORE VALUES ／ 02</div>
          <div className="values">
            <div className="val">
              <div className="vno">01</div>
              <h3>テクノロジーを信じ、自ら投資する。</h3>
              <p>私たち自身がテクノロジーを信じて投資する。誰よりも早く、その可能性に賭ける。</p>
            </div>
            <div className="val">
              <div className="vno">02</div>
              <h3>労働は、テクノロジーへ。</h3>
              <p>人間がやらなくてよい労働は、すべてテクノロジーに任せる。人は、人にしかできないことへ。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="members">
        <div className="wrap">
          <div className="secnum">MEMBERS ／ 03</div>
          <div className="members">
            <div className="mem">
              <div className="mono">SO</div>
              <div className="role">代表取締役 CEO</div>
              <h3>折本 聖也</h3>
              <div className="romaji">Seiya Orimoto</div>
              <p className="bio">前職でWebマーケティング、経営意思決定のためのKPI分析、深層学習を用いた予測モデルの構築、経営層への提言を一貫して担当。集客・分析に関する知見を持つ。</p>
            </div>
            <div className="mem">
              <div className="mono">IH</div>
              <div className="role">共同創業者 COO</div>
              <h3>何 思バイ</h3>
              <div className="romaji">Iris He</div>
              <p className="bio">学生起業で複数事業の収益化に成功。メガベンチャーで国内最大規模のゲーム事業のデータ分析・社内AI推進業務に従事。事業開発・営業・データ分析に知見を持つ。</p>
            </div>
            <div className="mem">
              <div className="mono">AA</div>
              <div className="role">共同創業者 CTO</div>
              <h3>安部 歩夢</h3>
              <div className="romaji">Ayumu Abe</div>
              <p className="bio">メガベンチャー・スタートアップのCTO等として、事業開発初期から立ち上げまでを複数回一貫して担当。フルスタックエンジニアとして現役で活躍中。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="company">
        <div className="wrap">
          <div className="secnum">COMPANY ／ 04</div>
          <dl className="table">
            <div className="row"><dt>会社名</dt><dd>PolarisX株式会社</dd></div>
            <div className="row"><dt>代表者</dt><dd>折本 聖也（Seiya Orimoto）／ 代表取締役 CEO</dd></div>
            <div className="row"><dt>設立予定日</dt><dd>2026年6月17日</dd></div>
            <div className="row"><dt>資本金</dt><dd>1,000,000円</dd></div>
            <div className="row"><dt>業種</dt><dd>情報通信業</dd></div>
            <div className="row"><dt>事業内容</dt><dd>
              <ul className="biz">
                <li><span className="n">①</span><span>データ分析AIエージェント（SaaS）の開発・提供</span></li>
                <li><span className="n">②</span><span>データ基盤構築・AI駆動型データ分析コンサルティング</span></li>
                <li><span className="n">③</span><span>AIモデル受託開発（需要予測・レコメンドエンジン等）</span></li>
              </ul>
            </dd></div>
            <div className="row"><dt>本店所在地</dt><dd>東京都渋谷区道玄坂1丁目10番8号 渋谷道玄坂東急ビル2F−C</dd></div>
            <div className="row"><dt>お問い合わせ</dt><dd>contact@polarisx.ltd</dd></div>
          </dl>
        </div>
      </section>

      <section className="sec contact" id="contact">
        <div className="wrap">
          <div className="secnum" style={{ color: "#9a9a9f" }}>CONTACT ／ 05</div>
          <h2>未来を、<br />一緒につくろう。</h2>
          <p className="lead">ご相談・取材・協業などのお問い合わせは、お気軽にどうぞ。</p>
          <a className="mail en" href="mailto:contact@polarisx.ltd">contact@polarisx.ltd</a>
          <ContactForm />
          <Image className="symc" src={symbolBlack} alt="" width={120} />
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="foot">
            <Image className="logo" src={logoBlack} alt="PolarisX" height={24} />
            <ul>
              <li><a href="#mission">MISSION</a></li>
              <li><a href="#values">VALUES</a></li>
              <li><a href="#members">MEMBERS</a></li>
              <li><a href="#company">COMPANY</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
          <div className="copy">© 2026 PolarisX, Inc. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
