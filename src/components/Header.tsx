import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#escala", label: "A escala" },
  { href: "#etapas", label: "As 7 etapas" },
  { href: "#autoteste", label: "Checklist" },
  { href: "#recursos", label: "Sinais de alerta" },
  { href: "#glossario", label: "Glossário" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site">
      <div className="wrap nav">
        <a className="brand" href="#topo"><Logo /> FastCare</a>
        <nav className="navlinks" aria-label="Principal">
          {LINKS.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <a className="nav-cta" href="#etapas">Explorar etapas</a>
        <button
          className="burger"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="burger-lines" aria-hidden="true"><i /><i /><i /></span>
        </button>
      </div>
      <nav
        id="menu-mobile"
        className={"mobile-nav" + (open ? " open" : "")}
        aria-label="Menu principal (celular)"
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}
