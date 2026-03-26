import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: {
      description: "URL or path to the image source.",
    },
    borderRadius: {
      control: "text",
      description:
        "CSS border-radius value applied to the image (e.g. `8px`, `10px 50px`).",
    },
    width: {
      control: "text",
      description: "CSS width of the image (e.g. `200px`, `auto`, `100%`).",
    },
    height: {
      control: "text",
      description: "CSS height of the image (e.g. `240px`, `auto`).",
    },
    altText: {
      control: false,
      description:
        "Accessible alt text describing the image for screen readers.",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  argTypes: { borderRadius: { control: false } },
  args: {
    src: "./bruschetta.jpeg",
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
