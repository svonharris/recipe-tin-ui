import type { Meta, StoryObj } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "Components/Charts/Progress Bar",
  component: ProgressBar,
  argTypes: {
    value: {
      description:
        "The current value of the progress bar. Should be between `0` and `maxValue`.",
    },
    maxValue: {
      description:
        "The maximum value of the progress bar. Determines the scale for the `value` prop.",
    },
    trackColor: {
      description:
        "CSS color value for the unfilled track background (e.g. `var(--color-secondary-100)`).",
    },
    valueColor: {
      description:
        "CSS color value for the filled progress indicator (e.g. `var(--color-secondary-500)`).",
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {
    value: 10,
    maxValue: 50,
    trackColor: "var(--color-secondary-100)",
    valueColor: "var(--color-secondary-500)",
  },
};
