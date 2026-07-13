export const SEV = [
  "#1FA39A", "#3FAE6F", "#8FB23A", "#D9A521", "#E07A1F", "#C8451E", "#8E1F3D",
] as const;

/** cor de texto com contraste AA sobre cada cor de severidade */
export const SEV_ON = [
  "#FFFFFF", "#07223F", "#07223F", "#07223F", "#07223F", "#FFFFFF", "#FFFFFF",
] as const;

/** variante escura de cada severidade, segura para texto sobre fundo claro */
export const SEV_TEXT = [
  "#0C7169", "#1E7A48", "#5C7519", "#8A650C", "#A4540E", "#A33517", "#8E1F3D",
] as const;

export interface Stage {
  n: number;
  sev: string;
  title: string;
  desc: string;
  sinais: string[];
  acoes: string[];
  prof: string;
  subs?: string[];
}

export const STAGES: Stage[] = [
  {
    n: 1, sev: "Sem comprometimento", title: "Adulto normal",
    desc: "Funcionamento cognitivo preservado. Nenhum déficit objetivo ou subjetivo no dia a dia.",
    sinais: ["Memória e raciocínio normais", "Autonomia total nas atividades", "Sem queixas de esquecimento"],
    acoes: ["Manter atividade física e social", "Estimular leitura e aprendizado", "Acompanhamento de rotina"],
    prof: "Clínico geral / médico da família",
  },
  {
    n: 2, sev: "Esquecimento subjetivo", title: "Alterações associadas à idade",
    desc: "Queixas leves de esquecimento, compatíveis com o envelhecimento normal. Não interferem na vida funcional.",
    sinais: ["Esquece onde deixou objetos", "Dificuldade em lembrar nomes", "Percebe a própria falha"],
    acoes: ["Usar agendas e lembretes", "Rotina previsível", "Observar e registrar mudanças"],
    prof: "Clínico geral / geriatra",
  },
  {
    n: 3, sev: "Déficit precoce", title: "Comprometimento em tarefas complexas",
    desc: "Primeiros déficits detectáveis em situações de maior exigência: trabalho, viagens, organização.",
    sinais: ["Erra em tarefas complexas no trabalho", "Perde-se em locais desconhecidos", "Dificuldade de concentração"],
    acoes: ["Reduzir demandas complexas", "Buscar avaliação cognitiva formal", "Apoio em finanças e agenda"],
    prof: "Geriatra / neurologista",
  },
  {
    n: 4, sev: "Demência leve", title: "Dificuldade em tarefas instrumentais",
    desc: "Falhas claras em atividades instrumentais: lidar com dinheiro, compras, planejar refeições.",
    sinais: ["Dificuldade com finanças e contas", "Erros ao fazer compras", "Esquece eventos recentes"],
    acoes: ["Supervisionar dinheiro e remédios", "Listas e rotinas simples", "Iniciar plano de cuidados"],
    prof: "Neurologista / geriatra",
  },
  {
    n: 5, sev: "Demência moderada", title: "Precisa de ajuda para escolher roupas",
    desc: "Não consegue selecionar vestuário adequado à ocasião ou ao clima sem orientação.",
    sinais: ["Escolhe roupa inadequada ao clima", "Confusão com datas e lugares", "Precisa de lembretes para se vestir"],
    acoes: ["Separar roupas por dia", "Ambiente seguro e sinalizado", "Apoio domiciliar de cuidador"],
    prof: "Equipe multiprofissional + cuidador",
  },
  {
    n: 6, sev: "Moderadamente grave", title: "Ajuda nas atividades básicas",
    desc: "Necessita de auxílio para vestir-se, tomar banho e na higiene. Pode surgir incontinência.",
    sinais: ["Dificuldade para vestir-se sozinho", "Necessita ajuda no banho", "Incontinência urinária e/ou fecal"],
    acoes: ["Rotina de higiene assistida", "Prevenir quedas e lesões de pele", "Apoio emocional ao cuidador"],
    prof: "Enfermagem + cuidador + geriatra",
    subs: ["6a · vestir", "6b · banho", "6c · higiene", "6d · incont. urinária", "6e · incont. fecal"],
  },
  {
    n: 7, sev: "Demência grave", title: "Perda da fala e da mobilidade",
    desc: "Estágio mais avançado: redução progressiva da fala, da marcha e do controle motor.",
    sinais: ["Vocabulário muito limitado ou ausente", "Perda da capacidade de andar e sentar", "Perda do sorriso e do controle da cabeça"],
    acoes: ["Cuidados paliativos e conforto", "Prevenir úlceras e aspiração", "Nutrição e hidratação assistidas"],
    prof: "Cuidados paliativos + equipe completa",
    subs: ["7a · ~6 palavras", "7b · 1 palavra", "7c · não anda", "7d · não senta", "7e · não sorri", "7f · sem controle cefálico"],
  },
];

/** dicas práticas exibidas em balões clicáveis dentro das etapas.
 *  a chave é o texto exato do sinal/ação ao qual a dica se associa. */
export interface TipCard { icon: string; title: string; body: string; }
export const TIPS: Record<string, TipCard> = {
  "Esquece onde deixou objetos": {
    icon: "keys",
    title: "Organização de objetos",
    body: "Mantenha objetos de uso diário (como chaves, carteira e óculos) sempre no mesmo local, de preferência em uma caixa identificada próxima à entrada da casa. Criar essa rotina ajuda a reduzir esquecimentos e facilita a localização dos objetos.",
  },
  "Dificuldade em lembrar nomes": {
    icon: "people",
    title: "Dificuldade para lembrar nomes",
    body: "Quando esquecer o nome de uma pessoa, tente fazer associações (por exemplo, com o nome de um familiar ou de uma pessoa famosa). Se não lembrar o nome de um objeto, descreva sua função (ex.: “aquilo que usamos para escrever” em vez de “caneta”). Essas estratégias ajudam a estimular a memória e a comunicação.",
  },
  "Prevenir úlceras e aspiração": {
    icon: "bed",
    title: "Mudança de posição",
    body: "Mude a posição do idoso com frequência (cerca de cada 2 horas) para evitar feridas na pele. Use travesseiros ou almofadas para aliviar os pontos de pressão e mantenha a pele sempre limpa e seca. Sempre que possível, movimente braços e pernas com cuidado e incentive o idoso a participar dos movimentos. Se notar feridas, dor ou dificuldade nas transferências, procure um profissional de saúde.",
  },
  "Nutrição e hidratação assistidas": {
    icon: "cough",
    title: "Tosse durante a alimentação",
    body: "Se a pessoa começar a tossir com frequência ao comer ou beber, mantenha-a sempre sentada e evite oferecer líquidos até uma avaliação. Se houver febre, perda de apetite ou piora dos sintomas, procure atendimento de um profissional de saúde o quanto antes.",
  },
  "Cuidados paliativos e conforto": {
    icon: "comfort",
    title: "Cuidados paliativos e conforto",
    body: "O mais importante é manter o idoso confortável e sem sofrimento. Deixe o ambiente calmo, cuide da higiene com delicadeza e ofereça alimentos e líquidos apenas se for seguro engolir. Mesmo sem resposta, fale com carinho e esteja presente. Se houver dor, falta de ar, agitação ou muito desconforto, procure a equipe de saúde para orientar o melhor cuidado.",
  },
  "Rotina previsível": {
    icon: "routine",
    title: "Rotina visual do dia",
    body: "Use quadros com imagens grandes e coloridas mostrando as atividades do dia (acordar, café, higiene, refeições, lazer e dormir) para que o idoso acompanhe visualmente e se sinta orientado. Aponte para as imagens ao explicar o que acontecerá a seguir, comunicando-se com clareza e paciência.",
  },
};

export interface Symptom { t: string; w: number; }
export const SYMPTOMS: Symptom[] = [
  { t: "Repete a mesma pergunta", w: 1 },
  { t: "Esquece compromissos recentes", w: 1 },
  { t: "Dificuldade com dinheiro e contas", w: 2 },
  { t: "Perde-se em lugares conhecidos", w: 2 },
  { t: "Troca/escolhe roupa inadequada", w: 2 },
  { t: "Precisa de ajuda para o banho", w: 3 },
  { t: "Episódios de incontinência", w: 3 },
  { t: "Fala muito reduzida", w: 3 },
  { t: "Dificuldade para andar", w: 3 },
  { t: "Mudança de humor ou agitação", w: 1 },
];

export interface GlossaryTerm { term: string; def: string; }
export const GLOSSARY: GlossaryTerm[] = [
  { term: "FAST", def: "Functional Assessment Staging Tool — escala que classifica a demência em 7 etapas funcionais, criada por Barry Reisberg." },
  { term: "Demência", def: "Síndrome clínica caracterizada por declínio cognitivo progressivo que compromete a autonomia funcional." },
  { term: "AVD instrumentais", def: "Atividades de vida diária mais complexas — finanças, compras, uso de telefone e transporte." },
  { term: "AVD básicas", def: "Atividades essenciais de autocuidado — vestir-se, banhar-se, alimentar-se e higiene pessoal." },
  { term: "Cuidados paliativos", def: "Abordagem que prioriza conforto, dignidade e qualidade de vida em etapas avançadas de doença." },
  { term: "Delirium", def: "Confusão mental aguda e flutuante, de início súbito — frequentemente sinal de urgência clínica." },
  { term: "Geriatra", def: "Médico especializado no diagnóstico e tratamento de doenças em pessoas idosas." },
  { term: "Cuidador", def: "Pessoa responsável pelo suporte diário a alguém com limitação funcional ou cognitiva." },
];

export interface TocItem { id: string; label: string; }
export const TOC: TocItem[] = [
  { id: "topo", label: "Início" },
  { id: "escala", label: "Sobre a escala" },
  { id: "etapas", label: "As 7 etapas" },
  { id: "autoteste", label: "Checklist" },
  { id: "recursos", label: "Sinais de alerta" },
  { id: "glossario", label: "Glossário" },
  { id: "citacao", label: "Como citar" },
];
