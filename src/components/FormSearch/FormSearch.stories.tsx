import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FormSearch from "./FormSeach";
import RecipeGallery from "../RecipeGallery/RecipeGallery";

const meta = {
  title: "Components/Forms/FormSearch",
  component: FormSearch,
  argTypes: {
    onResults: { control: false },
  },
} satisfies Meta<typeof FormSearch>;

export default meta;
type Story = StoryObj<typeof FormSearch>;

export const Default: Story = {
  render: () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    return (
      <>
        <FormSearch onResults={setRecipes} />
        <RecipeGallery recipes={recipes} />
      </>
    );
  },
};
