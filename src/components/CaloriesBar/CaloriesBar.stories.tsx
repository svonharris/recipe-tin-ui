import type { Meta, StoryObj } from "@storybook/react";
import CaloriesBar from "./CaloriesBar";
import NutrientBar from "../NutrientBar/NutrientBar";
import Inline from "../Inline/Inline";

const meta = {
  title: "Components/Charts/CaloriesBar",
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
          value={97}
          totalCalories={3414}
          macronutrient={"protein"}
        />
        <NutrientBar value={401} totalCalories={3414} macronutrient={"carb"} />
        <NutrientBar value={147} totalCalories={3414} macronutrient={"fat"} />
        <CaloriesBar {...args} />
      </Inline>
      <p
        className="text-sm-regular"
        style={{ marginTop: "12px", color: "var(--color-gray-800)" }}
      >
        * Calories total shown can be off by up to 3%.
      </p>
    </>
  ),
};
