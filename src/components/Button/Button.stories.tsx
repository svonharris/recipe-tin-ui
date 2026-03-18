import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Button from "./Button";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  args: { onClick: fn(), disabled: false },
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    disabled: {
      control: "boolean",
    },
    title: {
      table: { disable: true }, //removes prop control
    },
    type: {
      table: { disable: true },
    },
    icon: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const IconTextFilled: Story = {
  args: {
    children: "Button",
    icon: <Gps />,
    variant: "primary",
  },
};

export const IconTextOutline: Story = {
  args: {
    children: "Button",
    icon: <Gps />,
    variant: "primaryOutline",
  },
};

export const TextFilled: Story = {
  args: {
    ...IconTextFilled.args,
    icon: undefined,
  },
};

export const TextOutline: Story = {
  args: {
    ...IconTextOutline.args,
    icon: undefined,
  },
};
