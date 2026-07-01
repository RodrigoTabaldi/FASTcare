import type { ReactNode } from "react";
import Tilt from "./Tilt";

interface Item { t: string; d: string; ic: ReactNode; }

const items: Item[] = [
  {
    t: "O que é a FAST",
    d: "A Functional Assessment Staging Tool mede a demência pela perda funcional — o que a pessoa ainda consegue ou não fazer no dia a dia.",
    ic: <path d="M12 3v18M5 8l7-5 7 5M5 8v8l7 5 7-5V8" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    t: "Por que importa",
    d: "Saber a etapa orienta decisões práticas: nível de supervisão, segurança da casa e qual profissional procurar a cada momento.",
    ic: <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10z M9 11l2 2 4-4" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    t: "Como usar este guia",
    d: "Percorra a trilha das 7 etapas, leia os sinais e ações de cada uma e use o checklist de alerta para conversar com a equipe de saúde.",
    ic: <path d="M4 5h16M4 12h16M4 19h10" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" />,
  },
];

export default function Sobre() {
  return (
    <section id="escala">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">Sobre a escala</span>
          <h2>Uma régua funcional para um processo que muda com o tempo</h2>
          <p>A demência avança em etapas. A FAST traduz essa progressão em marcos observáveis,
            do funcionamento normal até os cuidados mais intensivos.</p>
        </div>
        <div className="cards">
          {items.map((it, i) => (
            <div className="reveal" key={i} style={{ transitionDelay: i * 90 + "ms" }}>
              <Tilt>
                <div className="card">
                  <span className="plate mono">{String(i + 1).padStart(2, "0")}</span>
                  <div className="ic"><svg width="26" height="26" viewBox="0 0 24 24">{it.ic}</svg></div>
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </div>
              </Tilt>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
