import { CALORIES_PER_GRAM, MACRO_COLORS } from "../../constants/nutrition";
import type { Macro } from "../../constants/nutrition";
import styles from "./CaloriesBar.module.css";

export type CaloriesBarProps = {
  protein: number;
  carb: number;
  fat: number;
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
                backgroundColor: MACRO_COLORS[key].value,
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
