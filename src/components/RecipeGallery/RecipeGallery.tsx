// Use RecipeGallery.tsx. in the parent alongside FormSearch:
// const [recipes, setRecipes] = useState<any[]>([]);
// <FormSearch onResults={setRecipes} />
// <RecipeGallery recipes={recipes} />

import RecipeCard from "../RecipeCard/RecipeCard";
import Stack from "../Stack/Stack";

type Recipe = {
  recipe: {
    label: string;
    images: { REGULAR: { url: string } };
    totalTime: number;
  };
};

type RecipeGalleryProps = {
  recipes: Recipe[];
};

const RecipeGallery = ({ recipes }: RecipeGalleryProps) => {
  return (
    <Stack gap={16}>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.recipe.label}
          image={recipe.recipe.images.REGULAR.url}
          cookTime={recipe.recipe.totalTime}
        />
      ))}
    </Stack>
  );
};

// Create a link to the recipe details page when a recipe card is clicked. This will require setting up routing in the app and passing the selected recipe's data to the details page. Sample data to be passed to the details page can include the
// recipe's title, dishType, image { LARGE?: { url: string }; REGULAR: { url: string } }, calories, macros, ingredients {recipe.recipe.ingredients[i].food/measure/quantity/image}, servings, cooktime, description {recipe.recipe.url}(send user to recipe source), and instructions. The details page can then use this data to display a more comprehensive view of the recipe, including the instructions and any additional information.
// Macros sent to NutrientBar for display, and Ingredients sent to IngredientsItem.

export default RecipeGallery;
