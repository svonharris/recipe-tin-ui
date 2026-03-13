import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import ButtonIcon from "./ButtonIcon";
import { Gps } from "../icons";

const meta = {
  title: "Components/Buttons/Icon Button",
  component: ButtonIcon,
  args: { onClick: fn() },
  argTypes: {
    disabled: {
      control: false,
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

export const Default: Story = {
  args: {
    children: <Gps />,
    title: "GPS Icon Button",
  },
};

export const Disabled: Story = {
  args: {
    children: <Gps />,
    disabled: true,
    title: "Disabled GPS Icon Button",
  },
};
