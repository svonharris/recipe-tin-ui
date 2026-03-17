import type { Meta, StoryObj } from "@storybook/react";
import RecipeGallery from "./RecipeGallery";

const meta = {
  title: "Components/RecipeGallery",
  component: RecipeGallery,
} satisfies Meta<typeof RecipeGallery>;

export default meta;
type Story = StoryObj<typeof RecipeGallery>;

const mockRecipes = [
  {
    recipe: {
      label: "Bruschetta Ricotta Pesto",
      images: { REGULAR: { url: "../bruschetta.jpeg" } },
      totalTime: 20,
    },
  },
  {
    recipe: {
      label: "Pasta Primavera",
      images: { REGULAR: { url: "../pasta-primavera.jpg" } },
      totalTime: 90,
    },
  },
  {
    recipe: {
      label: "Avocado Toast",
      images: { REGULAR: { url: "../avocado-toast.jpg" } },
      totalTime: 0,
    },
  },
];

export const Default: Story = {
  args: {
    recipes: mockRecipes,
  },
};
