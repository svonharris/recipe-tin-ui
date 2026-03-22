import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { useState } from "react";
import FormSearch from "./FormSearch";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import { pastaRecipes } from "../../mocks/mockRecipes";

const meta = {
  title: "Components/Forms/FormSearch",
  component: FormSearch,
  args: { onSubmit: fn() },
  argTypes: {
    onSubmit: { control: false },
    placeholder: { control: "text" },
    label: { control: "text" },
    hideLabel: { control: "boolean" },
  },
} satisfies Meta<typeof FormSearch>;

export default meta;
type Story = StoryObj<typeof FormSearch>;

export const Default: Story = {
  args: {
    placeholder: "Search for recipes...",
    label: "Recipe Search",
    hideLabel: true,
  },
};

export const WithResults: Story = {
  argTypes: {
    label: { control: false },
    hideLabel: { control: false },
  },
  args: {
    ...Default.args,
    placeholder: "pasta",
  },
  render: (args) => {
    const [results, setResults] = useState(pastaRecipes);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "375px",
        }}
      >
        <FormSearch {...args} onSubmit={() => setResults(pastaRecipes)} />
        <RecipeGallery recipes={results} />
      </div>
    );
  },
};
