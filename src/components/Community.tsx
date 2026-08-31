const ACTIONS = [
  { title: "Círculo de apoio", text: "Convide familiares e pessoas de confiança para dividir tarefas, contatos e períodos de descanso.", action: "Montar rede de apoio" },
  { title: "Encontro com propósito", text: "Combine um encontro breve e recorrente para trocar experiências sem expor dados da pessoa cuidada.", action: "Criar lembrete mensal" },
  { title: "Apoio perto de você", text: "Pergunte à UBS sobre grupos de cuidadores, assistência social e associações locais de Alzheimer.", action: "Preparar perguntas" },
];

export default function Community() {
  const download = (title: string, body: string) => {
    const text = `${title}\n\n${body}\n\nPróximo passo:\nResponsável:\nData:\n`;
    const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a"); link.href = url; link.download = "fastcare-plano-de-apoio.txt"; link.click(); URL.revokeObjectURL(url);
  };
  return (
    <section id="comunidade" className="community-sec"><div className="wrap"><div className="sec-head reveal"><span className="eyebrow">Cuidado compartilhado</span><h2>Uma comunidade ativa começa com vínculos seguros</h2><p>Transforme informação em apoio recorrente — preservando a privacidade e respeitando os limites de quem cuida.</p></div><div className="community-grid">{ACTIONS.map((item) => <article className="community-card reveal" key={item.title}><h3>{item.title}</h3><p>{item.text}</p><button type="button" onClick={() => download(item.title, item.text)}>{item.action} ↓</button></article>)}</div><aside className="privacy-callout">Nunca publique nomes completos, diagnósticos, documentos, endereços, imagens ou rotinas que permitam identificar a pessoa cuidada.</aside></div></section>
  );
}
