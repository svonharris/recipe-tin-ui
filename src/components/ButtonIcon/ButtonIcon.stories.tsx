import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonIcon from "./ButtonIcon";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Icon Buttons",
  component: ButtonIcon,
  args: { onClick: fn(), size: "lg" },
  argTypes: {
    title: {
      table: { disable: true },
    },
    type: {
      table: { disable: true },
    },
    icon: {
      control: false,
    },
    disabled: {
      control: false,
    },
    rounded: {
      control: false,
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "primaryOutline"],
    },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  args: {
    icon: <Gps />,
    title: "GPS Icon Button",
    variant: "primary",
  },
};

export const Outline: Story = {
  argTypes: {
    variant: { control: false },
  },
  args: {
    ...Default.args,
    variant: "primaryOutline",
  },
};

export const Rounded: Story = {
  argTypes: {
    variant: { control: false },
  },
  args: {
    ...Default.args,
    rounded: true,
  },
};

export const Disabled: Story = {
  argTypes: {
    variant: { control: false },
  },
  args: {
    ...Default.args,
    disabled: true,
  },
};
