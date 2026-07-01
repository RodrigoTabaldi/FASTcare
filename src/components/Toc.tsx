import { TOC } from "../data";
import { useActiveSection } from "../hooks";

export default function Toc() {
  const ids = TOC.map((t) => t.id);
  const active = useActiveSection(ids);
  return (
    <nav className="toc" aria-label="Sumário do documento">
      <span className="toc-title mono">Sumário</span>
      <ul>
        {TOC.map((t, i) => (
          <li key={t.id} className={active === t.id ? "on" : ""} style={{ transitionDelay: i * 40 + "ms" }}>
            <a href={"#" + t.id}>
              <span className="toc-num mono">{String(i + 1).padStart(2, "0")}</span>
              {t.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
