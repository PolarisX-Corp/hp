"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { TocItem } from "@/lib/blog/types";
import { Icon } from "./Icon";

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
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
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
  const activeItem = toc.find((item) => item.id === activeId) ?? toc[0];

  return (
    <div className={`bl-toc-disclosure${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="bl-toc-toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="bl-toc-toggle__copy">
          <span className="bl-toc-toggle__label">
            <Icon name="list" size={14} />
            目次
            <span>{toc.length}項目</span>
          </span>
          <span className="bl-toc-toggle__current">{activeItem.text}</span>
        </span>
        <Icon name="chevron-down" size={18} className="bl-toc-toggle__chevron" />
      </button>

      <div id={panelId} className="bl-toc-panel" hidden={!isOpen}>
        <ul className="bl-toc">
          {toc.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={isActive ? "is-active" : ""}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
