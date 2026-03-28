import Ratings from "../Ratings/Ratings";
import RecipeDuration from "../RecipeDuration/RecipeDuration";
import Inline from "../Inline/Inline";
import Image from "../Image/Image";
import Stack from "../Stack/Stack";
import Heading from "../Heading/Heading";

export type RecipeCardProps = {
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
      <div style={{ alignSelf: "center" }}>
        <Image
          src={image}
          height="300px"
          altText={"Image of " + title}
          borderRadius={"var(--border-radius-lg)"}
        />
      </div>
      <Inline gap={0} justify="between">
        <Ratings rating={ratings} reviews={reviews} />
        <RecipeDuration duration={cookTime} />
      </Inline>
      <Heading
        htmlElement="h3"
        textClassName="text-md-bold"
        color="var(--color-dark-500)"
      >
        {title}
      </Heading>
    </Stack>
  );
};

export { RecipeCard };
export default RecipeCard;
