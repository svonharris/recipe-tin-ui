import styles from "./CaloriesBar.module.css";

export type CaloriesBarProps = {
  calories: number;
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

const CaloriesBar = ({ calories, protein, carb, fat }: CaloriesBarProps) => {
  const macros: { key: Macro; value: number }[] = [
    { key: "fat", value: fat },
    { key: "carb", value: carb },
    { key: "protein", value: protein },
  ];

  const nonZeroCount = macros.filter((m) => m.value > 0).length;
  const segmentWidth = nonZeroCount > 0 ? 100 / nonZeroCount : 0;

  return (
    <div className={styles.caloriesBar}>
      <div className={styles.bar}>
        {macros.map(({ key, value }) =>
          value > 0 ? (
            <div
              key={key}
              className={styles.segment}
              style={{
                height: `${segmentWidth}%`,
                backgroundColor: MACRO_COLORS[key],
              }}
            />
          ) : null,
        )}
      </div>
      <label className={styles.label}>
        <p className={`text-lg-bold ${styles.amount}`}>{calories}</p>
        <p className={`text-sm-regular ${styles.macronutrient}`}>calories</p>
      </label>
    </div>
  );
};

export { CaloriesBar };
export default CaloriesBar;
