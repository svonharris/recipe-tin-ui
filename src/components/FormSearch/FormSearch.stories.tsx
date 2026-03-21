import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import FormSearch from "./FormSearch";

const meta = {
  title: "Components/Forms/FormSearch",
  component: FormSearch,
  args: { onSubmit: fn() },
  argTypes: {
    onSubmit: { control: false },
    placeholder: { control: "text" },
    label: { control: "text" },
    hideLabel: { control: "boolean" },
  },
} satisfies Meta<typeof FormSearch>;

export default meta;
type Story = StoryObj<typeof FormSearch>;

export const Default: Story = {
  args: {
    placeholder: "Search for recipes...",
    label: "Recipe Search",
    hideLabel: true,
  },
};
