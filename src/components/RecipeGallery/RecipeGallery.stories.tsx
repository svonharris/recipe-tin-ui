import type { Meta, StoryObj } from "@storybook/react";
import RecipeGallery from "./RecipeGallery";
import { pastaRecipes } from "../../mocks/mockRecipes";

const meta = {
  title: "Components/RecipeGallery",
  component: RecipeGallery,
  argTypes: {
    recipes: {
      control: false,
      description: "Array of recipe objects to render as RecipeCards. Each item requires `label`, `images.REGULAR.url`, and `totalTime`.",
    },
  },
} satisfies Meta<typeof RecipeGallery>;

export default meta;
type Story = StoryObj<typeof RecipeGallery>;

export const Default: Story = {
  args: {
    recipes: pastaRecipes,
  },
  render: (args) => (
    <div style={{ maxWidth: "375px" }}>
      <RecipeGallery {...args} />
    </div>
  ),
};
