import { useState } from "react";
import { STAGES, SEV } from "../data";
import Logo from "./Logo";

export default function Etapas() {
  const [act, setAct] = useState(0);
  const s = STAGES[act];
  const color = SEV[act];
  return (
    <section className="trail-sec" id="etapas">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">As 7 etapas · interativo</span>
          <h2>Percorra a trilha FAST</h2>
          <p>Toque em uma etapa para ver os sinais, as ações práticas e o profissional indicado.</p>
        </div>

        <div className="trail" role="tablist" aria-label="Etapas da escala FAST">
          <div className="trail-line" aria-hidden="true" />
          {STAGES.map((st, i) => (
            <button
              key={i}
              className={"node" + (i === act ? " active" : "")}
              role="tab"
              aria-selected={i === act}
              aria-controls="painel-etapa"
              onClick={() => setAct(i)}
            >
              <span className="dot" style={{ background: SEV[i] }}>{st.n}</span>
              <span className="lab">{st.sev}</span>
            </button>
          ))}
        </div>

        <div className="detail" id="painel-etapa" role="tabpanel">
          <div className="detail-side" style={{ background: color }}>
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
                <ul>{s.sinais.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
              <div className="dblock">
                <h4>Ações do cuidador</h4>
                <ul>{s.acoes.map((x, i) => <li key={i}>{x}</li>)}</ul>
              </div>
            </div>
            {s.subs && (
              <div className="substages" aria-label="Subetapas">
                {s.subs.map((x, i) => <span className="sub" key={i}>{x}</span>)}
              </div>
            )}
            <span className="prof"><Logo size={18} /> {s.prof}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
