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
        <div className="bibliography reveal">
          <h3>Referências bibliográficas</h3>
          <ol>
            <li>REISBERG, B. Functional assessment staging (FAST). <em>Psychopharmacology Bulletin</em>, v. 24, n. 4, p. 653–659, 1988. <a href="https://pubmed.ncbi.nlm.nih.gov/3249767/" target="_blank" rel="noopener noreferrer">Consultar no PubMed ↗</a></li>
            <li>SCLAN, S. G.; REISBERG, B. Functional assessment staging (FAST) in Alzheimer's disease: reliability, validity, and ordinality. <em>International Psychogeriatrics</em>, v. 4, supl. 1, p. 55–69, 1992. <a href="https://pubmed.ncbi.nlm.nih.gov/1504288/" target="_blank" rel="noopener noreferrer">Consultar no PubMed ↗</a></li>
            <li>WORLD HEALTH ORGANIZATION. <em>Palliative care</em>. 2020. <a href="https://www.who.int/en/news-room/fact-sheets/detail/palliative-care" target="_blank" rel="noopener noreferrer">Consultar na OMS ↗</a></li>
            <li>AMERICAN SPEECH-LANGUAGE-HEARING ASSOCIATION. <em>Augmentative and Alternative Communication (AAC)</em>. Practice Portal. <a href="https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/" target="_blank" rel="noopener noreferrer">Consultar na ASHA ↗</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}
