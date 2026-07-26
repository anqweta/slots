export interface SymbolItem {
  name: string;
  icon: string;
  firstMult: number;
  secondMult: number;
}

export const BASE_MONEY: number = 1000;

export const SYMBOLS: SymbolItem[] = [
  {
    name: "cherry",
    icon: "🍒",
    firstMult: 20,
    secondMult: 2,
  },
  {
    name: "lemon",
    icon: "🍋",
    firstMult: 50,
    secondMult: 5,
  },
  {
    name: "bell",
    icon: "🔔",
    firstMult: 5,
    secondMult: 1,
  },
  {
    name: "seven",
    icon: "7️⃣",
    firstMult: 100,
    secondMult: 10,
  },
  {
    name: "star",
    icon: "⭐",
    firstMult: 10,
    secondMult: 1,
  },
];
