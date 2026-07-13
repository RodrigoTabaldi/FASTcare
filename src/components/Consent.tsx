import { useEffect, useState } from "react";

export default function Consent() {
  // o termo aparece sempre que o usuário entra no site, exigindo o aceite
  const [show, setShow] = useState(true);

  useEffect(() => {
    // permite reabrir o termo a qualquer momento (barra de aviso, links, etc.)
    const open = () => setShow(true);
    window.addEventListener("fastcare:abrir-aviso", open);
    return () => window.removeEventListener("fastcare:abrir-aviso", open);
  }, []);

  // bloqueia o scroll do fundo enquanto o aviso estiver aberto
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [show]);

  const accept = () => setShow(false);

  if (!show) return null;

  return (
    <div className="consent-overlay" role="dialog" aria-modal="true" aria-labelledby="consent-title">
      <div className="consent-card">
        <span className="consent-ic" aria-hidden="true">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5" /><path d="M12 7.5h.01" />
          </svg>
        </span>
        <span className="eyebrow">Aviso importante</span>
        <h2 id="consent-title">Conteúdo apenas educativo</h2>
        <p>
          As informações deste site têm caráter <strong>exclusivamente educativo e
          informativo</strong>. Não substituem avaliação, diagnóstico ou tratamento
          por profissionais de saúde.
        </p>
        <p>
          A orientação é <strong>sempre procurar um especialista</strong> diante de
          qualquer sinal, dúvida ou mudança no quadro da pessoa cuidada.
        </p>
        <button type="button" className="consent-btn" onClick={accept}>
          Entendi e aceito
        </button>
      </div>
    </div>
  );
}
