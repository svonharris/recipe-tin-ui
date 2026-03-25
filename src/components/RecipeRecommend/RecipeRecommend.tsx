import { useEffect } from "react";
import useEdamamSearch from "../../hooks/useEdamamSearch";

const foodCategories = ["chicken", "pasta", "salad", "beef", "fish", "soup"];

const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

export type RecipeRecommendProps = {
  onResults: (recipes: any[]) => void;
  limit?: number;
};

const RecipeRecommend = ({ onResults, limit }: RecipeRecommendProps) => {
  const { search } = useEdamamSearch((hits) =>
    onResults(limit ? hits.slice(0, limit) : hits),
  );

  useEffect(() => {
    search(random(foodCategories));
  }, []);

  return null;
};

export { RecipeRecommend };
export default RecipeRecommend;
