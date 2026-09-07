import { useEffect, useMemo, useState } from "react";
import { SYMPTOMS, SEV, SEV_TEXT } from "../data";

interface AutotesteProps { onStageChange: (stage: number | null) => void; }

const GROUPS = [
  { id: "memoria", title: "Memória e orientação", description: "Lembranças, localização, atenção e mudanças de comportamento.", items: [0, 1, 3, 9, 14] },
  { id: "rotina", title: "Rotina e decisões", description: "Organização do dia, escolhas e proteção financeira.", items: [2, 4, 10, 11, 15] },
  { id: "higiene", title: "Higiene e autocuidado", description: "Vestir-se, banho, conforto e cuidados corporais.", items: [5, 6, 12, 13, 16] },
  { id: "mobilidade", title: "Comunicação e mobilidade", description: "Fala, deslocamento e necessidade de apoio físico.", items: [7, 8, 17, 18, 19] },
] as const;

function stageFromCombination(score: number, count: number): number | null {
  if (count < 2) return null;
  if (score <= 4) return 3;
  if (score <= 8) return 4;
  if (score <= 12) return 5;
  if (score <= 17) return 6;
  return 7;
}

export default function Autoteste({ onStageChange }: AutotesteProps) {
  const [sel, setSel] = useState<number[]>([]);
  const toggle = (i: number) => setSel((previous) => previous.includes(i) ? previous.filter((item) => item !== i) : [...previous, i]);
  const score = sel.reduce((total, i) => total + SYMPTOMS[i].w, 0);
  const max = SYMPTOMS.reduce((total, symptom) => total + symptom.w, 0);
  const pct = Math.round((score / max) * 100);
  const suggestedStage = useMemo(() => stageFromCombination(score, sel.length), [score, sel.length]);

  useEffect(() => { onStageChange(suggestedStage); }, [onStageChange, suggestedStage]);

  const displayIndex = suggestedStage === null ? 0 : suggestedStage - 1;
  const barColor = SEV[displayIndex];
  const textColor = SEV_TEXT[displayIndex];
  const level = suggestedStage === null
    ? (sel.length === 0 ? "Comece pela observação" : "Continue observando")
    : `Combinação de sinais: atenção à FAST ${suggestedStage}`;
  const viewStage = () => document.getElementById("etapas")?.scrollIntoView({ behavior: "smooth", block: "start" });

  return <section className="check-sec" id="autoteste"><div className="wrap">
    <div className="sec-head reveal"><span className="eyebrow">Checklist de observação</span><h2>Quais mudanças você tem percebido?</h2><p>Escolha somente os sinais observados em mais de uma situação. Os quatro temas abaixo têm a mesma quantidade de itens para facilitar a leitura.</p></div>
    <div className="check-grid">
      <div className="signal-groups reveal" aria-label="Sinais para observação">{GROUPS.map((group) => {
        const selectedInGroup = group.items.filter((i) => sel.includes(i)).length;
        return <fieldset className="signal-group" key={group.id} aria-describedby={`${group.id}-descricao`}>
          <legend className="sr-only">{group.title}</legend>
          <div className="signal-group-head"><div><h3>{group.title}</h3><p id={`${group.id}-descricao`}>{group.description}</p></div><span className="signal-count" aria-live="polite">{selectedInGroup} de 5</span></div>
          <div className="signal-list">{group.items.map((i) => <button key={i} type="button" className={`signal-option${sel.includes(i) ? " on" : ""}`} aria-pressed={sel.includes(i)} onClick={() => toggle(i)}><span className="signal-check" aria-hidden="true">{sel.includes(i) ? "✓" : ""}</span><span>{SYMPTOMS[i].t}</span></button>)}</div>
        </fieldset>;
      })}</div>
      <div className="check-result reveal" aria-live="polite">
        <span className="eyebrow">Leitura do conjunto</span><div className="result-big" style={{ color: textColor, marginTop: 10 }}>{level}</div>
        {suggestedStage !== null && <div className="stage-result" style={{ borderColor: barColor }}><strong>A combinação dos sinais selecionados aponta atenção para a FAST {suggestedStage}</strong><span>Essa faixa organiza a conversa com a equipe de saúde; não confirma diagnóstico e não deve ser definida por um sinal isolado.</span><button type="button" onClick={viewStage}>Ver etapa FAST {suggestedStage}</button></div>}
        {sel.length === 0 && <p className="combination-hint">Não há resposta certa: selecione somente as características observadas na rotina.</p>}
        {sel.length === 1 && <p className="combination-hint">Selecione ao menos mais uma característica, se ela também estiver presente, para visualizar a faixa de atenção.</p>}
        <div className="gauge" role="img" aria-label={`Intensidade ponderada do conjunto: ${pct}%`}><i style={{ width: `${pct}%`, background: barColor }} /></div>
        <p style={{ margin: 0, color: "var(--ink-soft)" }}>{sel.length} de {SYMPTOMS.length} sinais marcados ({pct}% de intensidade ponderada).{score > 9 && " Vale conversar com um profissional de saúde com prioridade."}{score > 0 && score <= 9 && " Registre os exemplos e considere agendar uma avaliação cognitiva."}{score === 0 && " Nenhum sinal marcado até agora."}</p>
        <p className="disclaimer-inline">Ferramenta educativa. Apenas um profissional de saúde pode aplicar a escala FAST e fechar um diagnóstico.</p>
      </div>
    </div>
  </div></section>;
}
