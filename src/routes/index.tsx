import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Atlas } from "@/components/zaluria/atlas";
import { Landing } from "@/components/zaluria/landing";
import { useAtlas } from "@/lib/zaluria/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const entered = useAtlas((s) => s.entered);
  const hydrate = useAtlas((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return entered ? <Atlas /> : <Landing />;
}
