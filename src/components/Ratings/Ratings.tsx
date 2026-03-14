import { useEffect, useState } from "react";
import { Star } from "../../icons";
import styles from "./Ratings.module.css";

type RatingsData = {
  rating: number;
  reviews: number;
};

type RatingsProps = {
  url: string;
};

const Ratings = ({ url }: RatingsProps) => {
  const [data, setData] = useState<RatingsData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch ratings");
        return res.json();
      })
      .then((json: RatingsData) => setData(json))
      .catch((err: Error) => setError(err.message));
  }, [url]);

  if (error) return null;
  if (!data) return null;

  const starCount = Math.round(Math.min(Math.max(data.rating, 0), 5));

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
        {data.rating.toFixed(1)} ({data.reviews.toLocaleString()} Reviews)
      </p>
    </div>
  );
};

export default Ratings;
