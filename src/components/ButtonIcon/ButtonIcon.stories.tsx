import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonIcon from "./ButtonIcon";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Icon Buttons",
  component: ButtonIcon,
  args: { onClick: fn(), size: "lg" },
  argTypes: {
    children: {
      control: false,
      description: "Optional label rendered below the icon button.",
    },
    title: {
      table: { disable: true },
    },
    type: {
      table: { disable: true },
    },
    icon: {
      control: false,
      description: "The icon element to display inside the button. Scales automatically with the `size` prop.",
    },
    rounded: {
      control: false,
      description: "When `true`, applies fully rounded corners to the button.",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "primaryGhost"],
      description: "Controls the visual style of the button.",
    },
    onClick: {
      description: "Callback fired when the button is clicked.",
    },
    size: {
      description: "Controls the size of the button and scales the icon to match.",
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
