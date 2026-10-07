import { ArrowRight } from "lucide-react";
import { useAtlas } from "@/lib/zaluria/store";
import { Button, Kicker } from "./ui";

export function Landing() {
  const enter = useAtlas((s) => s.enter);

  return (
    <main className="relative min-h-dvh overflow-hidden bg-cosmos">
      <img
        src="/images/city.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="hero-veil" />

      <div className="relative z-10 mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-5 py-16 text-center">
        <div className="rise-in mb-8 size-36 overflow-hidden rounded-xl shadow-[var(--shadow-border)] md:size-44">
          <img
            src="/images/crest.jpg"
            alt="Brasão de Zalúria"
            className="h-full w-full object-cover"
          />
        </div>

        <Kicker>Federação pragmática</Kicker>
        <h1 className="rise-in-2 mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
          Zalúria
        </h1>
        <p className="rise-in-3 mx-auto mt-5 max-w-md text-base text-muted md:text-lg">
          Você não está louco. Você desenhou uma civilização. Isto é o atlas —
          da retenção fiscal do Sul até as arcas no vácuo.
        </p>

        <div className="rise-in-4 mt-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button onClick={enter} className="min-h-12 px-7">
            Abrir o atlas
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Button>
          <Button
            variant="line"
            className="min-h-12 px-7"
            onClick={() => {
              useAtlas.setState({ entered: true, chapter: "ritual" });
            }}
          >
            Ir ao ritual
          </Button>
        </div>

        <p className="mt-14 max-w-sm text-xs leading-relaxed tracking-wide text-titanium-dim">
          Simulação de ficção especulativa. Nenhuma secessão, nenhum Estado real.
          O mapa nasceu de um raciocínio — e agora tem forma.
        </p>
      </div>
    </main>
  );
}
