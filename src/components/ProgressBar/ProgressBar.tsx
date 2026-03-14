import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
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

export default ProgressBar;
