type Advice = { title: string; text: string };
type AdviceGroup = { id: string; title: string; intro?: string; items: Advice[]; image: string };

const GROUPS: AdviceGroup[] = [
  {
    id: "situacoes", title: "Coisas que podem acontecer",
    image: "/images/tips/level2-objetos.webp",
    items: [
      { title: "“Você pegou meu dinheiro.”", text: "Acolha a preocupação e proponha procurar junto com a pessoa, com calma. Evite discutir se ela esqueceu onde guardou." },
      { title: "“Você roubou minha joia.”", text: "Reconheça o valor afetivo do objeto, peça que ela o descreva e ajude na busca. Depois, combinem um lugar habitual para guardá-lo." },
      { title: "Esconde objetos e depois acusa alguém.", text: "Procure primeiro nos locais onde costuma guardar coisas e observe se há esconderijos recorrentes. Evite ridicularizar ou mexer em seus pertences às escondidas." },
      { title: "“Tem alguém entrando em casa.”", text: "Fique por perto, verifique o ambiente com ela e reduza sombras ou ruídos que possam causar medo. Não trate a sensação de perigo como invenção." },
      { title: "Acusa o companheiro de infidelidade.", text: "Responda com tranquilidade e ofereça companhia. Discussões para “provar” o contrário tendem a aumentar a tensão." },
      { title: "Diz à família que está sendo maltratada.", text: "Ouça a queixa com seriedade, observe o que pode ter causado desconforto e converse com a família sobre o ocorrido. Toda alegação de maus-tratos precisa ser examinada, mesmo quando a pessoa tem demência." },
      { title: "Tem medo de ser mandada para uma instituição.", text: "Explique o que acontecerá naquele momento e mantenha uma rotina previsível. Evite ameaças ou promessas sobre decisões que ainda não foram tomadas." },
      { title: "Não reconhece a filha ou outro familiar.", text: "Aproxime-se devagar, apresente-se pelo nome e mantenha um tom afetuoso. Não exija que ela se lembre de quem você é." },
    ],
  },
  {
    id: "comunicacao", title: "Comunicação e contato",
    image: "/images/tips/level1-vida-social.webp",
    intro: "Fale de modo simples, calmo e respeitoso. Diga uma coisa de cada vez, espere a pessoa reagir e acompanhe as palavras com presença e gestos. Acolha o sentimento sem confirmar algo que você não sabe se aconteceu, sem discutir para provar que ela está errada e sem fazer promessas que não pode cumprir.",
    items: [
      { title: "Não responde ou fala apenas palavras soltas:", text: "converse de frente, use frases curtas e dê tempo para a resposta. Observe também o olhar, os gestos e a expressão." },
      { title: "Repete sons ou parece não reagir:", text: "verifique possíveis desconfortos, como dor, frio ou necessidade de higiene. Continue oferecendo companhia, mesmo sem resposta evidente." },
      { title: "Não chama familiares pelo nome:", text: "apresente-se com naturalidade, sem testar sua memória. A voz familiar, a presença e a rotina ainda podem trazer segurança." },
      { title: "Evita o olhar ou se assusta com a aproximação:", text: "chegue devagar, pela frente, diga quem você é e avise antes de tocar." },
      { title: "Responde melhor ao toque ou à música:", text: "use essas formas de contato se forem bem recebidas, com volume baixo e sem excesso de estímulos. Verifique também possíveis dificuldades auditivas" },
    ],
  },
  {
    id: "alimentacao", title: "Alimentação",
    image: "/images/tips/level1-autonomia.webp",
    items: [
      { title: "Mantém o alimento na boca ou demora a engolir:", text: "ofereça a refeição com a pessoa sentada e espere a boca esvaziar antes de apresentar outra porção. Se isso se repetir, solicite avaliação fonoaudiológica." },
      { title: "Não abre a boca para comer:", text: "considere cansaço, dor ou desconforto na boca. Faça uma pausa e tente novamente mais tarde, sem forçar." },
      { title: "Tosse ao beber água:", text: "interrompa a oferta naquele momento e procure avaliação de deglutição. Não mude a consistência dos líquidos por conta própria, se a tosse ocorrer com frequência interrompe a oferta e procure o médico." },
      { title: "Não consegue usar o talher:", text: "adapte o prato e os utensílios e permita que participe da refeição tanto quanto conseguir. A escolha de alimentos para comer com as mãos deve considerar a segurança da deglutição." },
    ],
  },
  {
    id: "conforto", title: "Conforto corporal e higiene",
    image: "/images/mudanca-posicao.png",
    items: [
      { title: "Passa muito tempo na cama ou na poltrona:", text: "ajude a mudar de posição conforme suas necessidades e as orientações da equipe de saúde." },
      { title: "Apresenta vermelhidão nos pontos de apoio:", text: "alivie a pressão sobre o local e procure orientação da enfermagem. Não massageie a área avermelhada." },
      { title: "Não consegue dizer onde dói:", text: "observe caretas, choro, agitação ou resistência ao movimento e relate essas mudanças à equipe de saúde." },
      { title: "Mantém o corpo rígido ou as mãos fechadas:", text: "movimente apenas com orientação profissional, sem forçar. Observe se há feridas ou dificuldade para higienizar as mãos." },
      { title: "Fica agitado durante o cuidado íntimo:", text: "explique cada etapa, preserve sua privacidade e mantenha cobertas as partes do corpo que não estão sendo cuidadas." },
    ],
  },
  {
    id: "banho", title: "Orientações para o banho",
    image: "/images/tips/level6-higiene.webp",
    items: [
      { title: "Recusa o banho.", text: "Verifique se o banheiro está confortável, preserve a privacidade e convide a pessoa a participar do que conseguir fazer sozinha.Deixe a temperatura como habitual." },
      { title: "Afirma que já tomou banho.", text: "Evite confrontar sua lembrança. Apresente uma etapa simples, como trocar a roupa ou se refrescar, e conduza a atividade sem pressa." },
      { title: "Fica irritada ao tirar a roupa.", text: "Avise antes de tocar ou remover cada peça, mantenha o corpo coberto e respeite o que ela consegue fazer por conta própria." },
      { title: "Grita ou tenta bater durante o banho.", text: "Interrompa o banho, afaste-se o suficiente para manter todos em segurança e ofereça uma toalha. Retome a higiene em outro momento, sem usar força." },
      { title: "Tem medo da água na cabeça.", text: "Avise antes de molhar, ofereça um apoio firme e tente lavar o cabelo separadamente, com pouca água e no ritmo da pessoa, use uma caneca ou um recipiente pequeno, evite colocar embaixo do chuveiro." },
    ],
  },
];

const PHRASES = [
  ["Acusa alguém de pegar um objeto", "“Vejo que isso está preocupando você. Posso ajudar a procurar.”"],
  ["Não reconhece um familiar", "“Meu nome é Ana. Vou ficar aqui um pouco com você.”"],
  ["Está com medo", "“Estou perto de você. Vamos olhar o que está acontecendo?”"],
  ["Resiste ao banho ou à troca", "“Vou explicar o que farei e manter você coberto. Podemos começar devagar?”"],
  ["Quer sair de casa", "“Parece importante ir a esse lugar. Conte-me mais.”"],
  ["Acorda durante a noite", "“Ainda é noite. Estou aqui para ajudar você a se acomodar.”"],
  ["Já não consegue falar", "“Vou conversar com você e observar como está se sentindo. Não precisa responder.”"],
  ["Fica aflita durante o cuidado", "“Vou parar agora. Podemos tentar de outro jeito depois.”"],
];

function TopicCard({ group, phrases = false }: { group: AdviceGroup; phrases?: boolean }) {
  return (
    <details className="care-card" id={`cuidado-${group.id}`}>
      <summary>
        <img src={group.image} alt="" loading="lazy" decoding="async" />
        <span className="care-card-heading"><span className="care-card-title">{group.title}</span><span className="care-card-count">{group.items.length} {phrases ? "frases" : "orientações"}</span></span>
        <span className="care-card-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="care-card-content">
        {group.intro && <p className="care-intro">{group.intro}</p>}
        {group.id === "comunicacao" && (
          <aside className="care-caa">
            <span className="care-caa-label">CAA</span>
            <div><h4>Comunicação Aumentativa e Alternativa</h4>
              <p>A CAA reúne recursos que complementam ou apoiam a comunicação quando a fala ou a compreensão ficam mais difíceis. Pode envolver gestos, expressões, escrita, fotografias, figuras e pranchas. As formas de comunicação devem fazer sentido para a pessoa e podem ser combinadas; um fonoaudiólogo pode ajudar a escolher e adaptar os recursos.</p>
              <a href="https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/" target="_blank" rel="noreferrer">Saiba mais sobre CAA <span aria-hidden="true">↗</span></a>
            </div>
          </aside>
        )}
        <div className="care-detail-list">
          {group.items.map(item => (
            <article className="care-detail-row" key={item.title}>
              <h4>{item.title}</h4>
              {phrases && <span className="care-example-label">Exemplo de fala</span>}
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </details>
  );
}

export default function CuidadosEspeciais() {
  const phraseGroup: AdviceGroup = {
    id: "frases", title: "Frases que devem ser guardadas", image: "/images/tips/level4-listas-rotinas.webp",
    items: PHRASES.map(([title, text]) => ({ title, text })),
  };
  const topics = [...GROUPS, phraseGroup];

  return (
    <section className="care-sec" id="cuidados-especiais">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Cuidados especiais no dia a dia</h2>
        </div>

        <div className="care-grid care-topic-grid">
          {topics.map(topic => <TopicCard key={topic.id} group={topic} phrases={topic.id === "frases"} />)}
        </div>

        <aside className="care-alert" aria-label="Sinal de alerta">
          <span className="care-alert-icon" aria-hidden="true">!</span>
          <div><p>Sinal de alerta: uma piora que surge de repente não deve ser atribuída automaticamente à evolução da demência, ou seja, aquela situação pode ter piorado por uma situação clínica e não pela avanço da demência, por exemplo, ficar rebaixado, por uma infecção urinária.</p></div>
        </aside>

      </div>
    </section>
  );
}
