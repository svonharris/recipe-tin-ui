import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  args: { align: "left" },
  argTypes: {
    htmlElement: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
      description: "The HTML heading tag to render (h1–h6).",
    },
    children: {
      control: "text",
      description: "The heading text content.",
    },
    align: {
      description: "Text alignment of the heading.",
    },
    textClassName: {
      description: "CSS class name for typography styling (e.g. `text-xl-bold`).",
    },
    color: {
      description: "CSS color value applied to the heading text (e.g. `var(--color-dark-500)`).",
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
