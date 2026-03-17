// Use RecipeGallery.tsx. in the parent alongside FormSearch:
// const [recipes, setRecipes] = useState<any[]>([]);
// <FormSearch onResults={setRecipes} />
// <RecipeGallery recipes={recipes} />

import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import { Search01 } from "../../icons";

type FormSearchProps = {
  onResults: (recipes: any[]) => void;
};

const FormSearch = ({ onResults }: FormSearchProps) => {
  const ID = import.meta.env.VITE_ID;
  const KEY = import.meta.env.VITE_KEY;

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${KEY}`,
    );
    const data = await response.json();
    // console.log("FormSearch results:", data.hits);
    onResults(data.hits);
  };

  const getSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <form onSubmit={getSearch} style={{ width: "100%" }}>
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
