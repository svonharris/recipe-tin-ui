import type { Meta, StoryObj } from "@storybook/react";
import RecipeCard from "./RecipeCard";

const meta = {
  title: "Components/RecipeCard",
  component: RecipeCard,
  argTypes: {
    title: {
      description: "The recipe name displayed as a heading on the card.",
    },
    image: {
      description: "URL of the recipe image.",
    },
    cookTime: {
      description: "Cook time in minutes. Displayed via `RecipeDuration` — values over 60 are formatted as hours and minutes, `0` displays `n/a`.",
    },
    ratings: {
      description: "The recipe's average rating between 0 and 5. Displayed as filled stars.",
    },
    reviews: {
      description: "The total number of reviews displayed alongside the star rating.",
    },
  },
} satisfies Meta<typeof RecipeCard>;

export default meta;
type Story = StoryObj<typeof RecipeCard>;

export const Default: Story = {
  args: {
    title: "Bruschetta Ricotta Pesto",
    image: "../bruschetta.jpeg",
    cookTime: 30,
    ratings: 4.5,
    reviews: 120,
  },
  render: (args) => (
    <div style={{ maxWidth: "375px" }}>
      <RecipeCard {...args} />
    </div>
  ),
};
