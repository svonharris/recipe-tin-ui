import type { Meta, StoryObj } from "@storybook/react";
import Container from "./Container";
import Heading from "../Heading/Heading";

const meta = {
  title: "Components/Layout/Container",
  component: Container,
  args: {
    htmlElement: "div",
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: undefined,
    paddingBottom: undefined,
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
      description: "CSS padding applied to the top of the container.",
    },
    paddingBottom: {
      description: "CSS padding applied to the bottom of the container.",
    },
    paddingLeft: {
      description: "CSS padding applied to the left of the container. Defaults to `16px`.",
    },
    paddingRight: {
      description: "CSS padding applied to the right of the container. Defaults to `16px`.",
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    paddingTop: "24px",
    paddingBottom: "24px",
    children: (
      <Heading htmlElement="h2" textClassName="text-lg-bold" color="var(--color-dark-500)">
        Container content
      </Heading>
    ),
  },
};
