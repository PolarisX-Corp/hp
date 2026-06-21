"use client";

import { useState } from "react";
import { Users, Plus } from "lucide-react";
import { LinkedInIcon } from "./BrandIcons";

const FOUNDERS = [
  {
    initial: "折",
    role: "代表取締役 CEO",
    name: "折本 聖也",
    en: "Seiya Orimoto",
    linkedin:
      "https://www.linkedin.com/in/%E8%81%96%E4%B9%9F-%E6%8A%98%E6%9C%AC-14290526a/",
  },
  {
    initial: "H",
    role: "共同創業者 COO",
    name: "He Sibei",
    en: "Iris He",
    linkedin: "https://www.linkedin.com/in/sibei-h-a415611a2/",
  },
  {
    initial: "安",
    role: "共同創業者 CTO",
    name: "安部 歩夢",
    en: "Ayumu Abe",
    linkedin: "https://www.linkedin.com/in/ayumu-abe-b5074640b/",
  },
];

export function FoundersAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <section className="acc" data-open={open} id="founders">
      <button
        className="acc-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="founders-body"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="ico">
          <Users aria-hidden />
        </span>
        <span className="txt">
          <span className="ttl">創業メンバーの紹介</span>
          <span className="sub">CEO・COO・CTO のプロフィール</span>
        </span>
        <span className="plus">
          <Plus aria-hidden />
        </span>
      </button>

      <div className="acc-body" id="founders-body">
        <div className="acc-body-inner">
          <div className="acc-list">
            {FOUNDERS.map((f) => (
              <div className="founder" key={f.en}>
                <span className="ava">
                  <span>{f.initial}</span>
                </span>
                <span className="meta">
                  <span className="role">{f.role}</span>
                  <span className="nm">{f.name}</span>
                  <span className="nm-en">{f.en}</span>
                </span>
                <a
                  className="li"
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} の LinkedIn`}
                >
                  <LinkedInIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
