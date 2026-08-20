export type HubItem = {
  title: string;
  description: string;
  category: "Tools" | "";
  icon: string;
  status?: string;
  accent: string;
};

export const hubItems: HubItem[] = [
  {
    title: "Level and EV Training Quoting ",
    description: "Draft loadouts, compare stats, and share a clean build card.",
    category: "Tools",
    icon: "⚡",
    status: "Popular",
    accent: "#59a9ff",
  }
];

export const games = [
  {
    name: "PokeMMO",
    detail: "Level / EV Training quotes and organizer.",
    code: "PM",
    color: "#f25c54",
    link: "pokemmo",
  },
];
