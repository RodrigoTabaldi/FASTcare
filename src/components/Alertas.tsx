interface Item { t: string; d: string; }

const items: Item[] = [
  { t: "Quedas frequentes", d: "Tropeços ou quedas repetidas, especialmente com confusão associada." },
  { t: "Não reconhece familiares", d: "Mudança súbita na capacidade de reconhecer pessoas próximas." },
  { t: "Recusa alimentar persistente", d: "Parar de comer ou beber, ou engasgos frequentes ao se alimentar." },
  { t: "Agitação ou agressividade nova", d: "Mudança brusca de comportamento, agitação intensa ou alucinações." },
  { t: "Confusão súbita (delirium)", d: "Piora rápida da consciência em horas ou dias — pode ser infecção." },
  { t: "Feridas de pressão", d: "Lesões na pele em pessoas acamadas exigem cuidado imediato." },
];

export default function Alertas() {
  return (
    <section className="warn-sec" id="recursos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Sinais que pedem ajuda agora</span>
          <h2>Quando procurar atendimento sem esperar</h2>
          <p>Algumas mudanças exigem avaliação médica imediata,
            independentemente da etapa FAST.</p>
        </div>
        <div className="warn-grid">
          {items.map((it, i) => (
            <div className="warn-item reveal" key={i} style={{ transitionDelay: i * 60 + "ms" }}>
              <span className="b">
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"
                    fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p><strong>{it.t}.</strong> {it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
