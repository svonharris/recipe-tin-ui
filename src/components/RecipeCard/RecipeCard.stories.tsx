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
