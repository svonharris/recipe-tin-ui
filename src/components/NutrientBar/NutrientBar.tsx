import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./NutrientBar.module.css";

export type NutrientBarProps = {
  value: number;
  macronutrient: string;
};

const COLORS: Record<string, { track: string; value: string }> = {
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

const FALLBACK_COLORS = {
  track: "var(--color-gray-100)",
  value: "var(--color-gray-500)",
};

const NutrientBar = ({ value, macronutrient }: NutrientBarProps) => {
  const colors = COLORS[macronutrient] ?? FALLBACK_COLORS;

  return (
    <div className={styles.nutrientBar}>
      <ProgressBar
        value={value}
        trackColor={colors.track}
        valueColor={colors.value}
      />
      <div className={styles.label}>
        <p className={`text-lg-bold ${styles.amount}`}>{`${value}g`}</p>
        <p className={`text-sm-regular ${styles.macronutrient}`}>
          {macronutrient}
        </p>
      </div>
    </div>
  );
};

export { NutrientBar };
export default NutrientBar;
