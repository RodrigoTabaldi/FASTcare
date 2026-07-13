import { useState } from "react";
import { GLOSSARY } from "../data";

export default function Glossario() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="gloss-sec" id="glossario">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Glossário acadêmico</span>
          <h2>Termos técnicos usados neste material</h2>
          <p>Vocabulário de apoio para leitura clínica e acadêmica dos conteúdos sobre demência e escala FAST.</p>
        </div>
        <div className="gloss-list reveal">
          {GLOSSARY.map((g, i) => (
            <div className={"gloss-item" + (open === i ? " open" : "")} key={i}>
              <button className="gloss-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span className="gloss-term">{g.term}</span>
                <span className="gloss-plus" aria-hidden="true">{open === i ? "–" : "+"}</span>
              </button>
              <div className="gloss-a"><p>{g.def}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
