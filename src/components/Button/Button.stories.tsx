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
    withIcon: {
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
    variant: "filled",
    withIcon: true,
    icon: <Gps />,
  },
};

export const IconTextOutline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    withIcon: true,
    icon: <Gps />,
  },
};

export const TextFilled: Story = {
  args: {
    ...IconTextFilled.args,
    withIcon: false,
  },
};

export const TextOutline: Story = {
  args: {
    ...IconTextOutline.args,
    withIcon: false,
  },
};
