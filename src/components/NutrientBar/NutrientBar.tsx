import { CALORIES_PER_GRAM, MACRO_COLORS } from "../../constants/nutrition";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./NutrientBar.module.css";

export type NutrientBarProps = {
  value: number;
  totalCalories: number;
  macronutrient: string;
};


const FALLBACK_COLORS = {
  track: "var(--color-gray-100)",
  value: "var(--color-gray-500)",
};

const NutrientBar = ({
  value,
  totalCalories,
  macronutrient,
}: NutrientBarProps) => {
  const colors = MACRO_COLORS[macronutrient as keyof typeof MACRO_COLORS] ?? FALLBACK_COLORS;
  const caloricValue = value * (CALORIES_PER_GRAM[macronutrient] ?? 1);

  return (
    <div className={styles.nutrientBar}>
      <ProgressBar
        value={caloricValue}
        maxValue={totalCalories}
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
