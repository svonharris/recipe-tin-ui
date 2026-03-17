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
import RecipeRecommend from "../RecipeRecommend/RecipeRecommend";

const meta = {
  title: "Internal/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const RecipeHome: Story = {
  render: () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    const [recommendedRecipes, setRecommendedRecipes] = useState<any[]>([]);
    return (
      <Page>
        <div style={{ maxWidth: "375px" }}>
          <Stack gap={16}>
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

            {recipes.length > 0 ? (
              <div>
                <RecipeGallery recipes={recipes} />
              </div>
            ) : (
              <>
                <Heading
                  htmlElement="h2"
                  textClassName="text-lg-bold"
                  color="var(--color-dark-500)"
                >
                  Recommended For You
                </Heading>
                <Inline gap={24} align="top">
                  <RecipeRecommend
                    onResults={setRecommendedRecipes}
                    limit={6}
                  />
                  <RecipeGallery recipes={recommendedRecipes} />
                </Inline>
              </>
            )}
          </Stack>
        </div>
      </Page>
    );
  },
};

export const RecipeDetails: Story = {
  args: {
    children: (
      <div style={{ maxWidth: "375px" }}>
        <div style={{ textAlign: "center" }}>
          <Image
            src="../bruschetta.jpeg"
            altText="Bruschetta with ricotta and pesto"
            borderRadius={"var(--image-border-bottom)"}
            width="100%"
          />
        </div>
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
        <Stack gap={24}>
          <Inline gap={24}>
            <NutrientBar value={16} macronutrient={"protein"} />
            <NutrientBar value={65} macronutrient={"carb"} />
            <NutrientBar value={90} macronutrient={"fat"} />
          </Inline>
          <Stack gap={16}>
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
        </Stack>
      </div>
    ),
  },
};

export const RecipesSearch: Story = {
  render: () => {
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [recommendedRecipes, setRecommendedRecipes] = useState<any[]>([]);
    return (
      <Page>
        <div style={{ maxWidth: "375px" }}>
          <Stack gap={16}>
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
                  <FormSearch onResults={setSearchResults} />
                </Stack>
              </header>
              {searchResults.length > 0 && (
                <>
                  <Heading
                    htmlElement="h2"
                    textClassName="text-lg-bold"
                    color="var(--color-dark-500)"
                  >
                    Search Results
                  </Heading>
                  <RecipeGallery recipes={searchResults} />
                </>
              )}
            </Stack>
            <Heading
              htmlElement="h2"
              textClassName="text-lg-bold"
              color="var(--color-dark-500)"
            >
              Recommended For You
            </Heading>
            <Inline gap={24} align="top">
              <RecipeRecommend onResults={setRecommendedRecipes} limit={6} />
              <RecipeGallery recipes={recommendedRecipes} />
            </Inline>
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
                    textClassName="text-lg-bold"
                    color="var(--color-dark-500)"
                    align="center"
                  >
                    Recommended For You
                  </Heading>
                </Inline>
              </Stack>
            </header>
            <Stack gap={24}>
              <RecipeRecommend onResults={setRecipes} limit={6} />
              <RecipeGallery recipes={recipes} />
            </Stack>
          </Stack>
        </div>
      </Page>
    );
  },
};
