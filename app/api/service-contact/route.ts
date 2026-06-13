import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: {
    company?: string;
    name?: string;
    email?: string;
    role?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const company = (body.company ?? "").trim();
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const role = (body.role ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!company || !name || !email || !message) {
    return NextResponse.json(
      { error: "必須項目を入力してください。" },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "メールアドレスの形式が正しくありません。" },
      { status: 400 }
    );
  }
  if (company.length > 200 || name.length > 200 || role.length > 200) {
    return NextResponse.json({ error: "入力が長すぎます。" }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "ご相談内容が長すぎます。" },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "contact@polarisx.ltd";
  const from = process.env.CONTACT_FROM ?? "PolarisX <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信が未設定です。RESEND_API_KEY を設定してください。" },
      { status: 503 }
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `【分析コンサル相談】${company} / ${name} 様`,
      html: `
        <h2>分析コンサルティング ページからのご相談</h2>
        <p><strong>会社名:</strong> ${escapeHtml(company)}</p>
        <p><strong>お名前:</strong> ${escapeHtml(name)}</p>
        <p><strong>メール:</strong> ${escapeHtml(email)}</p>
        <p><strong>役職:</strong> ${escapeHtml(role || "（未入力）")}</p>
        <p><strong>ご相談内容:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error:", res.status, detail);
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
