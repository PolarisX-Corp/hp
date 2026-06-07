"use client";

import { useState } from "react";

type Status = { type: "idle" | "ok" | "err"; message: string };

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    <form className="cform" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">お名前</label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="山田 太郎" required />
      </div>
      <div className="field">
        <label htmlFor="email">メールアドレス</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="field full">
        <label htmlFor="message">メッセージ</label>
        <textarea id="message" name="message" placeholder="ご相談・取材・協業など、お気軽にどうぞ。" required />
      </div>
      <div className="submit-row">
        <button type="submit" disabled={submitting}>
          {submitting ? "送信中…" : "送信する →"}
        </button>
        {status.type !== "idle" && (
          <span className={`form-status ${status.type}`} role="status" aria-live="polite">
            {status.message}
          </span>
        )}
      </div>
    </form>
  );
}
