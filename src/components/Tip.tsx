import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import type { TipCard } from "../data";

/** ilustrações (cenas) grandes que representam cada dica de forma clara */
function TipScene({ name }: { name: string }) {
  const svg = {
    viewBox: "0 0 320 150", width: "100%", height: "100%",
    preserveAspectRatio: "xMidYMid slice", "aria-hidden": true,
  };

  // Para dicas com imagens reais (em vez de SVG), carregar imagens PNG
  const imageIcons: Record<string, string> = {
    bed: "/images/mudanca-posicao.png",
    routine: "/images/rotina-visual.png",
  };

  if (imageIcons[name]) {
    return (
      <img
        src={imageIcons[name]}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "12px", display: "block" }}
      />
    );
  }

  switch (name) {
    // Organização de objetos → chaves, óculos e carteira numa caixa junto à porta
    case "keys":
      return (
        <svg {...svg}>
          <rect width="320" height="150" fill="#E7F1EF" />
          <rect x="14" y="16" width="74" height="118" rx="5" fill="#D3E6E2" />
          <rect x="22" y="24" width="58" height="102" rx="4" fill="#C2DAD5" />
          <circle cx="72" cy="82" r="3.5" fill="#0D3B66" />
          {/* prateleira / caixa identificada */}
          <rect x="104" y="90" width="160" height="46" rx="7" fill="#0D3B66" />
          <rect x="104" y="90" width="160" height="15" rx="7" fill="#13518C" />
          <rect x="116" y="112" width="46" height="18" rx="3" fill="#C9A227" />
          <line x1="123" y1="121" x2="155" y2="121" stroke="#0D3B66" strokeWidth="2.5" strokeLinecap="round" />
          {/* chave pendurada */}
          <line x1="150" y1="34" x2="150" y2="58" stroke="#8C6D12" strokeWidth="3" strokeLinecap="round" />
          <circle cx="150" cy="68" r="9" fill="none" stroke="#C9A227" strokeWidth="5" />
          <rect x="147" y="74" width="6" height="24" rx="2" fill="#C9A227" />
          <rect x="147" y="90" width="13" height="5" rx="2" fill="#C9A227" />
          {/* óculos */}
          <g stroke="#1FA39A" strokeWidth="4" fill="none">
            <circle cx="196" cy="66" r="11" />
            <circle cx="224" cy="66" r="11" />
            <path d="M207 66h6" strokeLinecap="round" />
          </g>
          {/* carteira */}
          <rect x="242" y="52" width="42" height="28" rx="4" fill="#8E1F3D" />
          <rect x="242" y="59" width="42" height="6" fill="#6f1730" />
          <circle cx="275" cy="70" r="3.2" fill="#C9A227" />
        </svg>
      );
    // Dificuldade para lembrar nomes → duas pessoas conversando e crachá de nome
    case "people":
      return (
        <svg {...svg}>
          <rect width="320" height="150" fill="#E9F0FA" />
          <circle cx="64" cy="92" r="21" fill="#E7B491" />
          <path d="M32 150a32 30 0 0 1 64 0z" fill="#1FA39A" />
          <circle cx="256" cy="92" r="21" fill="#E7B491" />
          <path d="M224 150a32 30 0 0 1 64 0z" fill="#0D3B66" />
          {/* balão de fala com crachá de nome */}
          <rect x="112" y="30" width="96" height="52" rx="13" fill="#fff" stroke="#0D3B66" strokeWidth="2.5" />
          <path d="M150 82l-6 16 24-16z" fill="#fff" stroke="#0D3B66" strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="124" y="44" width="72" height="24" rx="4" fill="#C9A227" />
          <circle cx="136" cy="56" r="6" fill="#fff" />
          <line x1="148" y1="52" x2="188" y2="52" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <line x1="148" y1="61" x2="180" y2="61" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    // Mudança de posição → pessoa deitada com travesseiro e setas de rotação
    case "bed":
      return (
        <svg {...svg}>
          <rect width="320" height="150" fill="#E7F1EF" />
          <rect x="44" y="60" width="16" height="70" rx="5" fill="#13518C" />
          <rect x="256" y="82" width="16" height="48" rx="5" fill="#13518C" />
          <rect x="52" y="86" width="212" height="44" rx="9" fill="#0D3B66" />
          <rect x="66" y="80" width="52" height="26" rx="7" fill="#fff" />
          <circle cx="92" cy="93" r="13" fill="#E7B491" />
          <rect x="120" y="98" width="132" height="20" rx="8" fill="#1FA39A" />
          {/* setas de rotação (reposicionar) */}
          <g fill="none" stroke="#C9A227" strokeWidth="4.5" strokeLinecap="round">
            <path d="M150 40a26 20 0 0 1 40 4" />
          </g>
          <path d="M192 30l2 18-18-4z" fill="#C9A227" />
        </svg>
      );
    // Tosse durante a alimentação → pessoa sentada à mesa com prato e copo, tossindo
    case "cough":
      return (
        <svg {...svg}>
          <rect width="320" height="150" fill="#FBEDE8" />
          {/* mesa */}
          <rect x="150" y="112" width="158" height="10" rx="3" fill="#8C6D12" />
          <rect x="176" y="122" width="8" height="26" fill="#8C6D12" />
          <rect x="272" y="122" width="8" height="26" fill="#8C6D12" />
          {/* prato */}
          <ellipse cx="212" cy="112" rx="36" ry="9" fill="#fff" stroke="#E3E9F2" strokeWidth="2" />
          <ellipse cx="212" cy="111" rx="19" ry="4.5" fill="#E9F0FA" />
          {/* copo */}
          <rect x="258" y="90" width="27" height="22" rx="3" fill="#1FA39A" />
          <path d="M285 94h6a5 5 0 0 1 0 11h-4" fill="none" stroke="#1FA39A" strokeWidth="3" />
          {/* pessoa sentada */}
          <circle cx="88" cy="72" r="23" fill="#E7B491" />
          <path d="M52 138a36 32 0 0 1 72 0z" fill="#0D3B66" />
          <ellipse cx="112" cy="84" rx="9" ry="7" fill="#E0A883" />
          {/* marcas de tosse */}
          <g stroke="#C0392B" strokeWidth="4.5" fill="none" strokeLinecap="round">
            <path d="M124 60c6 0 6 7 13 7" />
            <path d="M126 74c6 0 6 7 13 7" />
            <path d="M128 88c5 0 5 6 11 6" />
          </g>
        </svg>
      );
    // Rotina visual do dia → quadro com cartões de atividades (acordar, refeição, lazer, dormir)
    case "routine":
      return (
        <svg {...svg}>
          <rect width="320" height="150" fill="#EEF2F6" />
          {/* acordar (sol) */}
          <rect x="20" y="34" width="60" height="82" rx="8" fill="#F6E3A0" />
          <circle cx="50" cy="74" r="12" fill="#E0A21C" />
          <g stroke="#E0A21C" strokeWidth="3" strokeLinecap="round">
            <path d="M50 54v-6M50 100v-6M28 74h-6M78 74h6M35 59l-4-4M65 59l4-4" />
          </g>
          {/* refeição (prato + garfo) */}
          <rect x="90" y="34" width="60" height="82" rx="8" fill="#CDE7CF" />
          <ellipse cx="122" cy="78" rx="20" ry="9" fill="#fff" stroke="#9FC8A2" strokeWidth="2" />
          <ellipse cx="122" cy="77" rx="10" ry="4" fill="#E2534A" />
          <path d="M103 62v14M141 62v14" stroke="#5C7519" strokeWidth="3" strokeLinecap="round" />
          {/* lazer (livro aberto) */}
          <rect x="160" y="34" width="60" height="82" rx="8" fill="#C2E6E2" />
          <path d="M190 62c-8-5-18-5-24 0v22c6-5 16-5 24 0 8-5 18-5 24 0V62c-6-5-16-5-24 0z" fill="#fff" stroke="#0C7169" strokeWidth="2" />
          <path d="M190 62v22" stroke="#0C7169" strokeWidth="2" />
          {/* dormir (lua + estrelas) */}
          <rect x="230" y="34" width="60" height="82" rx="8" fill="#14355C" />
          <path d="M266 62a14 14 0 1 0 8 20 11 11 0 0 1-8-20z" fill="#F6E3A0" />
          <circle cx="248" cy="60" r="1.6" fill="#F6E3A0" />
          <circle cx="278" cy="98" r="1.6" fill="#F6E3A0" />
        </svg>
      );
    // Cuidados paliativos e conforto → coração acolhido por mãos (cuidado e presença)
    case "comfort":
      return (
        <svg {...svg}>
          <rect width="320" height="150" fill="#EDEFF8" />
          <circle cx="94" cy="42" r="3" fill="#C9A227" opacity=".6" />
          <circle cx="228" cy="48" r="3" fill="#1FA39A" opacity=".6" />
          <path d="M160 26v9M156 30h8" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" />
          {/* coração */}
          <path d="M160 54c-10-15-33-9-33 8 0 16 21 27 33 37 12-10 33-21 33-37 0-17-23-23-33-8z" fill="#8E1F3D" />
          {/* mãos em concha */}
          <path d="M92 150c0-28 22-42 68-42s68 14 68 42z" fill="#E7B491" />
          <path d="M92 150c0-28 22-42 68-42s68 14 68 42" fill="none" stroke="#D2966E" strokeWidth="2.5" />
          <path d="M132 128q28 -12 56 0" fill="none" stroke="#D2966E" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Tip({ card }: { card: TipCard }) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<CSSProperties>({});

  // posiciona o balão preso ao viewport: abaixo do gatilho ou, se não couber, acima
  useLayoutEffect(() => {
    if (!open) return;
    const W = Math.min(380, window.innerWidth - 24);
    // 1ª passada: define a largura fora da tela para medir a altura real
    setPos({ position: "fixed", top: -9999, left: 0, width: W });
    const raf = requestAnimationFrame(() => {
      const btn = btnRef.current, pop = popRef.current;
      if (!btn || !pop) return;
      const r = btn.getBoundingClientRect();
      const h = pop.offsetHeight;
      const left = Math.max(12, Math.min(r.left + r.width / 2 - W / 2, window.innerWidth - W - 12));
      let top = r.bottom + 10;
      if (top + h > window.innerHeight - 12) {
        const above = r.top - h - 10;
        top = above >= 12 ? above : Math.max(12, window.innerHeight - h - 12);
      }
      setPos({ position: "fixed", top, left, width: W });
    });
    return () => cancelAnimationFrame(raf);
  }, [open]);

  // fecha ao clicar fora, rolar ou apertar Esc
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (
        !popRef.current?.contains(e.target as Node) &&
        !btnRef.current?.contains(e.target as Node)
      ) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onScroll = () => setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [open]);

  return (
    <span className="tip">
      <button
        ref={btnRef}
        type="button"
        className={"tip-btn" + (open ? " on" : "")}
        aria-expanded={open}
        aria-label={"Ver dica: " + card.title}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" /><path d="M12 7.5h.01" />
        </svg>
      </button>

      {open && (
        <div ref={popRef} className="tip-pop" role="dialog" aria-label={card.title} style={pos}>
          <button type="button" className="tip-close" aria-label="Fechar dica" onClick={() => setOpen(false)}>×</button>
          <div className="tip-illus"><TipScene name={card.icon} /></div>
          <div className="tip-text">
            <strong>{card.title}</strong>
            <p>{card.body}</p>
            <p className="tip-foot">Orientação educativa — procure sempre um profissional de saúde.</p>
          </div>
        </div>
      )}
    </span>
  );
}
