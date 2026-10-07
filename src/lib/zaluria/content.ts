export const chapters = [
  { id: "origem", label: "Origem" },
  { id: "fundacoes", label: "Fundações" },
  { id: "constituicao", label: "Carta" },
  { id: "forcas", label: "Forças" },
  { id: "hino", label: "Hino" },
  { id: "eras", label: "Milênio" },
  { id: "ritual", label: "Ritual" },
  { id: "cosmos", label: "Cosmos" },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];

export const pillars = [
  {
    id: "estado",
    title: "Estado enxuto",
    kicker: "Política",
    body: "Parlamento mínimo. Político ganha pelo PIB, emprego e queda do crime. Se o território encolhe, o salário cai. Sem privilégio, sem assessoria inflada, sem mandato como carreira eterna.",
  },
  {
    id: "lei",
    title: "Teto de bom senso",
    kicker: "Justiça",
    body: "A lei vale o que está escrito. Sem filosofia para esvaziar o texto. Crime grave: prisão perpétua, morte civil, trabalho obrigatório. Apologia a regimes totalitários é expulsão.",
  },
  {
    id: "territorio",
    title: "Território útil",
    kicker: "Economia",
    body: "Propriedade existe para produzir. Terra ociosa para especulação é taxada ou leiloada. Monopólio improdutivo é aberto à concorrência. Biodiversidade vital não é ociosidade — é infraestrutura climática.",
  },
  {
    id: "mega",
    title: "Megaestruturas",
    kicker: "Obra",
    body: "Poucas peças, escala máxima: megahospitais, trens-bala, usinas nucleares, dessalinização da costa. Construídas por elite técnica para durar séculos. Quem assina a obra responde com a honra.",
  },
  {
    id: "codigo",
    title: "Código aberto",
    kicker: "Tecnologia",
    body: "A lição de Gabe Newell: compartilhar gera mais valor do que trancar. Engenharia reversa nacionaliza o que o mundo já descobriu. Nada crítico roda em caixa-preta estrangeira.",
  },
  {
    id: "biologia",
    title: "Carne restaurada",
    kicker: "Saúde",
    body: "Transplante biológico com células-tronco do próprio paciente. Bioimpressão de órgãos. Paralisia tratada para devolver vida útil. Ninguém vira custo permanente se o corpo puder ser consertado.",
  },
  {
    id: "mente",
    title: "Mente limpa",
    kicker: "Cultura",
    body: "Entretenimento só usa psicologia se desenvolver o humano. Sem feed infinito, sem caixa de loot, sem dopamina de cassino. Informação de ponta é pública. Sabotar com ela é alta traição.",
  },
  {
    id: "honra",
    title: "Honra geracional",
    kicker: "Povo",
    body: "Absorção voluntária, história preservada, línguas ensinadas. Filhos dos distritos absorvidos viram a força do país, não o calcanhar. Idoso serve na medida da capacidade. Vulnerável recebe teto e cesta — nunca dinheiro solto.",
  },
];

export const articles = [
  {
    n: "01",
    title: "Soberania e expansão",
    body: "União baseada no território útil. Expansão cirúrgica e voluntária por plebiscito distrital — sem guerra de atrito.",
  },
  {
    n: "02",
    title: "Identidade e idioma",
    body: "História, folclore e língua de cada distrito são protegidos. Educação universal em programação e múltiplos idiomas. Ninguém fica de fora da conversa.",
  },
  {
    n: "03",
    title: "Bom senso penal",
    body: "Leis literais. Crime grave: prisão perpétua e perda de cidadania. Apologia totalitária: prisão e extradição.",
  },
  {
    n: "04",
    title: "Gestão por desempenho",
    body: "Classe política no mínimo. Remuneração atada a PIB real, emprego e queda da criminalidade.",
  },
  {
    n: "05",
    title: "Três forças",
    body: "Defesa Territorial, Guarda Constitucional e Segurança Científica. Autônomas. Uma vigia a outra. Armas servem à carta, nunca a um homem.",
  },
  {
    n: "06",
    title: "Infraestrutura e átomo",
    body: "Megahospitais, trens-bala, usinas nucleares, costa limpa e dessalinizada. Tecnologia estratégica em código aberto, impulsionada por engenharia reversa.",
  },
  {
    n: "07",
    title: "Prontidão e inclusão",
    body: "Todo cidadão apto treina combate. Deficiência não é descarte: formação técnica de elite em dados, cibernética e controle — mesmo status de honra.",
  },
];

export const forces = [
  {
    id: "territorial",
    name: "Defesa Territorial",
    motto: "Nem um centímetro inseguro, nem um céu aberto.",
    domain: "Ar, mar, subsolo e rotas.",
    emblem: "Espada alada",
    body: "Protege a fronteira física e as linhas de exportação. Controle aéreo, frota submarina, mapeamento do subsolo. Dissuasão — não guerra de desgaste.",
  },
  {
    id: "guarda",
    name: "Guarda Constitucional",
    motto: "O que está escrito é sagrado; o que desvia é destruído.",
    domain: "Linha ética do poder.",
    emblem: "Pergaminho de titânio",
    body: "Única função: impedir que político, juiz ou general dobre a carta. Fraude de meta, desvio, interpretação filosófica da lei — destituição imediata.",
  },
  {
    id: "cientifica",
    name: "Segurança Científica",
    motto: "A verdade no código, a dignidade no sangue.",
    domain: "Ordem urbana e auditoria.",
    emblem: "Âncora e tridente",
    body: "Crime civil, perícia, satélite ambiental, código das redes. Garante que salário por desempenho não seja maquiado e que a biologia nos megahospitais sirva ao cidadão.",
  },
];

export const anthem = {
  title: "A Voz do Titânio e do Sangue",
  verses: [
    {
      label: "I · Escudo de ferro",
      force: "Defesa Territorial",
      lines: [
        "Do vácuo do espaço às entranhas do chão,",
        "Vigilante é o braço que guarda o portal.",
        "Nenhuma centelha de audácia estrangeira",
        "Romperá o escudo da nossa fronteira.",
        "Erguemos o aço, domamos o ar,",
        "Zalúria é o forte que ninguém vai dobrar.",
      ],
    },
    {
      label: "II · Linha do texto",
      force: "Guarda Constitucional",
      lines: [
        "No papel de titânio a verdade está escrita,",
        "A lei é literal, o bom senso dita.",
        "Olhos atentos sobre os que governam,",
        "Para que os parasitas jamais retornem.",
        "Se a mão vacilar ou o crime tentar,",
        "A Guarda da Linha vai o trono quebrar.",
      ],
    },
    {
      label: "III · Força biológica",
      force: "Segurança Científica",
      lines: [
        "O código é livre, a mente é sã,",
        "Forjando a carne do amanhã.",
        "Da célula-tronco ao mar purificado,",
        "O corpo e a terra serão restaurados.",
        "Com a mente limpa do vício da tela,",
        "Caminha o humano na glória mais bela.",
      ],
    },
  ],
  chorus: [
    "Zalúria eterna. De pedra e de texto.",
    "A meta nos guia, o suor é o nosso nexo.",
    "Quem planta o futuro na terra ou no espaço,",
    "Garante o império sob o mesmo abraço.",
    "Sem dívida ou medo, com honra e com vigor,",
    "Nossa luz é o átomo, nossa força é o valor.",
  ],
};

export const eras = [
  {
    id: "i-ii",
    century: "Séculos I–II",
    title: "O efeito vitrine",
    image: "/images/city.jpg",
    points: [
      "A matriz retém 100% da riqueza. Contraste com a inflação e a violência dos vizinhos vira atração, não invasão.",
      "Energia nuclear, internet durável e trens-bala cruzam a fronteira por convite.",
      "Províncias votam em plebiscito distrital. Elites antigas caem. Museus guardam a história de quem entra.",
    ],
  },
  {
    id: "iii-v",
    century: "Séculos III–V",
    title: "Escudo tridimensional",
    image: "/images/library.jpg",
    points: [
      "Superávit crônico financia subsolo, céu e mar profundo.",
      "Bibliotecas centrais imprimem todo o código e a ciência em papel de titânio — backup contra EMP e guerra digital.",
      "Geoengenharia dissipando ciclone no oceano. Enchente vira aquífero. O clima do território útil deixa de ser loteria.",
    ],
  },
  {
    id: "vi-viii",
    century: "Séculos VI–VIII",
    title: "Transbordo",
    image: "/images/ark.jpg",
    points: [
      "População treinada em hipergravidade. Ossos densos, coração de ferro.",
      "Ônibus espaciais reutilizáveis sobem e descem como metrô. Na órbita, arcas quilométricas com reator e biblioteca física.",
      "Longevidade biológica. O excesso populacional não satura o planeta — é exportado.",
    ],
  },
  {
    id: "ix-x",
    century: "Séculos IX–X",
    title: "Civilização perene",
    image: "/images/coast.jpg",
    points: [
      "Colônias fundadas com o mesmo átomo, o mesmo código aberto, o mesmo teto de bom senso.",
      "Pontes de repetidores nucleares no vácuo. O império não se fragmenta pela distância.",
      "Star lifting no Sol: matéria extraída, estrela desacelerada, combustível infinito para a próxima linha.",
    ],
  },
];

export const vocations = [
  {
    id: "operador",
    title: "Operador de átomo",
    shift: "Usina · turno contínuo",
    day: "Monitora o reator que alimenta dessalinização, trens e a rede livre. Um erro não é opinião — é crime contra a segurança nacional. Mentoria dos mais velhos no fim do turno.",
  },
  {
    id: "codigo",
    title: "Desenvolvedor aberto",
    shift: "Laboratório de reversa",
    day: "Desmonta o que o mundo já inventou, publica a base, constrói a versão que dura. Lucro vem de melhoria real, não de produto que quebra em três anos.",
  },
  {
    id: "guarda",
    title: "Guarda da linha",
    shift: "Corregedoria",
    day: "Audita as metas que pagam o político. Se o número foi maquiado, a carta manda destituir. Não governa. Impede o governo de sair do texto.",
  },
  {
    id: "bio",
    title: "Cirurgião biológico",
    shift: "Megahospital",
    day: "Imprime órgão com as células do paciente. Devolve marcha a quem estava na cesta. Cada alta é PIB — e o salário do gestor sobe com isso, não com discurso.",
  },
  {
    id: "costa",
    title: "Operador da costa",
    shift: "Limpeza e salmoura",
    day: "Máquinas varrem a praia, dessalinizam, extraem sal e minerais. Turismo e agro bebem da mesma linha. Honra pública para quem mantém o mar intacto.",
  },
  {
    id: "arca",
    title: "Tripulante da arca",
    shift: "Órbita baixa",
    day: "Recebe os ônibus, calibra gravidade da nave-mãe, replica a biblioteca em texto no núcleo. A comunicação com a Terra não pode falhar — senão o império vira ilha.",
  },
];

export const originFacts = [
  {
    label: "PIB de partida",
    value: "R$ 1,4 tri",
    note: "Paraná, Santa Catarina e Rio Grande do Sul somados — maior que Chile ou Colômbia isolados.",
  },
  {
    label: "Alimento",
    value: "Superávit",
    note: "Cerca de 35% dos grãos do Brasil. SC e PR lideram aves e suínos. RS produz ~70% do arroz nacional.",
  },
  {
    label: "Indústria",
    value: "Pronta",
    note: "WEG, Tupy, polo automotivo, Taurus, startups em Florianópolis. Base para reversa e código aberto.",
  },
  {
    label: "Energia",
    value: "Itaipu + átomo",
    note: "Ponto de partida hidrelétrico. Destino: nuclear estável, ocupando o mínimo de território útil.",
  },
];
