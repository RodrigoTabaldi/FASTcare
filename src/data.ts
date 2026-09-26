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
    n: 1, sev: "Sem comprometimento", title: "Adulto normal e sem comprometimento",
    desc: "Funcionamento cognitivo preservado. Nenhum déficit objetivo ou subjetivo no dia a dia.",
    sinais: ["Funcionamento Cognitivo Preservado", "Autonomia total nas atividades", "Ausência de lapso de memória"],
    acoes: ["Promoção da Vida Física e Social", "Estímulo à Leitura e Aprendizado", "Acompanhamento de rotina"],
    prof: "Clínico geral / médico da família",
  },
  {
    n: 2, sev: "Esquecimento normal da idade", title: "Esquecimento normal da idade",
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
    sinais: ["Dificuldade com finanças e contas", "Erros ao fazer compras", "Esquece eventos recentes", "Dificuldades motoras"],
    acoes: ["Supervisionar dinheiro e remédios", "Listas e rotinas simples", "Iniciar plano de cuidados", "Apoio nas dificuldades motoras"],
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
    acoes: ["Rotina de higiene assistida", "Recusa a troca da fralda", "Prevenir quedas e lesões de pele", "Apoio emocional ao cuidador"],
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
export interface TipCard { icon: string; title: string; body: string; image?: string; }
// Conteúdo transcrito do material enviado para todos os tópicos da escala.
export const TIPS: Record<string, TipCard> = {
  "Funcionamento Cognitivo Preservado": { icon: "people", title: "Funcionamento Cognitivo Preservado", body: "Recorda fatos facilmente, narra acontecimentos cotidianos com crítica e coerência, e identifica o nome de objetos inclusive os menos usuais." },
  "Autonomia total nas atividades": { icon: "routine", title: "Autonomia total nas atividades", body: "Gerência finanças, utiliza dispositivos digitais, aplicativos e se locomove sem qualquer limitação.", image: "/images/tips/level1-autonomia.webp" },
  "Ausência de lapso de memória": { icon: "people", title: "Ausência de lapso de memória", body: "Relata ter uma boa memória, sente confiança para assumir novos desafios e percebe que sua idade cronológica não limita seus pensamentos.", image: "/images/tips/level1-memoria.webp" },
  "Promoção da Vida Física e Social": { icon: "routine", title: "Promoção da Vida Física e Social", body: "Dica: Incluir a pessoa nas atividades de organização da casa, incentivar a rotina de exercícios corporais e o convívio comunitário como: Ofertar caminhadas no território, acompanhar atividades em centros de vivência.", image: "/images/tips/level1-vida-social.webp" },
  "Estímulo à Leitura e Aprendizado": { icon: "people", title: "Estímulo à Leitura e Aprendizado", body: "Dica: Ofertar jogos que estimulam o raciocínio e a memória executiva como sudoku e paciência, palavras cruzadas e conversação sobre temas de interesse da pessoa idosa.", image: "/images/tips/level1-aprendizado.webp" },
  "Acompanhamento de rotina": { icon: "routine", title: "Acompanhamento de rotina", body: "Dica: Ofertar apoio na organização da rotina, sem interferir na execução, estar atento se atividades que fazia bem, começa ter dificuldade, verificar se a audição está íntegra." },
  "Esquece onde deixou objetos": { icon: "keys", title: "Esquece onde deixou objetos", body: "(coloca objetos habituais em lugares diferentes, acredita que algo está em um lugar diferente do habitual)", image: "/images/tips/level2-objetos.webp" },
  "Dificuldade em lembrar nomes": { icon: "people", title: "Dificuldade em lembrar nomes", body: "esquece o nome das pessoas do dia a dia, esquece de pessoas novas que conheceu recentemente (a trocas de nomes são esperadas, por exemplo, trocar o nome dos netos)" },
  "Percebe a própria falha": { icon: "people", title: "Percebe a própria falha", body: "(reconhece que está esquecendo as coisas, começou usar estratégias para sanar as dificuldades por conta própria, pede ajuda, entende que funções do dia a dia estão mas difíceis, tem medos de coisas novas)", image: "/images/tips/level2-percebe-falha.webp" },
  "Usar agendas e lembretes": { icon: "routine", title: "Usar agendas e lembretes", body: "Dica: Organizar atividades por período do dia (manhã, tarde, noite); coloque em um papel as atividades da rotina e fora da rotina e fixe na geladeira; incentive que todos os dias tenha o hábito de olhar e programar o dia.", image: "/images/tips/level2-agendas.webp" },
  "Rotina previsível": { icon: "routine", title: "Rotina previsível", body: "Dica: Use quadros com imagens grandes e coloridas mostrando as atividades do dia (acordar, café, higiene, refeições, lazer e dormir) para que o idoso acompanhe visualmente e se sinta orientado. Aponte para as imagens ao explicar o que acontecerá a seguir, comunicando-se com clareza e paciência. *Orientação educativa: procure sempre um profissional de saúde." },
  "Observar e registrar mudanças": { icon: "people", title: "Observar e registrar mudanças", body: "Dica: Caso coisas habituais, como por exemplo, pagar contas, fique cada vez mais difícil, é importante entender a dificuldade e fazer roteiros para que continuem sendo feitas.", image: "/images/tips/level2-mudancas.webp" },
  "Erra em tarefas complexas no trabalho": { icon: "people", title: "Erra em tarefas complexas no trabalho", body: "(quando inicia uma atividade nova, não consegue compreender as etapas e fica irritado)", image: "/images/tips/level3-tarefas-complexas.webp" },
  "Perde-se em locais desconhecidos": { icon: "routine", title: "Perde-se em locais desconhecidos", body: "(em cinemas ou teatros, não consegue ir voltar ao banheiro, ou em lugares abertos, tem dificuldade em se localizar)", image: "/images/tips/level3-locais.webp" },
  "Dificuldade de concentração": { icon: "people", title: "Dificuldade de concentração", body: "(perde o foco nos assuntos durante uma conversa, ou comenta algo que não está relacionado ao assunto)" },
  "Reduzir demandas complexas": { icon: "routine", title: "Reduzir demandas complexas", body: "Dica: Não pedir que realize ações fora da rotina, evitar situações que envolvam conhecimento novos, por exemplo: cozinhar algo que nunca comeu.", image: "/images/tips/level3-reduzir-demandas.webp" },
  "Buscar avaliação cognitiva formal": { icon: "people", title: "Buscar avaliação cognitiva formal", body: "Dica: Se perceber que coisas que eram feitas sem dificuldade, começaram a ficar difíceis, uma orientação profissional é necessária para descartar o início de alguma doença. Relatar todos os sintomas na consulta é fundamental para que os profissionais envolvidos conheçam todas as habilidades e dificuldades." },
  "Apoio em finanças e agenda": { icon: "routine", title: "Apoio em finanças e agenda", body: "Dica: Fazer roteiros explicativos do “passo a passo” de cada ação, solicitar que após realizar a tarefa faça uma revisão em outro momento." },
  "Dificuldade com finanças e contas": { icon: "people", title: "Dificuldade com finanças e contas", body: "(não consegue fazer contas simples, não identifica o troco correto, erra valores da hora de fazer pagamentos, determina valores muito diferentes da realidade, esqueceu que já pagou uma conta, por exemplo, comprar uma revista por uma valor muito alto e achar normal)", image: "/images/tips/level4-financas.webp" },
  "Erros ao fazer compras": { icon: "routine", title: "Erros ao fazer compras", body: "(faz um lista de mercado e não compra os itens necessários, compra produtos que não são necessários ou que nunca usou)" },
  "Esquece eventos recentes": { icon: "people", title: "Esquece eventos recentes", body: "(participou de jantar com amigos, foi ao cinema, visitou um restaurante novo e não se recorda)" },
  "Dificuldades motoras": { icon: "routine", title: "Dificuldades motoras", body: "Perda de equilíbrio, dificuldades de movimentos, dificuldades de se locomover pela casa, esbarra em objetos familiares do ambiente.", image: "/images/tips/level4-motor.webp" },
  "Supervisionar dinheiro e remédios": { icon: "people", title: "Supervisionar dinheiro e remédios", body: "Dica: Fazer uma relação de todos os remédios e modo de uso em ambientes da casa de fácil acesso visual. Usar caixinhas com data e horário para armazenar os remédios; restringir o acesso a aplicativos de banco e limitar a quantidade de dinheiro para acesso. A autonomia deve ser mantida, mas com supervisão, ex.: pode pagar contas, mas limitar a quantidade e fazer checagem.", image: "/images/tips/level4-supervisao-financeira.webp" },
  "Listas e rotinas simples": { icon: "routine", title: "Listas e rotinas simples", body: "Dica: As tarefas deverão ser descritas de forma simples. Toda vez que incluir uma atividade nova na rotina, deve ser colocada em destaque e relembrada na véspera e no dia, se possível em vários momentos do dia se for necessário. A rotina pode ser feita em cartolina ou lousa, com desenhos e frases curtas e colocada na cozinha e no quarto; Usar o calendário para orientação de tempo e espaço, falando diariamente o dia, mês e ano e tentar associar com notícias que estão ocorrendo no mundo; Fazer também associação de mês e datas com datas comemorativas, por exemplo, dias da mães -> mês de maio, Natal -> em dezembro.", image: "/images/tips/level4-listas-rotinas.webp" },
  "Iniciar plano de cuidados": { icon: "people", title: "Iniciar plano de cuidados", body: "Dica: Supervisionar saídas, ter marcadores como alarmes para medicação, ou anotar se a quantidade de remédios correta está sendo tomada." },
  "Apoio nas dificuldades motoras": { icon: "routine", title: "Apoio nas dificuldades motoras", body: "Dica: Verificar se é possível andar em linha reta, colocar uma fita colorida no chão e pedir para caminhar sobre ela, retirar tapetes da casa, colocar barras de apoio em banheiros, afastar móveis muito próximos uns dos outros e aumentar o espaço de passagem.", image: "/images/tips/level4-apoio-motor.webp" },
  "Escolhe roupa inadequada ao clima": { icon: "routine", title: "Escolhe roupa inadequada ao clima", body: "(procura e coloca roupa em locais inadequados ex. geladeira; pega peças quentes em um dia de calor)", image: "/images/tips/level5-roupa-clima.webp" },
  "Confusão com datas e lugares": { icon: "people", title: "Confusão com datas e lugares", body: "(acredita que estamos em outro ano; fala do passado como se fosse atual; se perde no tempo, manhã, tarde e noite; pede para sair em horários inapropriados, ex. de madrugada)" },
  "Precisa de lembretes para se vestir": { icon: "people", title: "Precisa de lembretes para se vestir", body: "(sai do banho e não quer colocar as roupas; depois de evacuar se recusa a colocar a roupa íntima)", image: "/images/tips/level5-lembretes-roupa.webp" },
  "Separar roupas por dia": { icon: "routine", title: "Separar roupas por dia", body: "(não deixe todas as roupas no armário, deixe apenas a roupa que gostaria que a pessoa colocasse; separar por categorias (quente e frio), se não tiver espaço pode colocar em caixas identificadas em um local longe do quarto; já deixe as roupas separadas nas caixas de acordo com as estações do ano)", image: "/images/tips/level5-separar-roupas.webp" },
  "Ambiente seguro e sinalizado": { icon: "routine", title: "Ambiente seguro e sinalizado", body: "(tire as chaves das portas e deixe cópias guardadas em um local seguro; coloque fitas coloridas no chão marcando o caminho entre os principais cômodos da casa; coloque etiquetas nomeando cada ambiente e principais objetos, ex: cozinha, armário, quarto, cadeira)", image: "/images/tips/level5-ambiente-seguro.webp" },
  "Apoio domiciliar de cuidador": { icon: "people", title: "Apoio domiciliar de cuidador", body: "(busque cuidadores ou outros familiares para auxiliar no dia a dia, principalmente no final da tarde em que é possível apresentarem agitação ou agressividade; identifique os cuidadores e pessoas da rotina com fotos e nomes, sendo possível, coloque fotos em que estejam juntos para que seja familiar; crie escalas de rodízio entre os cuidadores para não ter sobrecarga)", image: "/images/tips/level5-apoio-cuidador.webp" },
  "Dificuldade para vestir-se sozinho": { icon: "people", title: "Dificuldade para vestir-se sozinho", body: "(coloca as peças de roupas em lugares errados, ex: cueca na cabeça, camisa na perna; não aceita a roupa que foi escolhida)", image: "/images/tips/level6-vestir.webp" },
  "Necessita ajuda no banho": { icon: "people", title: "Necessita ajuda no banho", body: "o banho pode gerar algumas dificuldades, clique aqui para acessar as orientações mais detalhadas) *LINK QUE LEVA PARA O ITEM DE AUTOCUIDADO E HIGIENE*", image: "/images/tips/level6-banho.webp" },
  "Incontinência urinária e/ou fecal": { icon: "people", title: "Incontinência urinária e/ou fecal", body: "(evacua nas calças; não avisa que quer ir ao banheiro; suja a roupa e não aceita ser limpo)" },
  "Rotina de higiene assistida": { icon: "people", title: "Rotina de higiene assistida", body: "ofereça uma peça limpa, familiar e confortável; evite comentários constrangedores sobre aparência ou odor; o uso de fralda pode ser necessário, se houver recusa, explique que é uma calcinha ou cueca diferente e moderna e que ajudará no seu conforto", image: "/images/tips/level6-higiene.webp" },
  "Recusa a troca da fralda": { icon: "people", title: "Recusa a troca da fralda", body: "(Feche a porta e deixe o ambiente seguro para que ninguém entre, é importante que a pessoa não fique envergonhado ou constrangido; ninguém se troca na frente de outras pessoas, por isso, explique cada passo e exponha apenas a região que precisa ser higienizada, preservando a intimidade; nunca faça a troca à força; usar uma boneca como exemplo pode ajudar)." },
  "Prevenir quedas e lesões de pele": { icon: "people", title: "Prevenir quedas e lesões de pele", body: "(se estiver acamado é fundamental que mude de posição a cada 4 horas, a fim de evitar feridas na pele (aqui colocar uma imagem das posições possíveis); use hidratantes no corpo diariamente, a pele pode ficar muito ressecada; tire todos os tapetes e obstáculos da casa; mantenha corredores acessíveis e livres; barras de proteção são fundamentais em vários ambientes; verifique com profissional a necessidade de uso de bengala, cadeira de rodas e outros dispositivos)." },
  "Apoio emocional ao cuidador": { icon: "people", title: "Apoio emocional ao cuidador", body: "(nesse momento a sobrecarga da pessoa que cuida aumenta de forma significativa, é fundamental pedir ajuda para os cuidadores, ter momentos de lazer, criar rotina de cuidado e rodízio entre os cuidadores, mas se a ansiedade e tristeza forem frequentes procure ajuda médica)" },
  "6a · vestir": { icon: "people", title: "6a · vestir", body: "não utilizar roupas e peças com botões e zíper, podem machucar ou abrir com facilidade; escolha roupas mais largas e confortáveis; faça em você primeiro para dar o modelo" },
  "6b · banho": { icon: "people", title: "6b · banho", body: "acessar item específico" },
  "6c · higiene": { icon: "people", title: "6c · higiene", body: "" },
  "6d · incont. urinária": { icon: "people", title: "6d · incont. urinária", body: "" },
  "6e · incont. fecal": { icon: "people", title: "6e · incont. fecal", body: "" },
  "7a · ~6 palavras": { icon: "people", title: "7a · ~6 palavras", body: "" },
  "7b · 1 palavra": { icon: "people", title: "7b · 1 palavra", body: "" },
  "7c · não anda": { icon: "people", title: "7c · não anda", body: "" },
  "7d · não senta": { icon: "people", title: "7d · não senta", body: "" },
  "7e · não sorri": { icon: "people", title: "7e · não sorri", body: "" },
  "7f · sem controle cefálico": { icon: "people", title: "7f · sem controle cefálico", body: "" },
  "Vocabulário muito limitado ou ausente": { icon: "people", title: "Vocabulário muito limitado ou ausente", body: "(não consegue se comunicar nem com frases simples; perda de compreensão em geral; deixa de conhecer as pessoas a sua volta; não inicia ou mantém diálogo)" },
  "Perda da capacidade de andar e sentar": { icon: "people", title: "Perda da capacidade de andar e sentar", body: "(não mantém apoio ao sentar-se, dificuldade para andar e ficar em pé mesmo que por pouco tempo, rigidez em pernas e braços)" },
  "Perda do sorriso e do controle da cabeça": { icon: "people", title: "Perda do sorriso e do controle da cabeça", body: "(mantém sempre a cabeça para baixo; não mantém contato de olho; fica com a mesma expressão a maior parte do tempo)" },
  "Cuidados paliativos e conforto": { icon: "people", title: "Cuidados paliativos e conforto", body: "(Utilizar tom de voz suave, toque afetivo e chamados pelo nome antes de qualquer manejo físico; criar um ambiente calmo, com iluminação natural adequada, controle de barulhos e temperatura agradável quando possível; incorporar elementos significativos da história de vida, como músicas calmas do interesse do paciente e aromas familiares; realizar movimentações delicadas nas articulações no momento do banho ou troca de roupas; oferecer escuta ativa e validação emocional ao cuidador e à família nesta fase." },
  "Prevenir úlceras e aspiração": { icon: "people", title: "Prevenir úlceras e aspiração", body: "(Implementar rotina de mudança de posição a cada 2 horas na cama e a cada 30–60 minutos na poltrona/sofá; utilizar almofadas pneumáticas, coxins de espuma e rolos posicionadores para aliviar a pressão; realizar as refeições e oferta de líquidos sempre em posição sentada ou com a cabeça elevada; realizar higiene da boca de forma frequente )." },
  "Nutrição e hidratação assistidas": { icon: "people", title: "Nutrição e hidratação assistidas", body: "(adequar a consistência dos alimentos, ex: pastosos, e de líquidos, ex: espesso, reduzindo o risco de engasgos; oferecer alimentos com contraste visual e em pratos coloridos que se destacam do alimento; não apressar as refeições; respeitar as pausas e identificar sinais de recusa, ex: fechar a boca, virar o rosto, evitando a oferta forçada." },
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
  { t: "Não reconhece cobranças, pagamentos ou troco", w: 2 },
  { t: "Fica vulnerável a golpes ou decisões financeiras inseguras", w: 2 },
  { t: "Precisa de lembretes ou ajuda para escovar os dentes e cuidar da higiene", w: 3 },
  { t: "Não consegue realizar higiene íntima sem apoio", w: 3 },
  { t: "Dificuldade para acompanhar uma conversa ou instrução simples", w: 1 },
  { t: "Dificuldade para organizar uma refeição ou atividade em etapas", w: 2 },
  { t: "Precisa de ajuda para escolher ou vestir roupas adequadas", w: 2 },
  { t: "Precisa de apoio para se levantar ou sentar", w: 3 },
  { t: "Evita sair ou precisa de acompanhamento em trajetos habituais", w: 2 },
  { t: "Não encontra palavras ou perde o fio da conversa com frequência", w: 2 },
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
  { id: "cuidados-especiais", label: "Cuidados especiais" },
  { id: "autoteste", label: "Checklist" },
  { id: "recursos", label: "Sinais de alerta" },
  { id: "glossario", label: "Glossário" },
  { id: "citacao", label: "Como citar" },
];
