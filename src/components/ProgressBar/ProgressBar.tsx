import styles from "./ProgressBar.module.css";

export type ProgressBarProps = {
  value: number;
  maxValue: number;
  trackColor: string;
  valueColor: string;
};

const ProgressBar = ({ value, maxValue, trackColor, valueColor }: ProgressBarProps) => (
  <progress
    className={styles.progressBar}
    value={value}
    max={maxValue}
    style={
      {
        "--track-color": trackColor,
        "--value-color": valueColor,
      } as React.CSSProperties
    }
  />
);

export { ProgressBar };
export default ProgressBar;
