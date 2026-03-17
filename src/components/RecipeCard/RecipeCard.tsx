import Ratings from "../Ratings/Ratings";
import RecipeDuration from "../RecipeDuration/RecipeDuration";
import Inline from "../Inline/Inline";
import Image from "../Image/Image";
import Stack from "../Stack/Stack";
import Heading from "../Heading/Heading";

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
      <div style={{ alignSelf: "center" }}>
        <Image
          src={image}
          height="240px"
          altText={"Image of " + title}
          borderRadius={"var(--border-radius-lg)"}
        />
      </div>
      <Heading
        htmlElement="h2"
        textClassName="text-xl-bold"
        color="var(--color-dark-500)"
      >
        {title}
      </Heading>
      <Inline gap={0} justify="between">
        <Ratings rating={ratings} reviews={reviews} />
        <RecipeDuration duration={cookTime} />
      </Inline>
    </Stack>
  );
};

export default RecipeCard;
