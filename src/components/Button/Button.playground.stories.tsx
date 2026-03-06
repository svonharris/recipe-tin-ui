import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Internal/Playground/Button", // hide in internal section
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    children: { description: "The content to be displayed inside the button." },
    variant: {
      control: "radio",
      description: "Determines the visual style of the button.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button and prevents user interaction.",
    },
    title: {
      control: false,
      description:
        "Additional information about the button, often used for accessibility and tooltip.",
    },
    type: {
      description: "Specifies the type of the button.",
    },
    onClick: {
      description: "Fires when the button is pressed.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const PlaygroundDocs: Story = {};
