import type { Meta, StoryObj } from "@storybook/react";
import Page from "./Page";
import { Gps } from "../icons";

const meta = {
  title: "Components/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {
  args: {
    children: <p>Primary Page</p>,
  },
};

export const HeadingOne: Story = {
  args: {
    children: <h1>Primary Page</h1>,
  },
};

export const ParagraphSmall: Story = {
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
