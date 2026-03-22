import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  argTypes: {
    children: {
      control: false,
      description: "Content rendered inside the footer, such as copyright text or links.",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    children: (
      <p
        className="text-sm-regular"
        style={{ color: "var(--color-gray-800)", paddingTop: "16px" }}
      >
        &copy; 2024 Recipe Tin UI. All rights reserved.
      </p>
    ),
  },
};
