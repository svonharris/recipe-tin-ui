import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    borderRadius: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    altText: { control: false },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  argTypes: { borderRadius: { control: false } },
  args: {
    src: "/bruschetta.jpeg",
    altText: "Bruschetta Ricotta Pesto",
    width: "auto",
    height: "240px",
  },
};

export const RoundedBorders: Story = {
  args: {
    ...Default.args,
    borderRadius: "10px 50px",
  },
};
