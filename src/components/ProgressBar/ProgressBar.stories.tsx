import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "Components/Charts/Progress Bar",
  component: ProgressBar,
  argTypes: {
    value: {
      description: "The fill percentage of the progress bar, from `0` to `100`.",
    },
    trackColor: {
      description: "CSS color value for the unfilled track background (e.g. `var(--color-secondary-100)`).",
    },
    valueColor: {
      description: "CSS color value for the filled progress indicator (e.g. `var(--color-secondary-500)`).",
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 65,
    trackColor: "var(--color-secondary-100)",
    valueColor: "var(--color-secondary-500)",
  },
};
