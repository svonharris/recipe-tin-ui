import type { Meta, StoryObj } from "@storybook/react";
import NutrientBar from "./NutrientBar";

const meta = {
  title: "Components/Charts/Nutrient Bar",
  component: NutrientBar,
  argTypes: {
    macronutrient: {
      options: ["protein", "carb", "fat"],
      control: { type: "select" },
      description: "The macronutrient type. Determines the bar colour. Use `protein`, `carb`, or `fat` for themed colours; any other string renders a default colour.",
    },
    value: {
      description: "The amount of the macronutrient in grams displayed on the bar.",
    },
  },
} satisfies Meta<typeof NutrientBar>;

export default meta;
type Story = StoryObj<typeof NutrientBar>;

export const Default: Story = {
  args: {
    value: 65,
    macronutrient: "protein",
  },
};

export const CustomMacronutrient: Story = {
  args: {
    value: 50,
    macronutrient: "fiber",
  },
};
