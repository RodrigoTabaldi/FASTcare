import { useEffect, useRef, useState } from "react";

const REDUCE =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion:reduce)").matches;

export function useReveal(): void {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (REDUCE || !("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
    // segurança: garante que nada fique invisível
    const t = window.setTimeout(() => {
      document.querySelectorAll(".reveal:not(.in)").forEach((e) => {
        const r = e.getBoundingClientRect();
        if (r.top < window.innerHeight) e.classList.add("in");
      });
    }, 1400);
    return () => { io.disconnect(); window.clearTimeout(t); };
  });
}

/** barra de progresso de scroll no topo */
export function useScrollProgress(): void {
  useEffect(() => {
    const bar = document.getElementById("progress");
    if (!bar) return;
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      bar.style.width = Math.min(100, p * 100) + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

/** conta de 0 até target quando entra na tela */
export function useCountUp(target: number, duration = 1400): [React.RefObject<HTMLSpanElement>, string] {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (REDUCE) { setVal(target); return; }
    let started = false;
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return [ref, String(val)];
}

/** observa quais seções estão visíveis e retorna o id ativo (scrollspy) */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => !!e);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (ents) => {
        ents.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.01 }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

/** copiar texto pro clipboard, com estado de "copiado" temporário */
export function useCopy(): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    });
  };
  return [copied, copy];
}
