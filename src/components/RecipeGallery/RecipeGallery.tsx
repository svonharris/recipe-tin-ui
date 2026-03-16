// Use RecipeGallery.tsx. in the parent alongside FormSearch:
// const [recipes, setRecipes] = useState<any[]>([]);
// <FormSearch onResults={setRecipes} />
// <RecipeGallery recipes={recipes} />

import RecipeCard from "../RecipeCard/RecipeCard";

type Recipe = {
  recipe: {
    label: string;
    dishType: string[];
    images: { REGULAR: { url: string } };
    calories: number;
    digest: { label: string; total: number; id: string }[];
    ingredients: { text: string }[];
    yield: number;
  };
};

type RecipeGalleryProps = {
  recipes: Recipe[];
};

const RecipeGallery = ({ recipes }: RecipeGalleryProps) => (
  <div className="recipe-gallery">
    {recipes.map((recipe, index) => (
      <RecipeCard
        key={index}
        title={recipe.recipe.label}
        type={recipe.recipe.dishType}
        image={recipe.recipe.images.REGULAR.url}
        calories={recipe.recipe.calories}
        macros={recipe.recipe.digest}
        ingredients={recipe.recipe.ingredients}
        servings={recipe.recipe.yield}
      />
    ))}
  </div>
);

export default RecipeGallery;
