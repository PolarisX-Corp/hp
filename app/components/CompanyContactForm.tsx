"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type Status = { type: "idle" | "ok" | "err"; message: string };

export default function CompanyContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const body = String(data.get("message") ?? "").trim();

    if (!name || !email || !body) {
      setStatus({ type: "err", message: "必須項目をご入力ください。" });
      setSubmitting(false);
      return;
    }

    const message = company ? `【会社名】${company}\n\n${body}` : body;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus({ type: "ok", message: "送信しました。お問い合わせありがとうございます。" });
        form.reset();
      } else {
        setStatus({
          type: "err",
          message: json?.error ?? "送信に失敗しました。時間をおいて再度お試しください。",
        });
      }
    } catch {
      setStatus({
        type: "err",
        message: "送信に失敗しました。通信環境をご確認のうえ再度お試しください。",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="co-form co-reveal" onSubmit={handleSubmit} noValidate>
      <div className="co-field">
        <label htmlFor="cf-name">お名前</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="山田 太郎" required />
      </div>
      <div className="co-field">
        <label htmlFor="cf-company">会社名</label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" placeholder="株式会社〇〇" />
      </div>
      <div className="co-field full">
        <label htmlFor="cf-email">メールアドレス</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="co-field full">
        <label htmlFor="cf-message">お問い合わせ内容</label>
        <textarea id="cf-message" name="message" placeholder="ご相談内容をご記入ください。" required />
      </div>
      <div className="co-form__submit">
        <button type="submit" className="px-btn px-btn--lg co-btn-white" disabled={submitting}>
          {submitting ? "送信中…" : "送信する"}
          <ArrowRight className="px-btn__icon" />
        </button>
        {status.type !== "idle" && (
          <span className="co-form__status" role="status" aria-live="polite">
            {status.message}
          </span>
        )}
      </div>
    </form>
  );
}
