import type { Meta, StoryObj } from "@storybook/react";
import RecipeDuration from "./RecipeDuration";

const meta = {
  title: "Components/RecipeDuration",
  component: RecipeDuration,
} satisfies Meta<typeof RecipeDuration>;

export default meta;
type Story = StoryObj<typeof RecipeDuration>;

export const NoTime: Story = {
  args: {
    duration: 0,
  },
};

export const Minutes: Story = {
  args: {
    duration: 20,
  },
};

export const Hours: Story = {
  args: {
    duration: 75,
  },
};
