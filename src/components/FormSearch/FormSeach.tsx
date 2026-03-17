// Use RecipeGallery.tsx. in the parent alongside FormSearch:
// const [recipes, setRecipes] = useState<any[]>([]);
// <FormSearch onResults={setRecipes} />
// <RecipeGallery recipes={recipes} />

import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import { Search01 } from "../../icons";

type FormSearchProps = {
  onResults: (recipes: any[]) => void;
  recommend?: boolean;
  hide?: boolean;
};

const FormSearch = ({
  onResults,
  recommend = false,
  hide = false,
}: FormSearchProps) => {
  const ID = import.meta.env.VITE_ID;
  const KEY = import.meta.env.VITE_KEY;

  const foodCategories = ["chicken", "pasta", "salad", "beef", "fish", "soup"];
  const meal = ["breakfast", "brunch", "lunch/dinner", "snack", "teatime"];

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(
    recommend
      ? foodCategories[Math.floor(Math.random() * foodCategories.length)]
      : "",
  );

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    if (!recommend && !query) return; // prevents empty search on mount

    const mealType = recommend
      ? meal[Math.floor(Math.random() * meal.length)]
      : undefined;
    const mealTypeParam = mealType ? `&mealType=${mealType}` : "";

    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}${mealTypeParam}&app_id=${ID}&app_key=${KEY}`,
    );
    const data = await response.json();
    console.log("FormSearch results:", data.hits);
    onResults(data.hits);
  };

  const getSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <form onSubmit={getSearch} style={{ width: "100%" }} hidden={hide}>
      <FormInput
        label="Search"
        id="search"
        value={search}
        type={"search"}
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        hideLabel={true}
        icon={<Search01 />}
      />
    </form>
  );
};

export default FormSearch;
