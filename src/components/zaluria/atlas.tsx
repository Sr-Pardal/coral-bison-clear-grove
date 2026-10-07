import type { ComponentType } from "react";
import { chapters, type ChapterId } from "@/lib/zaluria/content";
import { useAtlas } from "@/lib/zaluria/store";
import {
  AnthemChapter,
  ConstitutionChapter,
  CosmosChapter,
  ErasChapter,
  ForcesChapter,
  FoundationsChapter,
  OriginChapter,
  RitualChapter,
} from "./chapters";
import { cn } from "@/lib/utils";

const views: Record<ChapterId, ComponentType> = {
  origem: OriginChapter,
  fundacoes: FoundationsChapter,
  constituicao: ConstitutionChapter,
  forcas: ForcesChapter,
  hino: AnthemChapter,
  eras: ErasChapter,
  ritual: RitualChapter,
  cosmos: CosmosChapter,
};

export function Atlas() {
  const chapter = useAtlas((s) => s.chapter);
  const setChapter = useAtlas((s) => s.setChapter);
  const View = views[chapter];

  return (
    <div className="min-h-dvh bg-cosmos">
      <header className="sticky top-0 z-20 border-b border-line bg-cosmos/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <button
            type="button"
            onClick={() => useAtlas.setState({ entered: false })}
            className="flex min-h-11 min-w-11 items-center gap-3"
            aria-label="Voltar à abertura"
          >
            <span className="size-9 overflow-hidden rounded-md shadow-[var(--shadow-border)]">
              <img src="/images/crest.jpg" alt="" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-lg text-ink">Zalúria</span>
          </button>
          <span className="ml-auto hidden text-xs tracking-[0.22em] text-titanium-dim uppercase sm:block">
            Atlas da federação
          </span>
        </div>
        <nav
          aria-label="Capítulos"
          className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-3 pb-3"
        >
          {chapters.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setChapter(item.id)}
              className={cn(
                "min-h-11 shrink-0 rounded-md px-4 text-sm transition-colors duration-150",
                item.id === chapter
                  ? "bg-surface-2 text-ink"
                  : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 pb-20">
        <View />
      </main>
    </div>
  );
}
