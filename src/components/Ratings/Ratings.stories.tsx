import type { Meta, StoryObj } from "@storybook/react";
import Ratings from "./Ratings";

const meta = {
  title: "Components/Ratings",
  component: Ratings,
  argTypes: {
    url: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Ratings>;

export default meta;
type Story = StoryObj<typeof Ratings>;

export const ZeroStars: Story = {
  args: {
    url: "/api/ratings",
  },
  beforeEach: async () => {
    global.fetch = async () =>
      new Response(JSON.stringify({ rating: 0, reviews: 50 }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  },
};

export const OneStars: Story = {
  args: {
    url: "/api/ratings",
  },
  beforeEach: async () => {
    global.fetch = async () =>
      new Response(JSON.stringify({ rating: 1, reviews: 300 }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  },
};

export const FiveStars: Story = {
  args: {
    url: "/api/ratings",
  },
  beforeEach: async () => {
    global.fetch = async () =>
      new Response(JSON.stringify({ rating: 5, reviews: 2300 }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  },
};
