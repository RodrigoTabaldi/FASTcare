import { useCopy } from "../hooks";

const ANO = new Date().getFullYear();
const ABNT = `FASTCARE. Escala FAST: identificação e etapas da demência. Material educativo digital. ${ANO}. Baseado em: REISBERG, B. Functional Assessment Staging (FAST). Psychopharmacology Bulletin, 1988.`;
const APA = `FastCare. (${ANO}). Escala FAST: identificação e etapas da demência [Material educativo digital]. Baseado em Reisberg (1988).`;

export default function Citacao() {
  const [copiedA, copyA] = useCopy();
  const [copiedB, copyB] = useCopy();
  return (
    <section id="citacao">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Referenciamento acadêmico</span>
          <h2>Como citar este material</h2>
          <p>Use uma das normas abaixo para referenciar o FastCare em trabalhos, aulas ou materiais de apoio.</p>
        </div>
        <div className="cite-grid">
          <div className="cite-box reveal">
            <span className="cite-label mono">ABNT</span>
            <p>{ABNT}</p>
            <button className="cite-copy" onClick={() => copyA(ABNT)}>
              {copiedA ? "✓ Copiado" : "Copiar referência"}
            </button>
          </div>
          <div className="cite-box reveal" style={{ transitionDelay: "100ms" }}>
            <span className="cite-label mono">APA</span>
            <p>{APA}</p>
            <button className="cite-copy" onClick={() => copyB(APA)}>
              {copiedB ? "✓ Copiado" : "Copiar referência"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
