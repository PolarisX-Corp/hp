import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, ArrowUpRight, Globe, Building2, Rss, ChevronRight } from "lucide-react";
import { spaceGrotesk, notoSansJP, jetbrainsMono } from "../fonts";
import { FoundersAccordion } from "./FoundersAccordion";
import { XIcon } from "./BrandIcons";
import "./hub.css";

export const metadata: Metadata = {
  title: "リンク一覧",
  description:
    "PolarisX の各種リンク集。無料30分相談の予約、会社HP、公式X・公式ブログ、創業メンバーの紹介はこちらから。",
};

export default function HubPage() {
  return (
    <div
      className={`theme-hub ${spaceGrotesk.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      <main className="page">
        {/* ═══════════════ HEADER ═══════════════ */}
        <header className="hdr">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="logo-full" src="/assets/PolarisX_wordmark.svg" alt="PolarisX" />
          <p className="tagline">そろそろ、AI経営を始めてみませんか。</p>
        </header>

        {/* ═══════════════ メインボタン（最重要・最上部） ═══════════════ */}
        <div className="sec-label">まずはこちら</div>
        <nav className="links">
          {/* 無料相談を予約 → トップの問い合わせセクション */}
          <Link className="lnk primary accent" href="/#contact">
            <span className="ico">
              <CalendarCheck aria-hidden />
            </span>
            <span className="txt">
              <span className="ttl">無料相談を予約する</span>
              <span className="sub">AI・データ活用の課題を無料で診断・ヒアリング</span>
            </span>
            <span className="chev">
              <ArrowUpRight aria-hidden />
            </span>
          </Link>
        </nav>

        {/* ═══════════════ 通常ボタン（中段） ═══════════════ */}
        <div className="sec-label">PolarisX をもっと知る</div>
        <nav className="links">
          {/* サービス詳細（トップ） */}
          <Link className="lnk secondary" href="/">
            <span className="ico">
              <Globe aria-hidden />
            </span>
            <span className="txt">
              <span className="ttl">サービス詳細を見る</span>
              <span className="sub">polarisx.ltd</span>
            </span>
            <span className="chev">
              <ChevronRight aria-hidden />
            </span>
          </Link>

          {/* 会社情報 */}
          <Link className="lnk secondary" href="/company">
            <span className="ico">
              <Building2 aria-hidden />
            </span>
            <span className="txt">
              <span className="ttl">会社HPを見る</span>
              <span className="sub">polarisx.ltd/company</span>
            </span>
            <span className="chev">
              <ChevronRight aria-hidden />
            </span>
          </Link>

          {/* X・ブログ（2カラム） */}
          <div className="row-2col">
            <a
              className="lnk secondary compact"
              href="https://x.com/polarisx_inc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ico">
                <XIcon />
              </span>
              <span className="txt">
                <span className="ttl">公式X</span>
              </span>
            </a>
            <Link className="lnk secondary compact" href="/blogs">
              <span className="ico">
                <Rss aria-hidden />
              </span>
              <span className="txt">
                <span className="ttl">公式ブログ</span>
              </span>
            </Link>
          </div>
        </nav>

        {/* ═══════════════ 創業メンバー（折りたたみ） ═══════════════ */}
        <div className="sec-label">チーム</div>
        <FoundersAccordion />

        {/* ═══════════════ FOOTER ═══════════════ */}
        <footer className="foot">
          <span>© 2026 PolarisX, Ltd.</span>
          <a href="https://polarisx.ltd/hub">polarisx.ltd/hub</a>
        </footer>
      </main>
    </div>
  );
}
