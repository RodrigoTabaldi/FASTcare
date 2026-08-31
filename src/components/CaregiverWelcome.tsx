import { useEffect, useState, type FormEvent } from "react";

const STORAGE_KEY = "fastcare:cuidador";

export default function CaregiverWelcome() {
  const [name, setName] = useState("");
  const [draft, setDraft] = useState("");

  useEffect(() => {
    setName(window.localStorage.getItem(STORAGE_KEY) ?? "");
  }, []);

  const save = (event: FormEvent) => {
    event.preventDefault();
    const safeName = draft.trim().slice(0, 40);
    if (!safeName) return;
    window.localStorage.setItem(STORAGE_KEY, safeName);
    setName(safeName);
    setDraft("");
  };

  const clear = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setName("");
  };

  return (
    <section className="welcome" aria-labelledby="welcome-title">
      <div className="wrap welcome-card reveal">
        <div>
          <span className="eyebrow">Para quem cuida</span>
          <h2 id="welcome-title">{name ? `Olá, ${name}. Este espaço também cuida de você.` : "Informação prática para cuidadores de pessoas com demência"}</h2>
          <p>Feito principalmente para familiares e cuidadores de pessoas idosas com demência. Use o guia para observar mudanças, organizar a rotina e conversar com a equipe de saúde.</p>
        </div>
        {name ? (
          <button className="text-button" type="button" onClick={clear}>Não usar meu nome</button>
        ) : (
          <form className="caregiver-form" onSubmit={save}>
            <label htmlFor="caregiver-name">Como podemos chamar você? <span>(opcional)</span></label>
            <div><input id="caregiver-name" value={draft} maxLength={40} autoComplete="given-name" onChange={(e) => setDraft(e.target.value)} placeholder="Seu primeiro nome" /><button type="submit">Salvar neste aparelho</button></div>
            <small>O nome fica somente neste navegador e pode ser apagado a qualquer momento.</small>
          </form>
        )}
      </div>
    </section>
  );
}
