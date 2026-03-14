import type { Meta, StoryObj } from "@storybook/react";
import Page from "./Page";
import Image from "../Image/Image";
import { ClockCircle } from "../../icons";
import Ratings from "../Ratings/Ratings";
import styles from "./Page.module.css";

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
        <div className={styles.info}>
          <Ratings url="/api/ratings" />
          <div className={`text-xs-regular ${styles.cookTime}`}>
            <ClockCircle size={16} color="var(--color-gray-500)" />
            <p className={styles.cookTimeText}>20 min</p>
          </div>
        </div>
        <div className={`text-xl-bold ${styles.recipeTitle}`}>
          Bruschetta Ricotta Pesto
        </div>
        <hr className={styles.divider} />
        <div className={styles.recipeDescription}>
          <p className={`text-lg-bold ${styles.recipeDescriptionTitle}`}>
            Description
          </p>
          <p className={`text-md-regular ${styles.recipeDescriptionContent}`}>
            This bruschetta recipe is a delicious and easy appetizer that
            combines the flavors of fresh tomatoes, creamy ricotta cheese, and
            fragrant basil pesto. Perfect for entertaining or as a light snack,
            this dish is sure to impress your guests with its vibrant colors and
            bold flavors...{" "}
            <span className={styles.recipeDescriptionReadMore}>read more</span>
          </p>
        </div>
        <div className={styles.nutrition}>
          <div
            className={`${styles.nutritionProgress} ${styles.nutritionProtein}`}
          >
            <progress id="protein" value="16" max="100"></progress>
            <label htmlFor="protein">
              <p className={`text-lg-bold ${styles.nutritionAmount}`}>16g</p>
              <p className={`text-sm-regular ${styles.nutritionLabel}`}>
                protein
              </p>
            </label>
          </div>
          <div
            className={`${styles.nutritionProgress} ${styles.nutritionCarb}`}
          >
            <progress id="carb" value="65" max="100"></progress>
            <label htmlFor="carb">
              <p className={`text-lg-bold ${styles.nutritionAmount}`}>65g</p>
              <p className={`text-sm-regular ${styles.nutritionLabel}`}>carb</p>
            </label>
          </div>
          <div className={`${styles.nutritionProgress} ${styles.nutritionFat}`}>
            <progress id="fat" value="90" max="100"></progress>
            <label htmlFor="fat">
              <p className={`text-lg-bold ${styles.nutritionAmount}`}>90g</p>
              <p className={`text-sm-regular ${styles.nutritionLabel}`}>fat</p>
            </label>
          </div>
          <div
            className={`${styles.nutritionProgress} ${styles.nutritionCalories}`}
          >
            <progress id="calories" value="1134" max="2000"></progress>
            <label htmlFor="calories">
              <p className={`text-lg-bold ${styles.nutritionAmount}`}>1134</p>
              <p className={`text-sm-regular ${styles.nutritionLabel}`}>
                calories
              </p>
            </label>
          </div>
        </div>
        <div className={styles.ingredients}>
          <p className={`text-lg-bold ${styles.ingredientsTitle}`}>
            Ingredients
          </p>
          <div className={styles.ingredientsItem}>
            <div className={`text-md-bold ${styles.ingredientsName}`}>
              olive oil
            </div>
            <div className={`text-sm-regular ${styles.ingredientsAmount}`}>
              3 tbsp
            </div>
          </div>
          <div className={styles.ingredientsItem}>
            <div className={`text-md-bold ${styles.ingredientsName}`}>
              cherry tomatoes
            </div>
            <div className={`text-sm-regular ${styles.ingredientsAmount}`}>
              15 tomatoes
            </div>
          </div>
        </div>
        <div className={styles.instructions}>
          <p className={`text-lg-bold ${styles.instructionsTitle}`}>
            Instructions
          </p>
          <p className={`text-md-regular ${styles.instructionsContent}`}>
            Follow these steps to prepare the dish.
          </p>
        </div>
      </div>
    ),
  },
};
