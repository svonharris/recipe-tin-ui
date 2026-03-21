import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonIcon from "./ButtonIcon";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Icon Buttons",
  component: ButtonIcon,
  args: { onClick: fn(), size: "lg" },
  argTypes: {
    children: { control: false },
    title: {
      table: { disable: true },
    },
    type: {
      table: { disable: true },
    },
    icon: {
      control: false,
    },
    rounded: {
      control: false,
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "primaryGhost"],
    },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Default: Story = {
  argTypes: {
    disabled: { control: false },
  },
  args: {
    icon: <Gps />,
    title: "GPS Icon Button",
    variant: "primary",
  },
};

export const Ghost: Story = {
  argTypes: {
    variant: { control: false },
    disabled: { control: false },
  },
  args: {
    ...Default.args,
    variant: "primaryGhost",
  },
};

export const WithLabel: Story = {
  argTypes: {
    disabled: { control: false },
  },
  args: {
    icon: <Gps />,
    title: "GPS Icon Button",
    variant: "tertiary",
    children: "Discover Recipes",
  },
};

export const Rounded: Story = {
  argTypes: {
    variant: { control: false },
    disabled: { control: "boolean" },
  },
  args: {
    ...Default.args,
    rounded: true,
    disabled: false,
  },
};

export const DisabledDefault: Story = {
  argTypes: {
    variant: { control: false },
    disabled: { control: false },
  },
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const DisabledGhost: Story = {
  argTypes: {
    variant: { control: false },
    disabled: { control: false },
  },
  args: {
    ...Default.args,
    disabled: true,
    variant: "primaryGhost",
  },
};
