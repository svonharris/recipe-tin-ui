import styles from "./IngredientsItem.module.css";

export type IngredientsItemProps = {
  name: string;
  amount: string;
};

const IngredientsItem = ({ name, amount }: IngredientsItemProps) => (
  <div className={styles.ingredientsItem}>
    <div className={`text-md-bold ${styles.ingredientsName}`}>{name}</div>
    <div className={`text-sm-regular ${styles.ingredientsAmount}`}>{amount}</div>
  </div>
);

export { IngredientsItem };
export default IngredientsItem;
