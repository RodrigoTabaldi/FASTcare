import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <div className="disc-bar">
        <div className="wrap">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 5v6m0 4h.01"
              fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Conteúdo educativo e informativo. Não substitui avaliação, diagnóstico ou tratamento por profissionais de saúde.
        </div>
      </div>
      <footer className="site">
        <div className="wrap fgrid">
          <div>
            <a className="brand" href="#topo" style={{ color: "var(--paper)", marginBottom: 14, display: "inline-flex" }}>
              <Logo color="var(--paper)" /> FastCare
            </a>
            <p className="ref" style={{ maxWidth: "40ch" }}>
              Guia de orientação sobre as 7 etapas da escala FAST para cuidadores
              e familiares de idosos com suspeita de demência.
            </p>
          </div>
          <div>
            <h4>Navegar</h4>
            <a href="#escala">A escala FAST</a>
            <a href="#etapas">As 7 etapas</a>
            <a href="#autoteste">Checklist de sinais</a>
            <a href="#recursos">Sinais de alerta</a>
          </div>
          <div>
            <h4>Referências</h4>
            <p className="ref">
              Reisberg B. Functional Assessment Staging (FAST).<br />
              <a href="https://pubmed.ncbi.nlm.nih.gov/1504288/" target="_blank" rel="noopener">pubmed.ncbi.nlm.nih.gov/1504288</a><br />
              Avante Nestlé — apoio ao cuidador.<br />
              <a href="https://www.avantenestle.com.br/" target="_blank" rel="noopener">avantenestle.com.br</a>
            </p>
          </div>
        </div>
        <div className="wrap copy">
          <span>© {new Date().getFullYear()} FastCare · Projeto educativo</span>
          <span className="mono">FAST · REISBERG ET AL. · 7 ETAPAS</span>
        </div>
      </footer>
    </>
  );
}
