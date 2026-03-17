import { useEffect } from "react";

const foodCategories = ["chicken", "pasta", "salad", "beef", "fish", "soup"];
const mealTypes = ["breakfast", "brunch", "lunch/dinner", "snack", "teatime"];

const random = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

type RecipeRecommendProps = {
  onResults: (recipes: any[]) => void;
  limit?: number;
};

const RecipeRecommend = ({ onResults, limit }: RecipeRecommendProps) => {
  const ID = import.meta.env.VITE_ID;
  const KEY = import.meta.env.VITE_KEY;

  useEffect(() => {
    const query = random(foodCategories);
    const mealType = random(mealTypes);

    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&mealType=${mealType}&app_id=${ID}&app_key=${KEY}`,
      );
      const data = await response.json();
      const hits = limit ? data.hits.slice(0, limit) : data.hits;
      console.log("RecipeRecommend results:", hits);
      onResults(hits);
    };

    getRecipes();
  }, []);

  return null;
};

export default RecipeRecommend;
