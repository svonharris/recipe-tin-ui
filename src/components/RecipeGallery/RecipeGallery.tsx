// Use RecipeGallery.tsx. in the parent alongside FormSearch:
// const [recipes, setRecipes] = useState<any[]>([]);
// <FormSearch onResults={setRecipes} />
// <RecipeGallery recipes={recipes} />

import RecipeCard from "../RecipeCard/RecipeCard";

type Recipe = {
  recipe: {
    label: string;
    images: { REGULAR: { url: string } };
  };
};

type RecipeGalleryProps = {
  recipes: Recipe[];
};

const RecipeGallery = ({ recipes }: RecipeGalleryProps) => {
  return (
    <div className="recipe-gallery">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.recipe.label}
          image={recipe.recipe.images.REGULAR.url}

          // Gallery Cards
          // image={recipe.recipe.images.REGULAR.url}
          // reviews={[]}
          // cookTime={0}
          // title={recipe.recipe.label}
        />
      ))}
    </div>
  );
};

// Create a link to the recipe details page when a recipe card is clicked. This will require setting up routing in the app and passing the selected recipe's data to the details page. Sample data to be passed to the details page can include the
// recipe's title, dishType, image, calories, macros, ingredients, servings, reviews, cooktime, description, and instructions. The details page can then use this data to display a more comprehensive view of the recipe, including the instructions and any additional information.
// Macros sent to NutrientBar for display, and Ingredients sent to IngredientsItem.

export default RecipeGallery;
