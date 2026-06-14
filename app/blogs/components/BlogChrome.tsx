import Link from "next/link";
import { Icon } from "./Icon";

export function BlogHeader() {
  return (
    <header className="bl-header">
      <div className="bl-wrap bl-header__in">
        <Link className="bl-logo" href="/blogs">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} />
          <span>
            Polaris<span style={{ color: "var(--blue-500)" }}>X</span>
          </span>
        </Link>
        <nav className="bl-nav">
          <Link href="/#solution">機能</Link>
          <Link href="/#contact">料金</Link>
          <Link href="/#benefits">導入事例</Link>
          <Link href="/blogs" className="is-active">
            ブログ
          </Link>
          <Link href="/company">会社情報</Link>
        </nav>
        <div className="bl-header__cta">
          <Link className="bl-search" href="/blogs#blog-search">
            <Icon name="search" size={15} />
            記事を検索
          </Link>
          <Link className="px-btn px-btn--primary px-btn--sm bl-header__primary" href="/#contact">
            お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
}

export function BlogCompany() {
  return (
    <section className="bl-company">
      <div className="bl-wrap">
        <div className="bl-company__grid">
          <div className="bl-company__brand">
            <div className="bl-stars">
              <div className="bl-star" style={{ width: 160, height: 160, top: -40, right: -30 }} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/PolarisX_mark_white.svg" alt="PolarisX" />
            <div className="tag">
              意思決定に、<em>再現性</em>を。
            </div>
          </div>
          <div>
            <h2>会社概要</h2>
            <dl className="bl-deflist">
              <dt>会社名</dt>
              <dd>PolarisX 株式会社</dd>
              <dt>設立</dt>
              <dd>2021年4月</dd>
              <dt>所在地</dt>
              <dd>東京都千代田区丸の内1-1-1 PolarisXタワー 12F</dd>
              <dt>代表者</dt>
              <dd>代表取締役CEO 北極 星一</dd>
              <dt>事業内容</dt>
              <dd>AI × データ意思決定インテリジェンスプラットフォーム「PolarisX」の開発・提供</dd>
              <dt>従業員数</dt>
              <dd>128名（2026年6月時点）</dd>
              <dt>URL</dt>
              <dd>
                <Link href="/">https://www.polarisx.example</Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogFooter() {
  return (
    <footer className="bl-footer">
      <div className="bl-wrap">
        <div className="bl-footer__grid">
          <div className="bl-footer__col">
            <Link className="bl-logo" href="/blogs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/PolarisX_mark.svg" alt="" width={26} height={26} />
              <span>
                Polaris<span style={{ color: "var(--blue-500)" }}>X</span>
              </span>
            </Link>
            <p className="bl-footer__lead">
              AI × データで、意思決定に再現性を。北極星のように、組織の判断を正しい方向へ導きます。
            </p>
          </div>
          <div className="bl-footer__col">
            <h4>プロダクト</h4>
            <Link href="/">概要</Link>
            <Link href="/#solution">意思決定インサイト</Link>
            <Link href="/#solution">データ探索</Link>
            <Link href="/#contact">料金</Link>
          </div>
          <div className="bl-footer__col">
            <h4>リソース</h4>
            <Link href="/blogs">ブログ</Link>
            <Link href="/#benefits">導入事例</Link>
            <Link href="/">ドキュメント</Link>
            <Link href="/#contact">資料ダウンロード</Link>
          </div>
          <div className="bl-footer__col">
            <h4>会社情報</h4>
            <Link href="/company">私たちについて</Link>
            <Link href="/company">採用情報</Link>
            <Link href="/#contact">お問い合わせ</Link>
            <Link href="/company">利用規約</Link>
          </div>
        </div>
        <div className="bl-footer__bottom">
          <span>© 2026 PolarisX, Inc.</span>
          <span className="links">
            <Link href="/company">プライバシーポリシー</Link>
            <Link href="/company">セキュリティ</Link>
            <Link href="/company">特定商取引法に基づく表記</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
