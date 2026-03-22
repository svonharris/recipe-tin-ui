import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import FormInput from "./FormInput";
import { Search01 } from "../../icons";

const meta = {
  title: "Components/Forms/FormInput",
  component: FormInput,
  argTypes: {
    id: {
      control: false,
      description: "Unique identifier that links the input to its label for accessibility.",
    },
    icon: { table: { disable: true } },
    onChange: {
      control: false,
      description: "Callback fired on every keystroke with the change event.",
    },
    value: {
      control: false,
      description: "The controlled value of the input.",
    },
    type: {
      control: false,
      description: "The HTML input type (e.g. `text`, `email`, `password`, `search`).",
    },
    required: {
      control: false,
      description: "When `true`, marks the field as required and displays an asterisk next to the label.",
    },
    error: {
      control: false,
      description: "Error message displayed below the input. Also applies an error style to the input border.",
    },
    hideLabel: {
      control: false,
      description: "When `true`, visually hides the label while keeping it accessible to screen readers.",
    },
    label: {
      description: "Visible label text displayed above the input.",
    },
    placeholder: {
      description: "Hint text shown inside the input when it has no value.",
    },
    disabled: {
      description: "When `true`, the input is non-interactive and styled to appear unavailable.",
    },
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
