import styles from "./ProgressBar.module.css";

export type ProgressBarProps = {
  value: number;
  trackColor: string;
  valueColor: string;
};

const ProgressBar = ({ value, trackColor, valueColor }: ProgressBarProps) => (
  <progress
    className={styles.progressBar}
    value={value}
    max={100}
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
