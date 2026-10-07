import { useState } from "react";
import {
  articles,
  anthem,
  eras,
  forces,
  originFacts,
  pillars,
  vocations,
} from "@/lib/zaluria/content";
import { useAtlas } from "@/lib/zaluria/store";
import { Button, Kicker, Media, Panel } from "./ui";
import { cn } from "@/lib/utils";

export function OriginChapter() {
  return (
    <section className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Kicker>Ponto de partida</Kicker>
        <h2 className="mt-2 text-3xl text-ink md:text-4xl">
          A matriz já tinha músculo. Faltava o cérebro.
        </h2>
        <p className="mt-4 max-w-prose text-muted">
          O Sul não começaria do zero. Alimento de sobra, indústria metal-mecânica,
          portos, startups. O pacto federativo era o vazamento. Zalúria é o
          desenho de reter o lucro, cortar o dreno político e blindar o
          território — depois expandir só por conveniência, nunca por atrito.
        </p>
        <p className="mt-3 max-w-prose text-muted">
          São Paulo, Rio e Minas entram na hipótese porque, no papel, perder o
          Sul deixa o Sudeste sozinho carregando o resto. A simulação não pede
          guerra. Pede um Estado que ninguém queira abandonar — e que vizinhos
          peçam para entrar.
        </p>
      </div>
      <div className="overflow-hidden rounded-xl lg:col-span-5">
        <Media
          src="/images/flag.jpg"
          alt="Bandeira de Zalúria em salão escuro"
          className="flag-frame w-full object-cover"
        />
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
        {originFacts.map((fact) => (
          <li key={fact.label}>
            <Panel className="h-full">
              <p className="text-xs tracking-widest text-titanium-dim uppercase">
                {fact.label}
              </p>
              <p className="mt-2 font-display text-2xl text-titanium">{fact.value}</p>
              <p className="mt-2 text-sm text-muted">{fact.note}</p>
            </Panel>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function FoundationsChapter() {
  const [open, setOpen] = useState(pillars[0].id);

  return (
    <section>
      <Kicker>Oito engrenagens</Kicker>
      <h2 className="mt-2 text-3xl text-ink md:text-4xl">
        Nada aqui é enfeite. Cada peça segura a outra.
      </h2>
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {pillars.map((pillar) => {
          const active = open === pillar.id;
          return (
            <button
              key={pillar.id}
              type="button"
              onClick={() => setOpen(pillar.id)}
              className={cn(
                "rounded-xl p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,background-color] duration-150",
                active ? "bg-surface-2 shadow-[var(--shadow-border-hover)]" : "bg-surface",
              )}
            >
              <p className="text-xs tracking-widest text-emerald uppercase">
                {pillar.kicker}
              </p>
              <h3 className="mt-1 font-display text-xl text-ink">{pillar.title}</h3>
              <p
                className={cn(
                  "mt-2 text-sm leading-relaxed text-muted transition-opacity duration-200",
                  active ? "opacity-100" : "line-clamp-2 opacity-80",
                )}
              >
                {pillar.body}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export function ConstitutionChapter() {
  return (
    <section>
      <Kicker>Carta constitucional</Kicker>
      <h2 className="mt-2 text-3xl text-ink md:text-4xl">Sete artigos. Sem preâmbulo oco.</h2>
      <ol className="mt-8 grid gap-3">
        {articles.map((article) => (
          <li key={article.n}>
            <Panel className="grid gap-3 sm:grid-cols-12 sm:items-baseline">
              <span className="font-display text-2xl text-titanium-dim sm:col-span-2">
                {article.n}
              </span>
              <div className="sm:col-span-10">
                <h3 className="font-display text-lg text-ink">{article.title}</h3>
                <p className="mt-1 text-sm text-muted">{article.body}</p>
              </div>
            </Panel>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ForcesChapter() {
  return (
    <section>
      <Kicker>Tripartição</Kicker>
      <h2 className="mt-2 text-3xl text-ink md:text-4xl">
        Três forças. Nenhuma manda sozinha.
      </h2>
      <p className="mt-3 max-w-prose text-muted">
        Político não comanda o fuzil. General não interpreta a lei. Cientista não
        governa. Cada braço veta o outro.
      </p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {forces.map((force) => (
          <Panel key={force.id} className="flex h-full flex-col">
            <p className="text-xs tracking-widest text-titanium-dim uppercase">
              {force.emblem}
            </p>
            <h3 className="mt-2 font-display text-xl text-ink">{force.name}</h3>
            <p className="mt-3 font-display text-sm italic text-emerald">{force.motto}</p>
            <p className="mt-1 text-xs tracking-wide text-titanium-dim uppercase">
              {force.domain}
            </p>
            <p className="mt-4 flex-1 text-sm text-muted">{force.body}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}

export function AnthemChapter() {
  const [verse, setVerse] = useState(0);
  const current = anthem.verses[verse];

  return (
    <section className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Kicker>Hino nacional</Kicker>
        <h2 className="mt-2 text-3xl text-ink md:text-4xl">{anthem.title}</h2>
        <p className="mt-3 text-muted">
          Três estrofes, uma por força. O refrão une o milênio. Sem herói político.
          Sem guerra de atrito.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          {anthem.verses.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setVerse(i)}
              className={cn(
                "min-h-11 rounded-md px-4 py-2 text-left text-sm transition-colors duration-150",
                i === verse ? "bg-surface-2 text-ink" : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <Panel className="lg:col-span-7">
        <p className="text-xs tracking-widest text-emerald uppercase">{current.force}</p>
        <ul className="mt-5 space-y-2">
          {current.lines.map((line) => (
            <li key={line} className="font-display text-lg text-ink md:text-xl">
              {line}
            </li>
          ))}
        </ul>
        <div className="mt-8 border-t border-line pt-5">
          <p className="text-xs tracking-widest text-titanium-dim uppercase">Refrão</p>
          <ul className="mt-3 space-y-1">
            {anthem.chorus.map((line) => (
              <li key={line} className="text-sm text-muted">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </section>
  );
}

export function ErasChapter() {
  const [active, setActive] = useState(eras[0].id);
  const era = eras.find((item) => item.id === active) ?? eras[0];

  return (
    <section>
      <Kicker>Cronologia de mil anos</Kicker>
      <h2 className="mt-2 text-3xl text-ink md:text-4xl">Do vitrine ao Sol.</h2>
      <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
        {eras.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            className={cn(
              "min-h-11 shrink-0 rounded-md px-4 text-sm transition-colors duration-150",
              item.id === active
                ? "bg-titanium text-cosmos"
                : "bg-surface text-muted hover:text-ink",
            )}
          >
            {item.century}
          </button>
        ))}
      </div>
      <div className="mt-5 overflow-hidden rounded-xl">
        <Media src={era.image} alt="" className="aspect-video max-h-80" />
      </div>
      <h3 className="mt-6 font-display text-2xl text-ink">{era.title}</h3>
      <ul className="mt-4 grid gap-3 md:grid-cols-3">
        {era.points.map((point) => (
          <li key={point}>
            <Panel>
              <p className="text-sm text-muted">{point}</p>
            </Panel>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RitualChapter() {
  const { citizenName, stamped, setName, stamp, resetStamp } = useAtlas();

  return (
    <section className="grid gap-6 lg:grid-cols-12">
      <div className="overflow-hidden rounded-xl lg:col-span-5">
        <Media
          src="/images/ritual.jpg"
          alt="Sala do primeiro registro"
          className="ritual-frame h-full"
        />
      </div>
      <div className="lg:col-span-7">
        <Kicker>Primeiro registro</Kicker>
        <h2 className="mt-2 text-3xl text-ink md:text-4xl">
          O nome entra no papel. Não no servidor.
        </h2>
        <p className="mt-3 max-w-prose text-muted">
          Na Biblioteca Central, o jovem imprime o próprio nome em fibra de
          titânio. Se um pulso apagar as máquinas, a existência continua no texto.
          Três oficiais testemunham: Defesa, Guarda, Ciência.
        </p>

        {stamped ? (
          <Panel className="mt-6">
            <p className="text-xs tracking-widest text-emerald uppercase">
              Operador de Zalúria
            </p>
            <p className="mt-3 font-display text-3xl text-ink">{citizenName}</p>
            <p className="mt-2 text-sm text-muted">
              Catalogado na gaveta de aço. Livre para a rede, a usina, o trem e a
              arca. Livre para construir. Sem direito de sabotar.
            </p>
            <Button variant="line" className="mt-5" onClick={resetStamp}>
              Novo registro
            </Button>
          </Panel>
        ) : (
          <form
            className="mt-6 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              stamp();
            }}
          >
            <label className="block text-sm text-muted" htmlFor="citizen-name">
              Nome a imprimir
            </label>
            <input
              id="citizen-name"
              value={citizenName}
              onChange={(event) => setName(event.target.value)}
              maxLength={48}
              autoComplete="name"
              placeholder="Seu nome"
              className="h-11 w-full rounded-md bg-surface px-4 text-ink shadow-[var(--shadow-border)] outline-none placeholder:text-titanium-dim focus:shadow-[var(--shadow-border-hover)]"
            />
            <Button type="submit" disabled={!citizenName.trim()}>
              Imprimir no titânio
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

export function CosmosChapter() {
  const [job, setJob] = useState(vocations[0].id);
  const vocation = vocations.find((item) => item.id === job) ?? vocations[0];

  return (
    <section className="space-y-10">
      <div>
        <Kicker>Exportação da vida</Kicker>
        <h2 className="mt-2 max-w-2xl text-3xl text-ink md:text-4xl">
          Ônibus para a órbita. Arca para as estrelas.
        </h2>
        <p className="mt-4 max-w-prose text-muted">
          A Terra não fica superpovoada porque a vida útil se alonga e o
          excedente sobe. Pontes de sinal no vácuo. Gravidade da nave no
          limite da resistência humana. Quem desce num planeta leve vira
          super-homem por hábito, não por milagre.
        </p>
      </div>
      <div className="overflow-hidden rounded-xl">
        <Media src="/images/ark.jpg" alt="Nave-mãe em órbita" className="aspect-video max-h-96" />
      </div>

      <div>
        <Kicker>Um dia no território</Kicker>
        <h3 className="mt-2 font-display text-2xl text-ink">Escolha o posto</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {vocations.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setJob(item.id)}
              className={cn(
                "min-h-11 rounded-md px-4 text-sm transition-colors duration-150",
                item.id === job
                  ? "bg-titanium text-cosmos"
                  : "bg-surface text-muted hover:text-ink",
              )}
            >
              {item.title}
            </button>
          ))}
        </div>
        <Panel className="mt-4">
          <p className="text-xs tracking-widest text-titanium-dim uppercase">
            {vocation.shift}
          </p>
          <h4 className="mt-2 font-display text-xl text-ink">{vocation.title}</h4>
          <p className="mt-3 max-w-prose text-muted">{vocation.day}</p>
        </Panel>
      </div>

      <div className="overflow-hidden rounded-xl">
        <Media
          src="/images/train.jpg"
          alt="Trem-bala e megahospital"
          className="aspect-video max-h-80"
        />
      </div>
    </section>
  );
}
