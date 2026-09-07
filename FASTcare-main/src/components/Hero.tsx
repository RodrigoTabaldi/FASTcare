import { SEV } from "../data";
import { useCountUp } from "../hooks";

function Stat({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const [ref, val] = useCountUp(target);
  return (
    <div className="stat">
      <div className="n"><span ref={ref}>{val}</span>{suffix}</div>
      <div className="l">{label}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="topo">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">Functional Assessment Staging · Reisberg</span>
          <h1>Entender a demência, <em>uma etapa</em> de cada vez.</h1>
          <p className="hero-lead">
            FastCare organiza a escala FAST em 7 etapas claras para ajudar
            cuidadores e familiares a reconhecer sinais, agir no momento certo
            e cuidar com mais segurança de idosos com suspeita de demência.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#etapas">Conhecer as 7 etapas →</a>
            <a className="btn btn-ghost" href="#autoteste">Ver sinais de alerta</a>
          </div>
          <div className="hero-stats">
            <Stat target={7} label="etapas funcionais" />
            <Stat target={11} label="sinais avaliados" />
            <Stat target={1982} label="escala validada por Reisberg" />
          </div>
        </div>
        <div className="emblem">
          <div className="emblem-card">
            <span className="corner tl" /><span className="corner tr" />
            <span className="corner bl" /><span className="corner br" />
            <svg width="78%" viewBox="0 0 200 200" aria-hidden="true">
              <g className="ring-spin" style={{ transformOrigin: "100px 100px" }}>
                {SEV.map((c, i) => (
                  <circle key={i} cx="100" cy="100" r={30 + i * 11} fill="none" stroke={c}
                    strokeWidth="3.4" strokeDasharray="6 10" strokeLinecap="round" opacity=".9" />
                ))}
              </g>
              <g className="ring-spin rev" style={{ transformOrigin: "100px 100px" }}>
                <circle cx="100" cy="100" r="34" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeDasharray="3 7" />
              </g>
              <circle cx="100" cy="100" r="28" fill="var(--tinta)" />
              <circle cx="100" cy="100" r="28" fill="none" stroke="var(--gold)" strokeWidth="2" />
              <text x="100" y="100" textAnchor="middle" dominantBaseline="central"
                fontFamily="Manrope, sans-serif" fontSize="20" letterSpacing="1.5"
                fill="#fff" fontWeight="800">FAST</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
