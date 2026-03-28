export type Macro = "protein" | "carb" | "fat";

export const CALORIES_PER_GRAM: Record<string, number> = {
  protein: 4,
  carb: 4,
  fat: 9,
};

export const MACRO_COLORS: Record<Macro, { track: string; value: string }> = {
  protein: {
    track: "var(--color-secondary-100)",
    value: "var(--color-secondary-500)",
  },
  carb: {
    track: "var(--color-information-100)",
    value: "var(--color-information-500)",
  },
  fat: {
    track: "var(--color-warning-100)",
    value: "var(--color-warning-500)",
  },
};
