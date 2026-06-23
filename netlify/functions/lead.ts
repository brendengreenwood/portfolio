import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

interface LeadPayload {
  email?: string;
  source?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async (req: Request, _context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  let payload: LeadPayload;
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = (payload.email ?? "").trim().toLowerCase();
  if (!email || !EMAIL_REGEX.test(email)) {
    return Response.json({ error: "Invalid email" }, { status: 400 });
  }

  const source = (payload.source ?? "unknown").slice(0, 64);
  const message = (payload.message ?? "").slice(0, 1000);
  const createdAt = new Date().toISOString();
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

  const lead = { id, email, source, message, createdAt, ua: req.headers.get("user-agent") ?? "" };

  const store = getStore("leads");
  await store.setJSON(id, lead);

  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL ?? "brenden7@gmail.com";
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>",
          to: notifyTo,
          subject: `New lead: ${email} (${source})`,
          text: `Email: ${email}\nSource: ${source}\nMessage: ${message || "(none)"}\nAt: ${createdAt}`,
        }),
      });
    } catch (err) {
      console.error("Resend notify failed", err);
    }
  }

  return Response.json({ ok: true, id });
};

export const config = {
  path: "/api/lead",
};
