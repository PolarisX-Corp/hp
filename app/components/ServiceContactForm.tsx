"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Status = "idle" | "submitting" | "sent" | "error";

export default function ServiceContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      company: String(data.get("company") ?? "").trim(),
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/service-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
        setError(
          json?.error ?? "送信に失敗しました。時間をおいて再度お試しください。"
        );
      }
    } catch {
      setStatus("error");
      setError(
        "送信に失敗しました。通信環境をご確認のうえ再度お試しください。"
      );
    }
  }

  return (
    <form
      className={`sv-form sv-reveal${status === "sent" ? " is-sent" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="sv-form__body">
        <div className="sv-form__row">
          <div className="px-field">
            <label className="px-label" htmlFor="f-company">
              会社名<span className="px-label__req">*</span>
            </label>
            <input
              className="px-input"
              id="f-company"
              name="company"
              placeholder="株式会社PolarisX"
              required
            />
          </div>
          <div className="px-field">
            <label className="px-label" htmlFor="f-name">
              お名前<span className="px-label__req">*</span>
            </label>
            <input
              className="px-input"
              id="f-name"
              name="name"
              placeholder="山田 太郎"
              required
            />
          </div>
        </div>
        <div className="sv-form__row">
          <div className="px-field">
            <label className="px-label" htmlFor="f-email">
              メールアドレス<span className="px-label__req">*</span>
            </label>
            <input
              className="px-input"
              id="f-email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="px-field">
            <label className="px-label" htmlFor="f-role">
              役職
            </label>
            <select className="px-select" id="f-role" name="role" defaultValue="">
              <option value="">選択してください</option>
              <option>経営層・役員</option>
              <option>事業部長・マネージャー</option>
              <option>データ／DX 推進</option>
              <option>その他</option>
            </select>
          </div>
        </div>
        <div className="px-field">
          <label className="px-label" htmlFor="f-msg">
            ご相談内容<span className="px-label__req">*</span>
          </label>
          <textarea
            className="px-textarea"
            id="f-msg"
            name="message"
            rows={4}
            placeholder="現在のAI活用の課題や、実現したいことをお書きください。"
            required
          />
        </div>
        <div className="sv-form__actions">
          <button
            type="submit"
            className="px-btn px-btn--primary px-btn--lg px-btn--block"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "送信中…" : "無料で相談する"}
            <ArrowRight className="px-btn__icon" />
          </button>
        </div>
        {status === "error" && (
          <p className="sv-form__note" role="alert" aria-live="assertive" style={{ color: "var(--danger)" }}>
            {error}
          </p>
        )}
        <p className="sv-form__note">
          送信いただいた内容は、ご相談対応の目的にのみ利用します。
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</a>
          に同意のうえ送信してください。
        </p>
      </div>
      <div className="sv-form__done">
        <div className="ic">
          <Check />
        </div>
        <h3>送信しました</h3>
        <p>ありがとうございます。営業日 2 日以内にご返信します。</p>
      </div>
    </form>
  );
}
