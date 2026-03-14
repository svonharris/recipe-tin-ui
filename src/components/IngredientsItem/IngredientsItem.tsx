import styles from "./IngredientsItem.module.css";

type IngredientsItemProps = {
  name: string;
  amount: string;
};

const IngredientsItem = ({ name, amount }: IngredientsItemProps) => (
  <div className={styles.ingredientsItem}>
    <div className={`text-md-bold ${styles.ingredientsName}`}>{name}</div>
    <div className={`text-sm-regular ${styles.ingredientsAmount}`}>{amount}</div>
  </div>
);

export default IngredientsItem;
