export type HubItem = {
  title: string;
  description: string;
  category: "Tools" | "";
  game: string;
  href: string;
  icon: string;
  status?: string;
  accent: string;
};

export const hubItems: HubItem[] = [
  {
    title: "Level and EV Training Quoting ",
    description: "Draft loadouts, compare stats, and share a clean build card.",
    category: "Tools",
    game: "pokemmo",
    href: "/games/pokemmo/training_quoting",
    icon: "⚡",
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
