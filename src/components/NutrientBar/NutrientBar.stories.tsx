import type { Meta, StoryObj } from "@storybook/react";
import NutrientBar from "./NutrientBar";

const meta = {
  title: "Components/Charts/Nutrient Bar",
  component: NutrientBar,
  argTypes: {
    macronutrient: {
      options: ["protein", "carb", "fat"],
      control: { type: "select" },
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
