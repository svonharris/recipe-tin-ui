import type { Meta, StoryObj } from "@storybook/react";
import Inline from "./Inline";
import Heading from "../Heading/Heading";
import Image from "../Image/Image";
import { ClockCircle } from "../../icons";

const meta = {
  title: "Components/Layout/Inline",
  component: Inline,
  args: {
    align: "center",
  },
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Inline>;

export default meta;
type Story = StoryObj<typeof Inline>;

export const Default: Story = {
  args: {
    gap: 16,
    children: (
      <>
        <Image
          src="../Bruschetta-Ricotta-Pesto.jpg"
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
