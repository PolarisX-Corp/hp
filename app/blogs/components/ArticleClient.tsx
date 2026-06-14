"use client";

import { useEffect, useRef, useState } from "react";
import type { TocItem } from "@/lib/blog/types";

/** 上部の読書プログレスバー */
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const ratio = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (ref.current) {
        ref.current.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="bl-progress" ref={ref} />;
}

/** 目次 + スクロールスパイ */
export function TocNav({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id ?? "");
  useEffect(() => {
    const onScroll = () => {
      let current = toc[0]?.id ?? "";
      for (const item of toc) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) current = item.id;
      }
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  if (toc.length === 0) return null;
  return (
    <ul className="bl-toc">
      {toc.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className={item.id === activeId ? "is-active" : ""}>
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
