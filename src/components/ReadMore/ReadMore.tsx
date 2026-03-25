import { useState } from "react";
import styles from "./ReadMore.module.css";

export type ReadMoreProps = {
  text: string;
  className?: string;
};

const ReadMore = ({ text, className }: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 150;

  return (
    <p className={className}>
      {!isLong || expanded ? text : `${text.slice(0, 150)}...`}{" "}
      {isLong && (
        <span
          className={styles.toggle}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "read less" : "read more"}
        </span>
      )}
    </p>
  );
};

export { ReadMore };
export default ReadMore;
