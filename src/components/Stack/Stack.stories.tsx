import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import { ClockCircle } from "../../icons";

const meta = {
  title: "Components/Layout/Stack",
  component: Stack,
  args: {
    align: "top",
  },
  argTypes: {
    children: {
      control: false,
      description: "The elements to stack vertically.",
    },
    align: {
      description: "Horizontal alignment of children along the cross axis.",
    },
    justify: {
      description: "Vertical distribution of children along the main axis (`between` or `around`). Omit to use default flow.",
    },
    gap: {
      description: "Spacing between children in pixels.",
    },
  },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  args: {
    gap: 16,
    children: (
      <>
        <Image
          src="../bruschetta.jpeg"
          altText="Bruschetta with ricotta and pesto"
          width={"200px"}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <ClockCircle size={16} color="var(--color-gray-800)" />
          <p
            className={`text-xs-regular`}
            style={{
              color: "var(--color-gray-800)",
              textTransform: "capitalize",
              paddingTop: "2px",
            }}
          >
            20 min
          </p>
        </div>
        <Heading
          htmlElement="h1"
          textClassName="text-xl-bold"
          color="var(--color-dark-500)"
        >
          Bruschetta Ricotta Pesto
        </Heading>
      </>
    ),
  },
};
