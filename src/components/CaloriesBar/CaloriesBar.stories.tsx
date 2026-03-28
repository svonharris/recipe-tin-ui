import type { Meta, StoryObj } from "@storybook/react";
import CaloriesBar, { calculateMacroCalories } from "./CaloriesBar";
import NutrientBar from "../NutrientBar/NutrientBar";
import Inline from "../Inline/Inline";

const meta = {
  title: "Components/Charts/Calories Bar",
  component: CaloriesBar,
} satisfies Meta<typeof CaloriesBar>;

export default meta;
type Story = StoryObj<typeof CaloriesBar>;

export const Default: Story = {
  args: {
    protein: 87,
    carb: 150,
    fat: 40,
  },
};

export const Combination: Story = {
  args: {
    protein: 97,
    carb: 401,
    fat: 147,
  },
  render: (args) => (
    <>
      <Inline gap={24}>
        <NutrientBar
          value={args.protein}
          totalCalories={calculateMacroCalories(
            args.protein,
            args.carb,
            args.fat,
          )}
          macronutrient={"protein"}
        />
        <NutrientBar
          value={args.carb}
          totalCalories={calculateMacroCalories(
            args.protein,
            args.carb,
            args.fat,
          )}
          macronutrient={"carb"}
        />
        <NutrientBar
          value={args.fat}
          totalCalories={calculateMacroCalories(
            args.protein,
            args.carb,
            args.fat,
          )}
          macronutrient={"fat"}
        />
        <CaloriesBar {...args} />
      </Inline>
    </>
  ),
};
