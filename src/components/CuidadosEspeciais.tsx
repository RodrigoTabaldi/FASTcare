type CareKind = "hygiene" | "finance" | "medication" | "safety" | "support";

const CUIDADOS: { kind: CareKind; title: string; text: string; action: string }[] = [
  { kind: "hygiene", title: "Higiene e autocuidado", text: "Prepare o ambiente, ofereça escolhas simples e preserve a privacidade. No banheiro, reduza riscos de queda e acompanhe o banho quando necessário.", action: "Prioridade: conforto, autonomia e segurança." },
  { kind: "finance", title: "Finanças e proteção", text: "Revise contas e extratos com uma pessoa de confiança, organize documentos e observe cobranças incomuns ou decisões que possam causar prejuízo.", action: "Prioridade: proteger sem retirar a participação." },
  { kind: "medication", title: "Medicamentos", text: "Mantenha uma lista atualizada de remédios, doses e horários. Antes de alterar, partir ou suspender algo, confirme com médico ou farmacêutico.", action: "Prioridade: evitar esquecimentos e duplicidades." },
  { kind: "safety", title: "Segurança em casa", text: "Reduza riscos de queda, guarde produtos perigosos e sinalize locais importantes. Revise cozinha, banheiro e trajetos de circulação.", action: "Prioridade: prevenir acidentes na rotina." },
  { kind: "support", title: "Bem-estar do cuidador", text: "Divida tarefas, aceite ajuda e programe pausas. Procure rede de apoio e atendimento de saúde se o cansaço ou a tristeza persistirem.", action: "Prioridade: o cuidador também precisa de cuidado." },
];

function CareIcon({ kind }: { kind: CareKind }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (kind === "hygiene") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M8 20v-7a4 4 0 0 1 8 0v7M6 20h12M12 9V4M9.5 4h5" /><path {...common} d="M5 8c0 1.1-.9 2-2 2M19 8c0 1.1.9 2 2 2" /></svg>;
  if (kind === "finance") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect {...common} x="3" y="6" width="18" height="13" rx="2" /><path {...common} d="M3 10h18M7 15h3" /></svg>;
  if (kind === "medication") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M9 4h6v4H9zM7 8h10v12H7zM10 14h4M12 12v4" /></svg>;
  if (kind === "safety") return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM9 20v-5h6v5" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path {...common} d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" /></svg>;
}

export default function CuidadosEspeciais() {
  return <section className="care-sec" id="cuidados-especiais"><div className="wrap">
    <div className="sec-head reveal"><span className="eyebrow">Apoio prático</span><h2>Cuidados especiais no dia a dia</h2><p>Pequenas adaptações podem tornar a rotina mais segura, respeitosa e previsível para todos.</p></div>
    <div className="care-grid">{CUIDADOS.map((care, index) => <article className={`care-card care-${care.kind} reveal`} key={care.title}>
      <div className="care-card-top"><span className="care-number">Cuidado {String(index + 1).padStart(2, "0")}</span><span className="care-icon"><CareIcon kind={care.kind} /></span></div>
      <h3>{care.title}</h3><p>{care.text}</p><footer className="care-action"><span aria-hidden="true">→</span>{care.action}</footer>
    </article>)}</div>
    <p className="care-sources">Conteúdo orientado por recomendações do <a href="https://www.nia.nih.gov/health/alzheimers-caregiving/alzheimers-caregiving-bathing-dressing-and-grooming" target="_blank" rel="noreferrer">National Institute on Aging sobre higiene</a>, <a href="https://www.nia.nih.gov/health/legal-and-financial-planning/managing-money-problems-people-dementia" target="_blank" rel="noreferrer">finanças</a>, <a href="https://www.nia.nih.gov/health/safety/home-safety-checklist-alzheimers-disease" target="_blank" rel="noreferrer">segurança em casa</a> e <a href="https://www.nia.nih.gov/health/alzheimers-caregiving/common-medical-problems-alzheimers-disease-information-caregivers" target="_blank" rel="noreferrer">medicamentos</a>.</p>
  </div></section>;
}
