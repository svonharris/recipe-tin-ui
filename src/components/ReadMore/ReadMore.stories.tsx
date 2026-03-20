import type { Meta, StoryObj } from "@storybook/react";
import ReadMore from "./ReadMore";

const meta = {
  title: "Components/Containers/Read More",
  component: ReadMore,
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof ReadMore>;

export const LongText: Story = {
  args: {
    text: "Golden, crispy bread toasted in butter with a gooey layer of melted cheese inside. This classic grilled cheese is quick, comforting, and full of rich flavor. Perfect for lunch or a simple snack, especially when paired with a warm bowl of tomato soup.",
    className: "text-md-regular",
  },
};

export const ShortText: Story = {
  args: {
    text: "Fresh mozzarella, ripe tomatoes, and basil layered on crusty bread with olive oil and balsamic drizzle.",
    className: "text-md-regular",
  },
};
