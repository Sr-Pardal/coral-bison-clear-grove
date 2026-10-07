import { create } from "zustand";
import type { ChapterId } from "./content";

const STORAGE_KEY = "zaluria-citizen";

function persist(name: string, stamped: boolean) {
  if (typeof window === "undefined") return;
  if (!stamped) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, stamped }));
}

type AtlasState = {
  entered: boolean;
  chapter: ChapterId;
  citizenName: string;
  stamped: boolean;
  enter: () => void;
  setChapter: (chapter: ChapterId) => void;
  setName: (name: string) => void;
  stamp: () => void;
  resetStamp: () => void;
  hydrate: () => void;
};

export const useAtlas = create<AtlasState>((set, get) => ({
  entered: false,
  chapter: "origem",
  citizenName: "",
  stamped: false,
  enter: () => set({ entered: true }),
  setChapter: (chapter) => set({ chapter }),
  setName: (citizenName) => set({ citizenName, stamped: false }),
  stamp: () => {
    const name = get().citizenName.trim();
    if (!name) return;
    persist(name, true);
    set({ stamped: true, citizenName: name });
  },
  resetStamp: () => {
    persist("", false);
    set({ stamped: false, citizenName: "" });
  },
  hydrate: () => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { name?: string; stamped?: boolean };
      if (typeof parsed.name === "string" && parsed.stamped) {
        set({ citizenName: parsed.name, stamped: true });
      }
    } catch {
      /* ignore */
    }
  },
}));
