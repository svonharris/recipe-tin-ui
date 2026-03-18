import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonIcons from "./ButtonIcons";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Icon Buttons",
  component: ButtonIcons,
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
  },
} satisfies Meta<typeof ButtonIcons>;

export default meta;
type Story = StoryObj<typeof ButtonIcons>;

export const Default: Story = {
  args: {
    icon: <Gps />,
    title: "GPS Icon Button",
    iconColor: "var(--color-white)",
    buttonColor: "var(--color-primary-500)",
    buttonColorHover: "var(--color-primary-600)",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
