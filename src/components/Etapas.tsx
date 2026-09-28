import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { STAGES, SEV, SEV_ON, TIPS } from "../data";
import Logo from "./Logo";
import Tip from "./Tip";

interface EtapasProps {
  suggestedStage: number | null;
}

export default function Etapas({ suggestedStage }: EtapasProps) {
  const [act, setAct] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const s = STAGES[act];

  useEffect(() => {
    if (suggestedStage !== null) setAct(suggestedStage - 1);
  }, [suggestedStage]);

  const move = (to: number) => {
    const i = (to + STAGES.length) % STAGES.length;
    setAct(i);
    tabsRef.current[i]?.focus();
  };
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); move(act + 1); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); move(act - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(STAGES.length - 1); }
  };

  return (
    <section className="trail-sec" id="etapas">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">As 7 etapas · interativo</span>
          <h2>Percorra a trilha FAST</h2>
          <p>Selecione uma etapa para ver os sinais, as ações práticas e o profissional indicado. Nos itens com o selo “Dica”, clique para abrir uma explicação. No teclado, use as setas para navegar.</p>
        </div>

        <div className="trail" role="tablist" aria-label="Etapas da escala FAST">
          <div className="trail-line" aria-hidden="true" />
          {STAGES.map((st, i) => (
            <button
              key={i}
              ref={(el) => { tabsRef.current[i] = el; }}
              id={"tab-etapa-" + st.n}
              className={"node" + (i === act ? " active" : "")}
              role="tab"
              aria-selected={i === act}
              aria-controls="painel-etapa"
              tabIndex={i === act ? 0 : -1}
              onClick={() => setAct(i)}
              onKeyDown={onKeyDown}
            >
              <span className="dot" style={{ background: SEV[i], color: SEV_ON[i] }}>{st.n}</span>
              <span className="lab">{st.sev}</span>
              <span className="node-action">{i === act ? "Etapa aberta" : "Ver etapa"}</span>
            </button>
          ))}
        </div>

        {suggestedStage !== null && (
          <p className="stage-connection" aria-live="polite">
            A combinação de sinais selecionada no checklist chama atenção para a etapa FAST {suggestedStage}. Consulte os detalhes abaixo com um profissional de saúde.
          </p>
        )}

        <div
          className="detail"
          id="painel-etapa"
          role="tabpanel"
          aria-labelledby={"tab-etapa-" + s.n}
        >
          <div className="detail-side" style={{ background: SEV[act], color: SEV_ON[act] }}>
            <span className="badge mono">FAST {s.n} / 7</span>
            <span className="num">{s.n}</span>
            <span className="title">{s.title}</span>
            <span className="sev">{s.sev}</span>
          </div>
          <div className="detail-body swap" key={act}>
            <h3>{s.title}</h3>
            <p className="desc">{s.desc}</p>
            <div className="dgrid">
              <div className="dblock">
                <h4>Sinais observáveis</h4>
                <ul>{s.sinais.map((x, i) => (
                  <li key={i} className={TIPS[x] ? "has-tip" : undefined}>
                    {x}{TIPS[x] && <Tip card={TIPS[x]} showIllustration={!!TIPS[x].image} showFinger={i === 0} />}
                  </li>
                ))}</ul>
              </div>
              <div className="dblock">
                <h4>Ações do cuidador</h4>
                <ul>{s.acoes.map((x, i) => (
                  <li key={i} className={TIPS[x] ? "has-tip" : undefined}>
                    {x}{TIPS[x] && <Tip card={TIPS[x]} showIllustration={!!TIPS[x].image} />}
                  </li>
                ))}</ul>
              </div>
            </div>
            {s.subs && (
              <div className="substages" aria-label="Subetapas - em desenvolvimento">
                {s.subs.map((x, i) => (
                  <span className="sub underdeveloped" key={i}>
                    {x}{TIPS[x] && <Tip card={TIPS[x]} showIllustration={!!TIPS[x].image} />}
                  </span>
                ))}
              </div>
            )}
            <span className="prof highlight-prof"><Logo size={18} /> <strong>Profissional indicado:</strong> {s.prof}</span>
          </div>
        </div>

        <div className="care-cta-wrap">
          <a className="care-cta" href="#cuidados-especiais">
            Saiba mais sobre cuidados do dia a dia
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
