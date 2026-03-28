import type { Meta, StoryObj } from "@storybook/react";
import NutrientBar from "./NutrientBar";

const meta = {
  title: "Components/Charts/Nutrient Bar",
  component: NutrientBar,
  argTypes: {
    macronutrient: {
      description:
        "The macronutrient type. Determines the bar colour. Use `protein`, `carb`, or `fat` for themed colours; any other string renders a default colour.",
    },
    value: {
      description:
        "The amount of the macronutrient in grams. Converted to calories internally to determine the bar fill proportion.",
    },
    totalCalories: {
      description:
        "The total calories of the recipe. Used to calculate each macronutrient's caloric contribution as a proportion of the whole.",
    },
  },
} satisfies Meta<typeof NutrientBar>;

export default meta;
type Story = StoryObj<typeof NutrientBar>;

export const Default: Story = {
  argTypes: {
    macronutrient: {
      options: ["protein", "carb", "fat"],
      control: { type: "select" },
    },
  },
  args: {
    value: 10,
    totalCalories: 120,
    macronutrient: "protein",
  },
};

export const CustomMacronutrient: Story = {
  args: {
    value: 50,
    totalCalories: 100,
    macronutrient: "fiber",
  },
};
