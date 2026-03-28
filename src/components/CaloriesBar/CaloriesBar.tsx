import { CALORIES_PER_GRAM } from "../../constants/nutrition";
import styles from "./CaloriesBar.module.css";

export type CaloriesBarProps = {
  protein: number;
  carb: number;
  fat: number;
};

type Macro = "protein" | "carb" | "fat";

const MACRO_COLORS: Record<Macro, string> = {
  protein: "var(--color-secondary-500)",
  carb: "var(--color-information-500)",
  fat: "var(--color-warning-500)",
};

const CaloriesBar = ({ protein, carb, fat }: CaloriesBarProps) => {
  const macros: { key: Macro; value: number }[] = [
    { key: "protein", value: protein },
    { key: "carb", value: carb },
    { key: "fat", value: fat },
  ];

  const macroCalories = macros.reduce(
    (sum, { key, value }) => sum + value * CALORIES_PER_GRAM[key],
    0,
  );

  return (
    <div className={styles.caloriesBar}>
      <div className={styles.bar}>
        {macros.map(({ key, value }) => {
          const caloricValue = value * CALORIES_PER_GRAM[key];
          const segmentHeight =
            macroCalories > 0 ? (caloricValue / macroCalories) * 100 : 0;

          return caloricValue > 0 ? (
            <div
              key={key}
              className={styles.segment}
              style={{
                height: `${segmentHeight}%`,
                backgroundColor: MACRO_COLORS[key],
              }}
            />
          ) : null;
        })}
      </div>
      <label className={styles.label}>
        <p className={`text-lg-bold ${styles.amount}`}>{macroCalories}</p>
        <p className={`text-sm-regular ${styles.macronutrient}`}>calories</p>
      </label>
    </div>
  );
};

export { CaloriesBar };
export default CaloriesBar;
