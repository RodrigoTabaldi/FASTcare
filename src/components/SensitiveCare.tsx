const GUIDES = [
  {
    icon: "R$", title: "Proteção financeira", stage: "Mais atenção a partir da FAST 3–4",
    points: ["Acompanhe contas e compras sem retirar a autonomia antes da hora.", "Ative alertas bancários e limite transações de maior risco.", "Guarde documentos e senhas com segurança; nunca compartilhe em formulários públicos.", "Diante de suspeita de abuso ou golpe, preserve registros e procure a rede de proteção."],
  },
  {
    icon: "✦", title: "Higiene com dignidade", stage: "Apoio frequente na FAST 5–6",
    points: ["Explique cada etapa antes de tocar e ofereça escolhas simples.", "Mantenha água morna, ambiente seguro, privacidade e itens ao alcance.", "Observe vermelhidão, feridas, dor, odor incomum ou mudança na urina e nas fezes.", "Na incontinência, troque roupas e proteção quando necessário e mantenha a pele limpa e seca."],
  },
  {
    icon: "24h", title: "Rotina e revezamento", stage: "Importante em todas as etapas",
    points: ["Registre medicação, alimentação, sono, eliminações e mudanças de comportamento.", "Defina contatos de emergência e quem pode assumir o cuidado.", "Divida tarefas e programe pausas reais para o cuidador principal.", "Leve o registro às consultas para facilitar decisões compartilhadas."],
  },
];

export default function SensitiveCare() {
  return (
    <section id="cuidados" className="sensitive-sec">
      <div className="wrap">
        <div className="sec-head reveal"><span className="eyebrow">Atividades delicadas</span><h2>Cuidar da segurança sem apagar a autonomia</h2><p>Finanças e higiene exigem apoio proporcional, consentimento, privacidade e revisão frequente das necessidades.</p></div>
        <div className="sensitive-grid">
          {GUIDES.map((guide) => <article className="sensitive-card reveal" key={guide.title}><span className="sensitive-icon" aria-hidden="true">{guide.icon}</span><h3>{guide.title}</h3><span className="care-stage mono">{guide.stage}</span><ul>{guide.points.map((point) => <li key={point}>{point}</li>)}</ul></article>)}
        </div>
        <p className="source-note">Orientações educativas baseadas nas Linhas de Cuidado para Demência e no Manual do Cuidador da Pessoa Idosa, do Governo Federal. Mudanças súbitas, lesões, suspeita de violência ou risco financeiro precisam de avaliação profissional.</p>
      </div>
    </section>
  );
}
