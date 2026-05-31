import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";
import Heading from "../Heading/Heading";

const meta = {
  title: "Components/Layout/Container",
  component: Container,
  args: {
    htmlElement: "div",
    paddingLeft: 16,
    paddingRight: 16,
  },
  argTypes: {
    children: {
      control: false,
      description: "The content to render inside the container.",
    },
    htmlElement: {
      description: "The HTML element type to render as the container.",
    },
    paddingTop: {
      control: { type: "number" },
      description: "CSS padding applied to the top of the container.",
    },
    paddingBottom: {
      control: { type: "number" },
      description: "CSS padding applied to the bottom of the container.",
    },
    paddingLeft: {
      control: { type: "number" },
      description:
        "CSS padding applied to the left of the container. Defaults to `16px`.",
    },
    paddingRight: {
      control: { type: "number" },
      description:
        "CSS padding applied to the right of the container. Defaults to `16px`.",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    htmlElement: "section",
    paddingTop: 24,
    paddingBottom: 24,
    children: (
      <Heading
        htmlElement="h2"
        textClassName="text-lg-bold"
        color="var(--color-dark-500)"
      >
        Container content
      </Heading>
    ),
  },
  render: (args) => (
    <div style={{ border: "1px solid var(--color-primary-700)" }}>
      <Container {...args} />
    </div>
  ),
};
