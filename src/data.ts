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
