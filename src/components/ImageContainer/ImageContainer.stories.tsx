import type { Meta, StoryObj } from "@storybook/react";
import ImageContainer from "./ImageContainer";
import Image from "../Image/Image";

const meta = {
  title: "Components/Layout/ImageContainer",
  component: ImageContainer,
  args: {
    width: "50%",
    height: "250px",
    minWidth: "300px",
  },
  argTypes: {
    children: {
      control: false,
      description: "The image element to display inside the container.",
    },
    width: {
      description: "Width of the container.",
    },
    height: {
      description: "Height of the container.",
    },
    minWidth: {
      description: "Minimum width of the container.",
    },
  },
} satisfies Meta<typeof ImageContainer>;

export default meta;
type Story = StoryObj<typeof ImageContainer>;

export const Default: Story = {
  args: {
    children: (
      <Image
        src="./pasta-primavera.jpg"
        altText="Bruschetta with ricotta and pesto"
        width="90%"
        height="90%"
        objectFit="cover"
        borderRadius="var(--border-radius-lg)"
      />
    ),
  },
};
