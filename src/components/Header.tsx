import Logo from "./Logo";

export default function Header() {
  return (
    <header className="site">
      <div className="wrap nav">
        <a className="brand" href="#topo"><Logo /> FastCare</a>
        <nav className="navlinks" aria-label="Principal">
          <a href="#escala">A escala</a>
          <a href="#etapas">As 7 etapas</a>
          <a href="#autoteste">Sinais de alerta</a>
          <a href="#recursos">Recursos</a>
        </nav>
        <a className="nav-cta" href="#etapas">Explorar etapas</a>
        <button
          className="burger"
          aria-label="Abrir menu"
          onClick={() => document.getElementById("etapas")?.scrollIntoView({ behavior: "smooth" })}
        >
          <Logo size={22} />
        </button>
      </div>
    </header>
  );
}
