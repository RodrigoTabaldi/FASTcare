import { useCopy } from "../hooks";

const ANO = new Date().getFullYear();
const ABNT = `FASTCARE. Escala FAST: identificação e etapas da demência. Material educativo digital. ${ANO}. Baseado em: REISBERG, B. Functional Assessment Staging (FAST). Psychopharmacology Bulletin, 1988.`;
const APA = `FastCare. (${ANO}). Escala FAST: identificação e etapas da demência [Material educativo digital]. Baseado em Reisberg (1988).`;

const REFERENCES = [
  {
    topic: "Escala FAST e evolução da demência",
    items: [
      { citation: "REISBERG, B. Functional assessment staging (FAST). Psychopharmacology Bulletin, v. 24, n. 4, p. 653–659, 1988.", url: "https://pubmed.ncbi.nlm.nih.gov/3249767/" },
      { citation: "SCLAN, S. G.; REISBERG, B. Functional assessment staging (FAST) in Alzheimer's disease: reliability, validity, and ordinality. International Psychogeriatrics, v. 4, supl. 1, p. 55–69, 1992.", url: "https://pubmed.ncbi.nlm.nih.gov/1504288/" },
      { citation: "BRUCKI, S. M. D. et al. Manejo das demências em fase avançada: recomendações do Departamento Científico de Neurologia Cognitiva e do Envelhecimento da Academia Brasileira de Neurologia. Dementia & Neuropsychologia, v. 16, n. 3, supl. 1, p. 101–120, 2022.", url: "https://doi.org/10.1590/1980-5764-DN-2022-S107PT" },
    ],
  },
  {
    topic: "Cuidados paliativos e decisões compartilhadas",
    items: [
      { citation: "VAN DER STEEN, J. T. et al. White paper defining optimal palliative care in older people with dementia: a Delphi study and recommendations from the European Association for Palliative Care. Palliative Medicine, v. 28, n. 3, p. 197–209, 2014.", url: "https://pure.amsterdamumc.nl/en/publications/white-paper-defining-optimal-palliative-care-in-older-people-with/" },
      { citation: "WESTON, F. C. L. et al. Percepções dos cuidadores sobre os cuidados de fim de vida no Brasil: revisão sistemática qualitativa. Revista Brasileira de Enfermagem, v. 79, e20250220, 2026.", url: "https://doi.org/10.1590/0034-7167-2025-0220pt" },
      { citation: "WORLD HEALTH ORGANIZATION. Palliative care. 2020.", url: "https://www.who.int/en/news-room/fact-sheets/detail/palliative-care" },
    ],
  },
  {
    topic: "Comunicação e dificuldade para se expressar",
    items: [
      { citation: "SILVA, C. L. M. et al. Caracterização dos recursos de comunicação utilizados por pacientes em cuidados paliativos – revisão integrativa. Revista CEFAC, v. 19, n. 6, p. 879–888, 2017.", url: "https://doi.org/10.1590/1982-0216201719613816" },
      { citation: "FRIED-OKEN, M.; MOONEY, A.; PETERS, B. Supporting communication for patients with neurodegenerative disease. NeuroRehabilitation, v. 37, n. 1, p. 69–87, 2015.", url: "https://pubmed.ncbi.nlm.nih.gov/26409694/" },
      { citation: "DELFINO, L. L.; CACHIONI, M. Estratégias comunicativas de cuidadores de idosos com demência: uma revisão sistemática. Jornal Brasileiro de Psiquiatria, v. 65, n. 2, p. 186–195, 2016.", url: "https://www.scielo.br/j/jbpsiq/a/8q5hFkK5Z3t4YHTcMYtTpDF/" },
      { citation: "AMERICAN SPEECH-LANGUAGE-HEARING ASSOCIATION. Augmentative and Alternative Communication (AAC). Practice Portal.", url: "https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/" },
    ],
  },
  {
    topic: "Alimentação, hidratação e aspiração",
    items: [
      { citation: "SANTOS, B. S.; LIRA, J. O.; MANGILLI, L. D. Caracterização da deglutição de idosos com demência. CoDAS, v. 37, n. 3, e20230358, 2025.", url: "https://doi.org/10.1590/2317-1782/e20230358pt" },
      { citation: "ARAÚJO, R. C. P. et al. Desempenho da função de deglutição entre idosos com e sem queixas clínicas. CoDAS, v. 37, n. 2, e20240091, 2025.", url: "https://doi.org/10.1590/2317-1782/e20240091pt" },
      { citation: "FERREIRA, R. P.; ALVES, L. M.; MANGILLI, L. D. Associação entre risco de disfagia e sinais sugestivos de sarcopenia, estado nutricional e frequência de higiene oral em idosos hospitalizados. CoDAS, v. 36, n. 1, e20220232, 2024.", url: "https://doi.org/10.1590/2317-1782/20232022232pt" },
      { citation: "VOLKERT, D. et al. ESPEN guideline on nutrition and hydration in dementia – Update 2024. Clinical Nutrition, v. 43, p. 1599–1626, 2024.", url: "https://doi.org/10.1016/j.clnu.2024.04.039" },
      { citation: "ROBBINS, J. et al. Comparison of 2 interventions for liquid aspiration on pneumonia incidence: a randomized trial. Annals of Internal Medicine, v. 148, n. 7, p. 509–518, 2008.", url: "https://pubmed.ncbi.nlm.nih.gov/18378947/" },
    ],
  },
  {
    topic: "Prevenção de quedas e lesões de pele",
    items: [
      { citation: "MONTERO-ODASSO, M. et al. World guidelines for falls prevention and management for older adults: a global initiative. Age and Ageing, v. 51, n. 9, afac205, 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/36178003/" },
      { citation: "OLIVEIRA, M. C. N. et al. Estratégias adotadas pela equipe de enfermagem para prevenção de lesões por pressão em pessoas idosas hospitalizadas: revisão de escopo. Revista da Escola de Enfermagem da USP, v. 59, e20240362, 2025.", url: "https://www.scielo.br/j/reeusp/a/XGYsKgwVrtWpC3J9jm4qKDp/" },
      { citation: "LATIMER, S. L. et al. Repositioning for pressure injury prevention in adults. Cochrane Database of Systematic Reviews, n. 6, CD009958, 2026.", url: "https://pubmed.ncbi.nlm.nih.gov/42240176/" },
    ],
  },
  {
    topic: "Apoio emocional aos cuidadores e à família",
    items: [
      { citation: "LIVINGSTON, G. et al. Clinical effectiveness of the START (STrAtegies for RelaTives) psychological intervention for family carers and the effects on the cost of care for people with dementia: 6-year follow-up of a randomised controlled trial. The British Journal of Psychiatry, v. 216, n. 1, p. 35–42, 2020.", url: "https://pubmed.ncbi.nlm.nih.gov/31298169/" },
      { citation: "SILVA, P. V. C.; SILVA, C. M. P.; SILVEIRA, E. A. A. A família e o cuidado de pessoas idosas com doença de Alzheimer: revisão de escopo. Escola Anna Nery, v. 27, e20220313, 2023.", url: "https://scielo.br/j/ean/a/87hbjH87Xj9kWxcxhrPJJNs/" },
    ],
  },
];

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
          {REFERENCES.map((group) => (
            <div className="bibliography-group" key={group.topic}>
              <h4>{group.topic}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item.citation}>{item.citation} <a href={item.url} target="_blank" rel="noopener noreferrer">Consultar fonte ↗</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
