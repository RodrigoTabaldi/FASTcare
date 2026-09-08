const ITEMS = [
  "FAST 1 · Adulto normal", "FAST 2 · Esquecimento subjetivo", "FAST 3 · Déficit precoce",
  "FAST 4 · Demência leve", "FAST 5 · Demência moderada", "FAST 6 · Moderadamente grave",
  "FAST 7 · Demência grave", "Reisberg et al.",
];
export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {row.map((t, i) => (
          <span key={i}><b>◆</b> {t}</span>
        ))}
      </div>
    </div>
  );
}
