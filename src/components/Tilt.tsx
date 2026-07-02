import { useRef, type ReactNode, type MouseEvent } from "react";

export default function Tilt({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion:reduce)").matches;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform =
      `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg) translateY(-4px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <div className="tilt" ref={ref} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </div>
  );
}
