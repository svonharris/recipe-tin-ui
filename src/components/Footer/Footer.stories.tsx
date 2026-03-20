import type { Meta, StoryObj } from "@storybook/react";
import Footer from "./Footer";

const meta = {
  title: "Components/Containers/Footer",
  component: Footer,
  argTypes: {
    children: { control: "text" },
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
        &copy; 2024 The Recipe Tin. All rights reserved.
      </p>
    ),
  },
};
