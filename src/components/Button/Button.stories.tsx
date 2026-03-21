import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Button from "./Button";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  args: { onClick: fn(), size: "lg" },
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    disabled: {
      control: "boolean",
    },
    rounded: {
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

export const DefaultText: Story = {
  args: {
    children: "Button",
    icon: undefined,
    title: "Text Button",
    variant: "primary",
    disabled: false,
    rounded: false,
  },
};

export const GhostText: Story = {
  args: {
    ...DefaultText.args,
    icon: undefined,
    variant: "primaryGhost",
  },
};

export const DefaultTextWithIcon: Story = {
  args: {
    ...DefaultText.args,
    icon: <Gps />,
    title: "GPS Icon with text Button",
    variant: "primary",
  },
};

export const GhostTextWithIcon: Story = {
  args: {
    ...DefaultText.args,
    icon: <Gps />,
    title: "GPS Icon with text Button",
    variant: "primaryGhost",
  },
};

export const DisabledPrimary: Story = {
  args: {
    ...DefaultText.args,
    icon: <Gps />,
    title: "GPS Icon with text Button",
    variant: "primary",
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    ...DefaultText.args,
    icon: <Gps />,
    title: "GPS Icon with text Button",
    variant: "primaryGhost",
    disabled: true,
  },
};
