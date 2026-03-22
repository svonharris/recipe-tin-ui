import type { Meta, StoryObj } from "@storybook/react";
import IngredientsItem from "./IngredientsItem";

const meta = {
  title: "Components/Ingredients Item",
  component: IngredientsItem,
  argTypes: {
    name: {
      description: "The name of the ingredient.",
    },
    amount: {
      description: "The quantity or measurement of the ingredient (e.g. `3tbsp`, `200g`).",
    },
  },
} satisfies Meta<typeof IngredientsItem>;

export default meta;
type Story = StoryObj<typeof IngredientsItem>;

export const Default: Story = {
  args: {
    name: "olive oil",
    amount: "3tbsp",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "250px" }}>
        <Story />
      </div>
    ),
  ],
};
