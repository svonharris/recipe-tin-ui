import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FormInput from "./FormInput";
import { Search01 } from "../../icons";

const meta = {
  title: "Components/Forms/FormInput",
  component: FormInput,
  argTypes: {
    id: { control: false },
    icon: { table: { disable: true } },
    onChange: { control: false },
    value: { control: false },
    type: { control: false },
    required: { control: false },
    error: { control: false },
    hideLabel: { control: false },
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? "");
    return (
      <FormInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
} satisfies Meta<typeof FormInput>;

export default meta;
type Story = StoryObj<typeof FormInput>;

export const Default: Story = {
  args: {
    id: "default",
    label: "Full Name",
    value: "",
    placeholder: "Luke Skywalker",
    disabled: false,
  },
};

export const WithIcon: Story = {
  argTypes: { disabled: { control: false } },
  args: {
    ...Default.args,
    id: "with-icon",
    icon: <Search01 />,
  },
};

export const Required: Story = {
  argTypes: { disabled: { control: false } },
  args: {
    ...Default.args,
    id: "required",
    required: true,
  },
};

export const ErrorMessage: Story = {
  argTypes: { disabled: { control: false } },
  args: {
    ...Default.args,
    id: "with-error",
    error: "This field is required",
  },
};

export const HiddenLabel: Story = {
  argTypes: { disabled: { control: false } },
  args: {
    ...Default.args,
    id: "hidden-label",
    icon: <Search01 />,
    hideLabel: true,
    placeholder: "Search",
  },
};

export const Disabled: Story = {
  argTypes: { disabled: { control: false } },
  args: {
    ...Default.args,
    id: "disabled",
    disabled: true,
    hideLabel: true,
  },
};
