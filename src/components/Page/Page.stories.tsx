import type { Meta, StoryObj } from "@storybook/react";
import Page from "./Page";
import Image from "../Image/Image";
import { ClockCircle } from "../../icons";
import Ratings from "../Ratings/Ratings";
import NutrientBar from "../NutrientBar/NutrientBar";
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import ReadMore from "../ReadMore/ReadMore";
import styles from "./Page.module.css";
import Heading from "../Heading/Heading";
import Inline from "../Inline/Inline";
import Stack from "../Stack/Stack";

const meta = {
  title: "Components/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const RecipeDetails: Story = {
  args: {
    children: (
      <div style={{ maxWidth: "375px" }}>
        <Image
          src="../Bruschetta-Ricotta-Pesto.jpg"
          altText="Bruschetta with ricotta and pesto"
          borderRadius={"var(--image-border-bottom)"}
        />
        <Inline gap={0} justify="between">
          <Ratings rating={3} reviews={300} />
          <div className={`${styles.cookTime}`}>
            <ClockCircle size={16} color="var(--color-gray-800)" />
            <p className={`text-xs-regular ${styles.cookTimeText}`}>20 min</p>
          </div>
        </Inline>
        <Heading
          htmlElement="h1"
          textClassName="text-xl-bold"
          color="var(--color-dark-500)"
        >
          Bruschetta Ricotta Pesto
        </Heading>
        <hr className={styles.divider} />

        <Stack gap={0}>
          <Heading
            htmlElement="h2"
            textClassName="text-lg-bold"
            color="var(--color-dark-500)"
          >
            Description
          </Heading>
          <ReadMore
            className={`text-md-regular ${styles.recipeDescriptionText}`}
            text="This bruschetta recipe is a delicious and easy appetizer that combines the flavors of fresh tomatoes, creamy ricotta cheese, and fragrant basil pesto. Perfect for entertaining or as a light snack, this dish is sure to impress your guests with its vibrant colors and bold flavors. Toast slices of crusty bread until golden, spread with creamy ricotta, top with a fresh tomato mixture, and finish with a drizzle of homemade basil pesto for a stunning and satisfying dish."
          />
        </Stack>
        <Inline gap={24}>
          <NutrientBar value={16} macronutrient={"protein"} />
          <NutrientBar value={65} macronutrient={"carb"} />
          <NutrientBar value={90} macronutrient={"fat"} />
          <div>
            <progress
              id="calories"
              value={1134}
              max={2000}
              style={
                {
                  "--p1": `${((64 / 1134) * 100).toFixed(1)}%`,
                  "--p2": `${(((64 + 260) / 1134) * 100).toFixed(1)}%`,
                } as React.CSSProperties
              }
            />
            <label htmlFor="calories">
              <p className={`text-lg-bold ${styles.nutritionAmount}`}>1134</p>
              <p className={`text-sm-regular ${styles.nutritionLabel}`}>
                calories
              </p>
            </label>
          </div>
        </Inline>
        <Stack gap={0}>
          <Heading
            htmlElement="h2"
            textClassName="text-lg-bold"
            color="var(--color-dark-500)"
          >
            Ingredients
          </Heading>
          <IngredientsItem name={"olive oil"} amount={"3 tbsp"} />
          <IngredientsItem name={"cherry tomatoes"} amount={"15 tomatoes"} />
        </Stack>
        <Stack gap={0}>
          <Heading
            htmlElement="h2"
            textClassName="text-lg-bold"
            color="var(--color-dark-500)"
          >
            Description
          </Heading>
          <p className={`text-md-regular ${styles.instructionsContent}`}>
            Follow these steps to prepare the dish.
          </p>
        </Stack>
      </div>
    ),
  },
};
