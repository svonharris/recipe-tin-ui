import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "Components/Typography/Heading",
  component: Heading,
  argTypes: {
    htmlElement: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    htmlElement: "h1",
    textClassName: "text-xl-bold",
    color: "var(--color-dark-500)",
    children: "Bruschetta Ricotta Pesto",
  },
};
