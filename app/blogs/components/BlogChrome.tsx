import Link from "next/link";
import { COMPANY_BRAND, COMPANY_PROFILE } from "@/lib/company";
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
            <div className="tag">{COMPANY_BRAND.catchphrase}</div>
          </div>
          <div>
            <h2>会社概要</h2>
            <dl className="bl-deflist">
              <dt>会社名</dt>
              <dd>{COMPANY_PROFILE.name}</dd>
              <dt>代表者</dt>
              <dd>{COMPANY_PROFILE.representative}</dd>
              <dt>設立日</dt>
              <dd>{COMPANY_PROFILE.establishedOn}</dd>
              <dt>資本金</dt>
              <dd>{COMPANY_PROFILE.capital}</dd>
              <dt>業種</dt>
              <dd>{COMPANY_PROFILE.industry}</dd>
              <dt>事業内容</dt>
              <dd>
                {COMPANY_PROFILE.businesses.map((business, index) => (
                  <span key={business} style={{ display: "block" }}>
                    {index + 1}. {business}
                  </span>
                ))}
              </dd>
              <dt>本店所在地</dt>
              <dd>{COMPANY_PROFILE.address}</dd>
              <dt>お問い合わせ</dt>
              <dd>
                <a href={`mailto:${COMPANY_PROFILE.contactEmail}`}>
                  {COMPANY_PROFILE.contactEmail}
                </a>
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
              {COMPANY_BRAND.description}
            </p>
          </div>
          <div className="bl-footer__col">
            <h4>サービス</h4>
            <Link href="/#problem">課題感</Link>
            <Link href="/#solution">ソリューション</Link>
            <Link href="/#benefits">導入のメリット</Link>
            <Link href="/#process">導入の流れ</Link>
          </div>
          <div className="bl-footer__col">
            <h4>会社情報</h4>
            <Link href="/company">会社情報</Link>
            <Link href="/company#contact">お問い合わせ</Link>
          </div>
          <div className="bl-footer__col">
            <h4>リソース</h4>
            <Link href="/blogs">ブログ</Link>
            <Link href="/privacy-policy">プライバシー</Link>
          </div>
        </div>
        <div className="bl-footer__bottom">
          <span>© 2026 PolarisX, Inc.</span>
          <span className="links">
            <Link href="/privacy-policy">プライバシー</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
