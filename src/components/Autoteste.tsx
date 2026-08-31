import { useState } from "react";
import { SYMPTOMS, SEV, SEV_TEXT } from "../data";

export default function Autoteste() {
  const [sel, setSel] = useState<number[]>([]);
  const toggle = (i: number) =>
    setSel((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));

  const score = sel.reduce((a, i) => a + SYMPTOMS[i].w, 0);
  const max = SYMPTOMS.reduce((a, s) => a + s.w, 0);
  const pct = Math.round((score / max) * 100);

  let idx = 0, level = "Sem sinais marcados";
  if (score > 0 && score <= 4) { level = "Sinais leves"; idx = 2; }
  else if (score > 4 && score <= 9) { level = "Sinais moderados"; idx = 4; }
  else if (score > 9) { level = "Sinais relevantes"; idx = 6; }
  const barColor = SEV[idx];      // cor viva para a barra
  const textColor = SEV_TEXT[idx]; // variante escura, legível sobre branco
  const estimatedStage = score === 0 ? 0 : Math.min(6, Math.max(1, Math.ceil(score / 3)));

  return (
    <section className="check-sec" id="autoteste">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Checklist de observação</span>
          <h2>Quais sinais você tem percebido?</h2>
          <p>Marque o que observa no dia a dia. Isto <strong>não é um diagnóstico</strong> —
            é um apoio para organizar a conversa com a equipe de saúde.</p>
        </div>
        <div className="check-grid">
          <div className="balloons reveal">
            {SYMPTOMS.map((sy, i) => (
              <button
                key={i}
                className={"balloon" + (sel.includes(i) ? " on" : "")}
                aria-pressed={sel.includes(i)}
                onClick={() => toggle(i)}
              >
                <span className="chk">{sel.includes(i) ? "✓" : ""}</span>{sy.t}
              </button>
            ))}
          </div>
          <div className="check-result reveal" aria-live="polite">
            <span className="eyebrow">Resultado</span>
            <div className="result-big" style={{ color: textColor, marginTop: 10 }}>{level}</div>
            <div className="gauge" role="img" aria-label={`Intensidade ponderada: ${pct}%`}>
              <i style={{ width: pct + "%", background: barColor }} />
            </div>
            <p style={{ margin: 0, color: "var(--ink-soft)" }}>
              {sel.length} de {SYMPTOMS.length} sinais marcados ({pct}% de intensidade ponderada).
              {score > 9 && " Procure avaliação médica com prioridade."}
              {score > 0 && score <= 9 && " Vale agendar uma avaliação cognitiva."}
              {score === 0 && " Nenhum sinal marcado até agora."}
            </p>
            {score > 0 && (
              <div className="stage-indication" style={{ borderColor: SEV[estimatedStage] }}>
                <span className="mono">FAIXA DE ATENÇÃO</span>
                <strong>Os sinais selecionados se aproximam de cuidados descritos entre FAST {Math.max(2, estimatedStage)} e {Math.min(7, estimatedStage + 2)}.</strong>
                <a href="#etapas">Comparar com as etapas e preparar a consulta →</a>
              </div>
            )}
            <p className="disclaimer-inline">
              Ferramenta educativa. Apenas um profissional de saúde pode aplicar a escala FAST
              e fechar um diagnóstico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
