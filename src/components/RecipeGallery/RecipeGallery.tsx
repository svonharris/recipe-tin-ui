import RecipeCard from "../RecipeCard/RecipeCard";

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
    <>
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.recipe.label}
          image={recipe.recipe.images.REGULAR.url}
          cookTime={recipe.recipe.totalTime}
        />
      ))}
    </>
  );
};

export default RecipeGallery;
