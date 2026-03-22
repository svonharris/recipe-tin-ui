import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import RecipeRecommend from "./RecipeRecommend";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import { pastaRecipes } from "../../mocks/mockRecipes";

const meta = {
  title: "Components/RecipeRecommend",
  component: RecipeRecommend,
  args: {
    limit: 3,
  },
  argTypes: {
    limit: {
      control: false,
      description: "Caps the number of recipes passed to `onResults`. If omitted, all results from the API are returned.",
    },
    onResults: {
      description: "Callback fired with the fetched recipes array. Pass a state setter to forward results to a display component.",
    },
  },
} satisfies Meta<typeof RecipeRecommend>;

export default meta;
type Story = StoryObj<typeof RecipeRecommend>;

export const FakeData: Story = {
  render: () => (
    <div style={{ maxWidth: "375px" }}>
      <RecipeGallery recipes={pastaRecipes} />
    </div>
  ),
};

export const LiveData: Story = {
  render: (args) => {
    const [recipes, setRecipes] = useState<any[]>([]);
    return (
      <div style={{ maxWidth: "375px" }}>
        <RecipeRecommend onResults={setRecipes} limit={args.limit} />
        <RecipeGallery recipes={recipes} />
      </div>
    );
  },
};
