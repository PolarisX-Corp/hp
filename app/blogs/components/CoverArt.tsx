import type { ReactNode } from "react";
import type { Category, CoverShape } from "@/lib/blog/categories";

const VARIANT_CLASS: Record<Category["coverVariant"], string> = {
  a: "",
  b: "bl-cover--alt",
  c: "bl-cover--c",
};

function ShapeArt({ shape }: { shape: CoverShape }) {
  switch (shape) {
    case "bars":
      return (
        <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g transform="translate(40,170)">
            <rect x="0" y="-50" width="40" height="50" rx="4" fill="rgba(255,255,255,.2)" />
            <rect x="56" y="-80" width="40" height="80" rx="4" fill="rgba(255,255,255,.28)" />
            <rect x="112" y="-66" width="40" height="66" rx="4" fill="#366EFF" />
            <rect x="168" y="-104" width="40" height="104" rx="4" fill="rgba(255,255,255,.22)" />
            <rect x="224" y="-86" width="40" height="86" rx="4" fill="rgba(255,255,255,.18)" />
          </g>
        </svg>
      );
    case "donut":
      return (
        <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g transform="translate(40,40)">
            <circle cx="160" cy="80" r="70" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="14" />
            <circle
              cx="160"
              cy="80"
              r="70"
              fill="none"
              stroke="#fff"
              strokeWidth="14"
              strokeDasharray="330 440"
              strokeLinecap="round"
              transform="rotate(-90 160 80)"
            />
          </g>
        </svg>
      );
    case "line":
      return (
        <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g transform="translate(30,120)">
            <polyline
              points="0,60 70,40 140,48 210,18 280,28 340,-6"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="340" cy="-6" r="6" fill="#00C2C7" />
          </g>
        </svg>
      );
    case "network":
      return (
        <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g transform="translate(120,55)" stroke="#fff" strokeWidth="2.5" fill="none" opacity=".9">
            <circle cx="80" cy="60" r="22" fill="rgba(255,255,255,.2)" />
            <circle cx="10" cy="20" r="14" />
            <circle cx="150" cy="18" r="14" />
            <circle cx="14" cy="100" r="14" />
            <circle cx="150" cy="104" r="14" />
            <line x1="28" y1="30" x2="62" y2="50" />
            <line x1="136" y1="28" x2="98" y2="50" />
            <line x1="28" y1="92" x2="62" y2="72" />
            <line x1="136" y1="96" x2="98" y2="72" />
          </g>
        </svg>
      );
    case "rows":
      return (
        <svg viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <g transform="translate(40,60)">
            <rect x="0" y="0" width="320" height="34" rx="6" fill="rgba(255,255,255,.16)" />
            <rect x="0" y="48" width="240" height="34" rx="6" fill="rgba(255,255,255,.22)" />
            <rect x="0" y="96" width="290" height="34" rx="6" fill="#366EFF" />
          </g>
        </svg>
      );
  }
}

/**
 * 記事カバー。frontmatter の cover があれば画像、無ければカテゴリ別の自動生成アート。
 * `.bl-cover` ボックス自体をレンダリングするので、親で `bl-card__media` 等のクラスを wrapperClassName に渡す。
 */
export function CoverArt({
  category,
  cover,
  alt,
  wrapperClassName = "",
  glowStyle,
  overlay,
}: {
  category: Category;
  cover?: string;
  alt: string;
  wrapperClassName?: string;
  glowStyle?: React.CSSProperties;
  overlay?: ReactNode;
}) {
  return (
    <div className={`bl-cover ${VARIANT_CLASS[category.coverVariant]} ${wrapperClassName}`.trim()}>
      {cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={cover}
          alt={alt}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <>
          <div
            className="bl-cover__glow"
            style={glowStyle ?? { width: 180, height: 180, top: -50, right: -30 }}
          />
          <ShapeArt shape={category.coverShape} />
        </>
      )}
      {overlay}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {!cover && <img className="bl-cover__mark" src="/assets/PolarisX_mark_white.svg" alt="" />}
    </div>
  );
}
