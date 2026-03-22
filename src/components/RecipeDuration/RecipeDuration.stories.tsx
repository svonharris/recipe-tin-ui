import type { Meta, StoryObj } from "@storybook/react";
import RecipeDuration from "./RecipeDuration";

const meta = {
  title: "Components/RecipeDuration",
  component: RecipeDuration,
  argTypes: {
    duration: {
      description: "Cook time in minutes. Values over 60 are formatted as hours and minutes (e.g. `1h 15min`). A value of `0` or less displays `n/a`.",
    },
  },
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
