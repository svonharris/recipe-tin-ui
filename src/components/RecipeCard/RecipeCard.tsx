import Ratings from "../Ratings/Ratings";
import RecipeDuration from "../RecipeDuration/RecipeDuration";
import Inline from "../Inline/Inline";
import Image from "../Image/Image";
import Stack from "../Stack/Stack";

type RecipeCardProps = {
  title: string;
  image: string;
  cookTime: number;
  ratings?: number;
  reviews?: number;
};

const RecipeCard = ({
  title,
  image,
  cookTime,
  ratings = 0,
  reviews = 0,
}: RecipeCardProps) => {
  return (
    <Stack gap={8}>
      <Image
        src={image}
        altText={"Image of " + title}
        borderRadius={"var(--border-radius-lg)"}
      />
      <h3>{title}</h3>
      <Inline gap={0} justify="between">
        <Ratings rating={ratings} reviews={reviews} />
        <RecipeDuration duration={cookTime} />
      </Inline>
    </Stack>
  );
};

export default RecipeCard;
