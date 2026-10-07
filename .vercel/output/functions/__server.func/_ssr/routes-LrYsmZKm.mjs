import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LrYsmZKm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chapters = [
	{
		id: "origem",
		label: "Origem"
	},
	{
		id: "fundacoes",
		label: "Fundações"
	},
	{
		id: "constituicao",
		label: "Carta"
	},
	{
		id: "forcas",
		label: "Forças"
	},
	{
		id: "hino",
		label: "Hino"
	},
	{
		id: "eras",
		label: "Milênio"
	},
	{
		id: "ritual",
		label: "Ritual"
	},
	{
		id: "cosmos",
		label: "Cosmos"
	}
];
var pillars = [
	{
		id: "estado",
		title: "Estado enxuto",
		kicker: "Política",
		body: "Parlamento mínimo. Político ganha pelo PIB, emprego e queda do crime. Se o território encolhe, o salário cai. Sem privilégio, sem assessoria inflada, sem mandato como carreira eterna."
	},
	{
		id: "lei",
		title: "Teto de bom senso",
		kicker: "Justiça",
		body: "A lei vale o que está escrito. Sem filosofia para esvaziar o texto. Crime grave: prisão perpétua, morte civil, trabalho obrigatório. Apologia a regimes totalitários é expulsão."
	},
	{
		id: "territorio",
		title: "Território útil",
		kicker: "Economia",
		body: "Propriedade existe para produzir. Terra ociosa para especulação é taxada ou leiloada. Monopólio improdutivo é aberto à concorrência. Biodiversidade vital não é ociosidade — é infraestrutura climática."
	},
	{
		id: "mega",
		title: "Megaestruturas",
		kicker: "Obra",
		body: "Poucas peças, escala máxima: megahospitais, trens-bala, usinas nucleares, dessalinização da costa. Construídas por elite técnica para durar séculos. Quem assina a obra responde com a honra."
	},
	{
		id: "codigo",
		title: "Código aberto",
		kicker: "Tecnologia",
		body: "A lição de Gabe Newell: compartilhar gera mais valor do que trancar. Engenharia reversa nacionaliza o que o mundo já descobriu. Nada crítico roda em caixa-preta estrangeira."
	},
	{
		id: "biologia",
		title: "Carne restaurada",
		kicker: "Saúde",
		body: "Transplante biológico com células-tronco do próprio paciente. Bioimpressão de órgãos. Paralisia tratada para devolver vida útil. Ninguém vira custo permanente se o corpo puder ser consertado."
	},
	{
		id: "mente",
		title: "Mente limpa",
		kicker: "Cultura",
		body: "Entretenimento só usa psicologia se desenvolver o humano. Sem feed infinito, sem caixa de loot, sem dopamina de cassino. Informação de ponta é pública. Sabotar com ela é alta traição."
	},
	{
		id: "honra",
		title: "Honra geracional",
		kicker: "Povo",
		body: "Absorção voluntária, história preservada, línguas ensinadas. Filhos dos distritos absorvidos viram a força do país, não o calcanhar. Idoso serve na medida da capacidade. Vulnerável recebe teto e cesta — nunca dinheiro solto."
	}
];
var articles = [
	{
		n: "01",
		title: "Soberania e expansão",
		body: "União baseada no território útil. Expansão cirúrgica e voluntária por plebiscito distrital — sem guerra de atrito."
	},
	{
		n: "02",
		title: "Identidade e idioma",
		body: "História, folclore e língua de cada distrito são protegidos. Educação universal em programação e múltiplos idiomas. Ninguém fica de fora da conversa."
	},
	{
		n: "03",
		title: "Bom senso penal",
		body: "Leis literais. Crime grave: prisão perpétua e perda de cidadania. Apologia totalitária: prisão e extradição."
	},
	{
		n: "04",
		title: "Gestão por desempenho",
		body: "Classe política no mínimo. Remuneração atada a PIB real, emprego e queda da criminalidade."
	},
	{
		n: "05",
		title: "Três forças",
		body: "Defesa Territorial, Guarda Constitucional e Segurança Científica. Autônomas. Uma vigia a outra. Armas servem à carta, nunca a um homem."
	},
	{
		n: "06",
		title: "Infraestrutura e átomo",
		body: "Megahospitais, trens-bala, usinas nucleares, costa limpa e dessalinizada. Tecnologia estratégica em código aberto, impulsionada por engenharia reversa."
	},
	{
		n: "07",
		title: "Prontidão e inclusão",
		body: "Todo cidadão apto treina combate. Deficiência não é descarte: formação técnica de elite em dados, cibernética e controle — mesmo status de honra."
	}
];
var forces = [
	{
		id: "territorial",
		name: "Defesa Territorial",
		motto: "Nem um centímetro inseguro, nem um céu aberto.",
		domain: "Ar, mar, subsolo e rotas.",
		emblem: "Espada alada",
		body: "Protege a fronteira física e as linhas de exportação. Controle aéreo, frota submarina, mapeamento do subsolo. Dissuasão — não guerra de desgaste."
	},
	{
		id: "guarda",
		name: "Guarda Constitucional",
		motto: "O que está escrito é sagrado; o que desvia é destruído.",
		domain: "Linha ética do poder.",
		emblem: "Pergaminho de titânio",
		body: "Única função: impedir que político, juiz ou general dobre a carta. Fraude de meta, desvio, interpretação filosófica da lei — destituição imediata."
	},
	{
		id: "cientifica",
		name: "Segurança Científica",
		motto: "A verdade no código, a dignidade no sangue.",
		domain: "Ordem urbana e auditoria.",
		emblem: "Âncora e tridente",
		body: "Crime civil, perícia, satélite ambiental, código das redes. Garante que salário por desempenho não seja maquiado e que a biologia nos megahospitais sirva ao cidadão."
	}
];
var anthem = {
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
				"Zalúria é o forte que ninguém vai dobrar."
			]
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
				"A Guarda da Linha vai o trono quebrar."
			]
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
				"Caminha o humano na glória mais bela."
			]
		}
	],
	chorus: [
		"Zalúria eterna. De pedra e de texto.",
		"A meta nos guia, o suor é o nosso nexo.",
		"Quem planta o futuro na terra ou no espaço,",
		"Garante o império sob o mesmo abraço.",
		"Sem dívida ou medo, com honra e com vigor,",
		"Nossa luz é o átomo, nossa força é o valor."
	]
};
var eras = [
	{
		id: "i-ii",
		century: "Séculos I–II",
		title: "O efeito vitrine",
		image: "/images/city.jpg",
		points: [
			"A matriz retém 100% da riqueza. Contraste com a inflação e a violência dos vizinhos vira atração, não invasão.",
			"Energia nuclear, internet durável e trens-bala cruzam a fronteira por convite.",
			"Províncias votam em plebiscito distrital. Elites antigas caem. Museus guardam a história de quem entra."
		]
	},
	{
		id: "iii-v",
		century: "Séculos III–V",
		title: "Escudo tridimensional",
		image: "/images/library.jpg",
		points: [
			"Superávit crônico financia subsolo, céu e mar profundo.",
			"Bibliotecas centrais imprimem todo o código e a ciência em papel de titânio — backup contra EMP e guerra digital.",
			"Geoengenharia dissipando ciclone no oceano. Enchente vira aquífero. O clima do território útil deixa de ser loteria."
		]
	},
	{
		id: "vi-viii",
		century: "Séculos VI–VIII",
		title: "Transbordo",
		image: "/images/ark.jpg",
		points: [
			"População treinada em hipergravidade. Ossos densos, coração de ferro.",
			"Ônibus espaciais reutilizáveis sobem e descem como metrô. Na órbita, arcas quilométricas com reator e biblioteca física.",
			"Longevidade biológica. O excesso populacional não satura o planeta — é exportado."
		]
	},
	{
		id: "ix-x",
		century: "Séculos IX–X",
		title: "Civilização perene",
		image: "/images/coast.jpg",
		points: [
			"Colônias fundadas com o mesmo átomo, o mesmo código aberto, o mesmo teto de bom senso.",
			"Pontes de repetidores nucleares no vácuo. O império não se fragmenta pela distância.",
			"Star lifting no Sol: matéria extraída, estrela desacelerada, combustível infinito para a próxima linha."
		]
	}
];
var vocations = [
	{
		id: "operador",
		title: "Operador de átomo",
		shift: "Usina · turno contínuo",
		day: "Monitora o reator que alimenta dessalinização, trens e a rede livre. Um erro não é opinião — é crime contra a segurança nacional. Mentoria dos mais velhos no fim do turno."
	},
	{
		id: "codigo",
		title: "Desenvolvedor aberto",
		shift: "Laboratório de reversa",
		day: "Desmonta o que o mundo já inventou, publica a base, constrói a versão que dura. Lucro vem de melhoria real, não de produto que quebra em três anos."
	},
	{
		id: "guarda",
		title: "Guarda da linha",
		shift: "Corregedoria",
		day: "Audita as metas que pagam o político. Se o número foi maquiado, a carta manda destituir. Não governa. Impede o governo de sair do texto."
	},
	{
		id: "bio",
		title: "Cirurgião biológico",
		shift: "Megahospital",
		day: "Imprime órgão com as células do paciente. Devolve marcha a quem estava na cesta. Cada alta é PIB — e o salário do gestor sobe com isso, não com discurso."
	},
	{
		id: "costa",
		title: "Operador da costa",
		shift: "Limpeza e salmoura",
		day: "Máquinas varrem a praia, dessalinizam, extraem sal e minerais. Turismo e agro bebem da mesma linha. Honra pública para quem mantém o mar intacto."
	},
	{
		id: "arca",
		title: "Tripulante da arca",
		shift: "Órbita baixa",
		day: "Recebe os ônibus, calibra gravidade da nave-mãe, replica a biblioteca em texto no núcleo. A comunicação com a Terra não pode falhar — senão o império vira ilha."
	}
];
var originFacts = [
	{
		label: "PIB de partida",
		value: "R$ 1,4 tri",
		note: "Paraná, Santa Catarina e Rio Grande do Sul somados — maior que Chile ou Colômbia isolados."
	},
	{
		label: "Alimento",
		value: "Superávit",
		note: "Cerca de 35% dos grãos do Brasil. SC e PR lideram aves e suínos. RS produz ~70% do arroz nacional."
	},
	{
		label: "Indústria",
		value: "Pronta",
		note: "WEG, Tupy, polo automotivo, Taurus, startups em Florianópolis. Base para reversa e código aberto."
	},
	{
		label: "Energia",
		value: "Itaipu + átomo",
		note: "Ponto de partida hidrelétrico. Destino: nuclear estável, ocupando o mínimo de território útil."
	}
];
var STORAGE_KEY = "zaluria-citizen";
function persist(name, stamped) {
	if (typeof window === "undefined") return;
	if (!stamped) {
		window.localStorage.removeItem(STORAGE_KEY);
		return;
	}
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
		name,
		stamped
	}));
}
var useAtlas = create((set, get) => ({
	entered: false,
	chapter: "origem",
	citizenName: "",
	stamped: false,
	enter: () => set({ entered: true }),
	setChapter: (chapter) => set({ chapter }),
	setName: (citizenName) => set({
		citizenName,
		stamped: false
	}),
	stamp: () => {
		const name = get().citizenName.trim();
		if (!name) return;
		persist(name, true);
		set({
			stamped: true,
			citizenName: name
		});
	},
	resetStamp: () => {
		persist("", false);
		set({
			stamped: false,
			citizenName: ""
		});
	},
	hydrate: () => {
		if (typeof window === "undefined") return;
		try {
			const raw = window.localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const parsed = JSON.parse(raw);
			if (typeof parsed.name === "string" && parsed.stamped) set({
				citizenName: parsed.name,
				stamped: true
			});
		} catch {}
	}
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-display text-xs font-medium tracking-[0.28em] text-emerald uppercase",
		children
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-6", className),
		children
	});
}
function Button({ variant = "primary", className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-40", variant === "primary" && "bg-titanium text-cosmos hover:bg-ink", variant === "ghost" && "bg-transparent text-ink hover:bg-surface-2", variant === "line" && "bg-transparent text-titanium shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]", className),
		...props,
		children
	});
}
function Media({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		className: cn("media block h-full w-full object-cover", className)
	});
}
function OriginChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-6 lg:grid-cols-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Ponto de partida" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-3xl text-ink md:text-4xl",
						children: "A matriz já tinha músculo. Faltava o cérebro."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-prose text-muted",
						children: "O Sul não começaria do zero. Alimento de sobra, indústria metal-mecânica, portos, startups. O pacto federativo era o vazamento. Zalúria é o desenho de reter o lucro, cortar o dreno político e blindar o território — depois expandir só por conveniência, nunca por atrito."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-prose text-muted",
						children: "São Paulo, Rio e Minas entram na hipótese porque, no papel, perder o Sul deixa o Sudeste sozinho carregando o resto. A simulação não pede guerra. Pede um Estado que ninguém queira abandonar — e que vizinhos peçam para entrar."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: "/images/flag.jpg",
					alt: "Bandeira de Zalúria em salão escuro",
					className: "flag-frame w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4",
				children: originFacts.map((fact) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-titanium-dim uppercase",
							children: fact.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl text-titanium",
							children: fact.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: fact.note
						})
					]
				}) }, fact.label))
			})
		]
	});
}
function FoundationsChapter() {
	const [open, setOpen] = (0, import_react.useState)(pillars[0].id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Oito engrenagens" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl text-ink md:text-4xl",
			children: "Nada aqui é enfeite. Cada peça segura a outra."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-3 md:grid-cols-2",
			children: pillars.map((pillar) => {
				const active = open === pillar.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setOpen(pillar.id),
					className: cn("rounded-xl p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150", active ? "bg-surface-2 shadow-[var(--shadow-border-hover)]" : "bg-surface"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-emerald uppercase",
							children: pillar.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-display text-xl text-ink",
							children: pillar.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: cn("mt-2 text-sm leading-relaxed text-muted transition-opacity duration-200", active ? "opacity-100" : "line-clamp-2 opacity-80"),
							children: pillar.body
						})
					]
				}, pillar.id);
			})
		})
	] });
}
function ConstitutionChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Carta constitucional" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl text-ink md:text-4xl",
			children: "Sete artigos. Sem preâmbulo oco."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-8 grid gap-3",
			children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "grid gap-3 sm:grid-cols-12 sm:items-baseline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl text-titanium-dim sm:col-span-2",
					children: article.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-lg text-ink",
						children: article.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: article.body
					})]
				})]
			}) }, article.n))
		})
	] });
}
function ForcesChapter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Tripartição" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl text-ink md:text-4xl",
			children: "Três forças. Nenhuma manda sozinha."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-prose text-muted",
			children: "Político não comanda o fuzil. General não interpreta a lei. Cientista não governa. Cada braço veta o outro."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-4 lg:grid-cols-3",
			children: forces.map((force) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "flex h-full flex-col",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-titanium-dim uppercase",
						children: force.emblem
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-display text-xl text-ink",
						children: force.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-sm italic text-emerald",
						children: force.motto
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs tracking-wide text-titanium-dim uppercase",
						children: force.domain
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 flex-1 text-sm text-muted",
						children: force.body
					})
				]
			}, force.id))
		})
	] });
}
function AnthemChapter() {
	const [verse, setVerse] = (0, import_react.useState)(0);
	const current = anthem.verses[verse];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-8 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Hino nacional" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl text-ink md:text-4xl",
					children: anthem.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: "Três estrofes, uma por força. O refrão une o milênio. Sem herói político. Sem guerra de atrito."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-col gap-2",
					children: anthem.verses.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setVerse(i),
						className: cn("min-h-11 rounded-md px-4 py-2 text-left text-sm transition-colors duration-150", i === verse ? "bg-surface-2 text-ink" : "text-muted hover:text-ink"),
						children: item.label
					}, item.label))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-widest text-emerald uppercase",
					children: current.force
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2",
					children: current.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "font-display text-lg text-ink md:text-xl",
						children: line
					}, line))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-line pt-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-titanium-dim uppercase",
						children: "Refrão"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1",
						children: anthem.chorus.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-muted",
							children: line
						}, line))
					})]
				})
			]
		})]
	});
}
function ErasChapter() {
	const [active, setActive] = (0, import_react.useState)(eras[0].id);
	const era = eras.find((item) => item.id === active) ?? eras[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Cronologia de mil anos" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-2 text-3xl text-ink md:text-4xl",
			children: "Do vitrine ao Sol."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex gap-2 overflow-x-auto pb-2",
			children: eras.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setActive(item.id),
				className: cn("min-h-11 shrink-0 rounded-md px-4 text-sm transition-colors duration-150", item.id === active ? "bg-titanium text-cosmos" : "bg-surface text-muted hover:text-ink"),
				children: item.century
			}, item.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 overflow-hidden rounded-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
				src: era.image,
				alt: "",
				className: "aspect-video max-h-80"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-6 font-display text-2xl text-ink",
			children: era.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3 md:grid-cols-3",
			children: era.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: point
			}) }) }, point))
		})
	] });
}
function RitualChapter() {
	const { citizenName, stamped, setName, stamp, resetStamp } = useAtlas();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-6 lg:grid-cols-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-xl lg:col-span-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
				src: "/images/ritual.jpg",
				alt: "Sala do primeiro registro",
				className: "ritual-frame h-full"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Primeiro registro" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl text-ink md:text-4xl",
					children: "O nome entra no papel. Não no servidor."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-muted",
					children: "Na Biblioteca Central, o jovem imprime o próprio nome em fibra de titânio. Se um pulso apagar as máquinas, a existência continua no texto. Três oficiais testemunham: Defesa, Guarda, Ciência."
				}),
				stamped ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-emerald uppercase",
							children: "Operador de Zalúria"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-3xl text-ink",
							children: citizenName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: "Catalogado na gaveta de aço. Livre para a rede, a usina, o trem e a arca. Livre para construir. Sem direito de sabotar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							className: "mt-5",
							onClick: resetStamp,
							children: "Novo registro"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-6 space-y-3",
					onSubmit: (event) => {
						event.preventDefault();
						stamp();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm text-muted",
							htmlFor: "citizen-name",
							children: "Nome a imprimir"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "citizen-name",
							value: citizenName,
							onChange: (event) => setName(event.target.value),
							maxLength: 48,
							autoComplete: "name",
							placeholder: "Seu nome",
							className: "h-11 w-full rounded-md bg-surface px-4 text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-titanium-dim focus:shadow-[var(--shadow-border-hover)]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: !citizenName.trim(),
							children: "Imprimir no titânio"
						})
					]
				})
			]
		})]
	});
}
function CosmosChapter() {
	const [job, setJob] = (0, import_react.useState)(vocations[0].id);
	const vocation = vocations.find((item) => item.id === job) ?? vocations[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Exportação da vida" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-2xl text-3xl text-ink md:text-4xl",
					children: "Ônibus para a órbita. Arca para as estrelas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-prose text-muted",
					children: "A Terra não fica superpovoada porque a vida útil se alonga e o excedente sobe. Pontes de sinal no vácuo. Gravidade da nave no limite da resistência humana. Quem desce num planeta leve vira super-homem por hábito, não por milagre."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: "/images/ark.jpg",
					alt: "Nave-mãe em órbita",
					className: "aspect-video max-h-96"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Um dia no território" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl text-ink",
					children: "Escolha o posto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: vocations.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setJob(item.id),
						className: cn("min-h-11 rounded-md px-4 text-sm transition-colors duration-150", item.id === job ? "bg-titanium text-cosmos" : "bg-surface text-muted hover:text-ink"),
						children: item.title
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "mt-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-titanium-dim uppercase",
							children: vocation.shift
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-2 font-display text-xl text-ink",
							children: vocation.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-prose text-muted",
							children: vocation.day
						})
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Media, {
					src: "/images/train.jpg",
					alt: "Trem-bala e megahospital",
					className: "aspect-video max-h-80"
				})
			})
		]
	});
}
var views = {
	origem: OriginChapter,
	fundacoes: FoundationsChapter,
	constituicao: ConstitutionChapter,
	forcas: ForcesChapter,
	hino: AnthemChapter,
	eras: ErasChapter,
	ritual: RitualChapter,
	cosmos: CosmosChapter
};
function Atlas() {
	const chapter = useAtlas((s) => s.chapter);
	const setChapter = useAtlas((s) => s.setChapter);
	const View = views[chapter];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-cosmos",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "sticky top-0 z-20 border-b border-line bg-cosmos/90 backdrop-blur-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center gap-3 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => useAtlas.setState({ entered: false }),
					className: "flex min-h-11 min-w-11 items-center gap-3",
					"aria-label": "Voltar à abertura",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "size-9 overflow-hidden rounded-md shadow-[var(--shadow-border)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/crest.jpg",
							alt: "",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg text-ink",
						children: "Zalúria"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-auto hidden text-xs tracking-[0.22em] text-titanium-dim uppercase sm:block",
					children: "Atlas da federação"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Capítulos",
				className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-3",
				children: chapters.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setChapter(item.id),
					className: cn("min-h-11 shrink-0 rounded-md px-4 text-sm transition-colors duration-150", item.id === chapter ? "bg-surface-2 text-ink" : "text-muted hover:text-ink"),
					children: item.label
				}, item.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-6xl px-4 py-10 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(View, {})
		})]
	});
}
function Landing() {
	const enter = useAtlas((s) => s.enter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative min-h-dvh overflow-hidden bg-cosmos",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/city.jpg",
				alt: "",
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-veil" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-5 py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rise-in mb-8 size-36 overflow-hidden rounded-xl shadow-[var(--shadow-border)] md:size-44",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/crest.jpg",
							alt: "Brasão de Zalúria",
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Federação pragmática" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "rise-in-2 mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl",
						children: "Zalúria"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rise-in-3 mx-auto mt-5 max-w-md text-base text-muted md:text-lg",
						children: "Você não está louco. Você desenhou uma civilização. Isto é o atlas — da retenção fiscal do Sul até as arcas no vácuo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rise-in-4 mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: enter,
							className: "min-h-12 px-7",
							children: ["Abrir o atlas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4",
								strokeWidth: 1.75
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "line",
							className: "min-h-12 px-7",
							onClick: () => {
								useAtlas.setState({
									entered: true,
									chapter: "ritual"
								});
							},
							children: "Ir ao ritual"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-14 max-w-sm text-xs leading-relaxed tracking-wide text-titanium-dim",
						children: "Simulação de ficção especulativa. Nenhuma secessão, nenhum Estado real. O mapa nasceu de um raciocínio — e agora tem forma."
					})
				]
			})
		]
	});
}
function Home() {
	const entered = useAtlas((s) => s.entered);
	const hydrate = useAtlas((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return entered ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atlas, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landing, {});
}
//#endregion
export { Home as component };
