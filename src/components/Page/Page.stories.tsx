import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MenuLineHorizontal01, Filter01 } from "../../icons";
import Page from "./Page";
import Image from "../Image/Image";
import Ratings from "../Ratings/Ratings";
import NutrientBar from "../NutrientBar/NutrientBar";
import IngredientsItem from "../IngredientsItem/IngredientsItem";
import styles from "./Page.module.css";
import Heading from "../Heading/Heading";
import Inline from "../Inline/Inline";
import Stack from "../Stack/Stack";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import FormSearch from "../FormSearch/FormSeach";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import RecipeDuration from "../RecipeDuration/RecipeDuration";

const meta = {
  title: "Internal/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const RecipeHome: Story = {
  render: () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    return (
      <Page>
        <div style={{ maxWidth: "375px" }}>
          <header>
            <Stack gap={16}>
              <Inline gap={8} align="center">
                <ButtonIcon
                  size={"sm"}
                  outline={true}
                  onClick={() => {}}
                  title="Menu"
                  colorBackground="var(--color-dark-500)"
                  colorHover="var(--color-dark-600)"
                  borderRadius="var(--border-radius-round)"
                  icon={<MenuLineHorizontal01 />}
                />
                <Heading
                  htmlElement="h1"
                  textClassName="text-md-bold"
                  color="var(--color-dark-500)"
                >
                  Got A Tasty Dish In Mind?
                </Heading>
              </Inline>
              <FormSearch onResults={setRecipes} />
            </Stack>
          </header>
          <div>
            <RecipeGallery recipes={recipes} />
          </div>
        </div>
      </Page>
    );
  },
};

export const RecipeDetails: Story = {
  args: {
    children: (
      <div style={{ maxWidth: "375px" }}>
        <Image
          src="../bruschetta.jpeg"
          altText="Bruschetta with ricotta and pesto"
          borderRadius={"var(--image-border-bottom)"}
        />
        <Inline gap={0} justify="between">
          <Ratings rating={3} reviews={300} />
          <RecipeDuration duration={45} />
        </Inline>
        <Heading
          htmlElement="h1"
          textClassName="text-xl-bold"
          color="var(--color-dark-500)"
        >
          Bruschetta Ricotta Pesto
        </Heading>
        <hr className={styles.divider} />

        <Inline gap={24}>
          <NutrientBar value={16} macronutrient={"protein"} />
          <NutrientBar value={65} macronutrient={"carb"} />
          <NutrientBar value={90} macronutrient={"fat"} />
        </Inline>
        <Stack>
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
        <Stack>
          <Heading
            htmlElement="h2"
            textClassName="text-lg-bold"
            color="var(--color-dark-500)"
          >
            Instructions
          </Heading>
          <p className={`text-md-regular ${styles.instructionsContent}`}>
            Follow the url for detailed steps to prepare the dish.
            <a>Click Here</a>
          </p>
        </Stack>
      </div>
    ),
  },
};

export const RecipesResults: Story = {
  render: () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    return (
      <Page>
        <div style={{ maxWidth: "375px" }}>
          <Stack gap={24}>
            <header>
              <Stack gap={16}>
                <Inline gap={8} align="center">
                  <ButtonIcon
                    size={"sm"}
                    outline={true}
                    onClick={() => {}}
                    title="Menu"
                    colorBackground="var(--color-dark-500)"
                    colorHover="var(--color-dark-600)"
                    borderRadius="var(--border-radius-round)"
                    icon={<MenuLineHorizontal01 />}
                  />
                  <Heading
                    htmlElement="h1"
                    textClassName="text-md-bold"
                    color="var(--color-dark-500)"
                  >
                    Got A Tasty Dish In Mind?
                  </Heading>
                </Inline>
                <FormSearch onResults={setRecipes} />
              </Stack>
            </header>
            <Stack gap={24}>
              <Heading
                htmlElement="h2"
                textClassName="text-lg-bold"
                color="var(--color-dark-500)"
              >
                Search Results
              </Heading>
              <RecipeGallery recipes={recipes} />
            </Stack>
          </Stack>
        </div>
      </Page>
    );
  },
};

export const RecipesRecommended: Story = {
  render: () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    return (
      <Page>
        <div style={{ maxWidth: "375px" }}>
          <Stack gap={24}>
            <header>
              <Stack gap={16}>
                <Inline gap={8} align="center">
                  <Heading
                    htmlElement="h1"
                    textClassName="text-md-bold"
                    color="var(--color-dark-500)"
                    align="center"
                  >
                    Recommended For You
                  </Heading>
                </Inline>
                <FormSearch
                  onResults={setRecipes}
                  recommend={true}
                  hide={true}
                />
              </Stack>
            </header>
            <Stack gap={24}>
              <RecipeGallery recipes={recipes} />
            </Stack>
          </Stack>
        </div>
      </Page>
    );
  },
};
