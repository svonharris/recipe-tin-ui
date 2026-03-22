import type { Meta, StoryObj } from "@storybook/react";
import Ratings from "./Ratings";

const meta = {
  title: "Components/Ratings",
  component: Ratings,
  argTypes: {
    rating: {
      description: "The rating value between 0 and 5. Rounded to the nearest whole number to determine the number of filled stars.",
    },
    reviews: {
      description: "The total number of reviews displayed alongside the star rating.",
    },
  },
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof Ratings>;

export const ZeroStars: Story = {
  args: {
    rating: 0,
    reviews: 50,
  },
};

export const OneStars: Story = {
  args: {
    rating: 1,
    reviews: 300,
  },
};

export const FiveStars: Story = {
  args: {
    rating: 5,
    reviews: 2300,
  },
};
