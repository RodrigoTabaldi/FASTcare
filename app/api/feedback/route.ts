import { NextResponse } from "next/server";

type FeedbackInput = { name?: unknown; kind?: unknown; message?: unknown; consent?: unknown; website?: unknown };

export async function POST(request: Request) {
  let body: FeedbackInput;
  try { body = await request.json() as FeedbackInput; } catch { return NextResponse.json({ error: "Conteúdo inválido." }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true }, { status: 202 });
  const name = typeof body.name === "string" ? body.name.trim().slice(0, 40) : "Anônimo";
  const kind = typeof body.kind === "string" ? body.kind.trim().slice(0, 50) : "";
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 1000) : "";
  if (!kind || message.length < 10 || body.consent !== "yes") return NextResponse.json({ error: "Revise os campos obrigatórios." }, { status: 422 });

  // O envio externo é opcional: sem endpoint configurado, nada é armazenado nem exposto.
  const endpoint = process.env.FEEDBACK_MODERATION_WEBHOOK;
  if (!endpoint) return NextResponse.json({ error: "Canal de moderação ainda não configurado." }, { status: 503 });
  const upstream = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: name || "Anônimo", kind, message, status: "pending", submittedAt: new Date().toISOString() }), cache: "no-store" });
  if (!upstream.ok) return NextResponse.json({ error: "Falha no canal de moderação." }, { status: 502 });
  return NextResponse.json({ ok: true, status: "pending" }, { status: 202 });
}
