import styles from "./CaloriesBar.module.css";

type CaloriesBarProps = {
  calories: number;
  protein: number;
  carb: number;
  fat: number;
  proteinColor: string;
  carbColor: string;
  fatColor: string;
};

const CaloriesBar = ({ calories, protein, carb, fat, proteinColor, carbColor, fatColor }: CaloriesBarProps) => {
  const total = protein + carb + fat;

  return (
    <div className={styles.caloriesBar}>
      <progress
        className={styles.progress}
        value={calories}
        max={2000}
        style={
          {
            "--p1": `${((protein / total) * 100).toFixed(1)}%`,
            "--p2": `${(((protein + carb) / total) * 100).toFixed(1)}%`,
            "--protein-color": proteinColor,
            "--carb-color": carbColor,
            "--fat-color": fatColor,
          } as React.CSSProperties
        }
      />
      <label className={styles.label}>
        <p className={`text-lg-bold ${styles.amount}`}>{calories}</p>
        <p className={`text-sm-regular ${styles.macronutrient}`}>calories</p>
      </label>
    </div>
  );
};

export default CaloriesBar;
