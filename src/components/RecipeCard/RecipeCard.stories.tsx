import type { Meta, StoryObj } from "@storybook/react";
import RecipeCard from "./RecipeCard";

const meta = {
  title: "Components/RecipeCard",
  component: RecipeCard,
} satisfies Meta<typeof RecipeCard>;

export default meta;
type Story = StoryObj<typeof RecipeCard>;

export const Default: Story = {
  args: {
    title: "Bruschetta Ricotta Pesto",
    image: "../Bruschetta-Ricotta-Pesto.jpg",
  },
};
