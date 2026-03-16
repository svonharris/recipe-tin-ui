import type { Meta, StoryObj } from "@storybook/react";
import CaloriesBar from "./CaloriesBar";

const meta = {
  title: "Components/Charts/CaloriesBar",
  component: CaloriesBar,
} satisfies Meta<typeof CaloriesBar>;

export default meta;
type Story = StoryObj<typeof CaloriesBar>;

export const Default: Story = {
  args: {
    calories: 1134,
    protein: 16,
    carb: 65,
    fat: 90,
    proteinColor: "var(--color-secondary-500)",
    carbColor: "var(--color-information-500)",
    fatColor: "var(--color-warning-500)",
  },
};
