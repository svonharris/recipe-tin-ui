import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import Button from "./Button";
import { Gps } from "../icons";

const meta = {
  title: "Components/Buttons/Button",
  component: Button,
  args: { onClick: fn() },
  argTypes: {
    variant: {
      control: false, //renders prop documentation without a control
    },
    disabled: {
      control: false,
    },
    title: {
      table: { disable: true }, //removes prop control
    },
    type: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const DefaultButtons: Story = {
  args: {
    children: (
      <>
        <p className="text-md-medium">Button Icon</p>{" "}
        <button className="baseButton iconOnlyFillLg_background">
          <Gps />
        </button>
        <button className="baseButton iconOnlyFillLg_background" disabled>
          <Gps />
        </button>
        <br></br>
        <p className="text-md-medium">Button Icon with Text Filled</p>{" "}
        <button className="baseButton iconWText">
          <Gps /> Button
        </button>
        <button className="baseButton iconWText" disabled>
          <Gps /> Button
        </button>
        <br></br>
        <p className="text-md-medium">Button Icon with Text Outline</p>{" "}
        <button className="baseButton iconWTextOutline">
          <Gps /> Button
        </button>
        <button className="baseButton iconWTextOutline" disabled>
          <Gps /> Button
        </button>
      </>
    ),
  },
};
