import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonIcon from "./ButtonIcon";
import { Gps } from "../../icons";

const meta = {
  title: "Components/Buttons/Icon Button",
  component: ButtonIcon,
  args: { onClick: fn(), size: "lg", disabled: false },
  argTypes: {
    children: {
      control: false, //renders prop documentation without a control
    },
    disabled: {
      control: "boolean",
    },
    title: {
      table: { disable: true },
    },
    type: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const IconFilled: Story = {
  args: {
    children: <Gps />,
    title: "GPS Icon Button",
  },
};

export const IconOutline: Story = {
  args: {
    ...IconFilled.args,
    variant: "outline",
  },
};
