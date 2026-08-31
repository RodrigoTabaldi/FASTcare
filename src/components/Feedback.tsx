import { useState, type FormEvent } from "react";

export default function Feedback() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setStatus("sending");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error();
      form.reset(); setStatus("sent");
    } catch { setStatus("error"); }
  };
  return (
    <section id="feedback" className="feedback-sec"><div className="wrap feedback-grid"><div className="sec-head reveal"><span className="eyebrow">Ajude a evoluir</span><h2>Envie uma sugestão</h2><p>Toda contribuição entra como pendente e só pode ser publicada após revisão do administrador. Não envie informações pessoais ou de saúde.</p></div><form className="feedback-form reveal" onSubmit={submit}><label htmlFor="feedback-name">Como quer ser identificado? <span>(opcional)</span></label><input id="feedback-name" name="name" maxLength={40} placeholder="Ex.: Cuidadora familiar" /><label htmlFor="feedback-kind">Assunto</label><select id="feedback-kind" name="kind" required defaultValue=""><option value="" disabled>Selecione</option><option>Conteúdo pouco claro</option><option>Sugestão de cuidado</option><option>Acessibilidade</option><option>Correção</option><option>Outro</option></select><label htmlFor="feedback-message">Mensagem</label><textarea id="feedback-message" name="message" required minLength={10} maxLength={1000} rows={5} placeholder="Descreva sua sugestão sem incluir dados pessoais…" /><label className="consent-line"><input type="checkbox" name="consent" value="yes" required /> Confirmo que não incluí dados pessoais ou clínicos.</label><div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div><button className="btn btn-primary" disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Enviar para moderação"}</button><p className="form-status" role="status">{status === "sent" && "Sugestão recebida. Ela ficará pendente até a revisão."}{status === "error" && "Não foi possível enviar agora. Tente novamente mais tarde."}</p></form></div></section>
  );
}
