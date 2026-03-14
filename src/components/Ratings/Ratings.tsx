import { Star } from "../../icons";
import styles from "./Ratings.module.css";

type RatingsProps = {
  rating: number;
  reviews: number;
};

const Ratings = ({ rating, reviews }: RatingsProps) => {
  const starCount = Math.round(Math.min(Math.max(rating, 0), 5));

  return (
    <div className={styles.ratings}>
      <div className={styles.ratingsStars}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            size={16}
            color={i < starCount ? "var(--color-warning-500)" : "var(--color-gray-500)"}
          />
        ))}
      </div>
      <p className={`text-xs-regular ${styles.ratingsText}`}>
        {rating.toFixed(1)} ({reviews.toLocaleString()} Reviews)
      </p>
    </div>
  );
};

export default Ratings;
