import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../NavBar/NavBar";
import { Home04, Compass, Search01 } from "../../icons";

const meta = {
  title: "Components/Navigation",
  component: NavBar,
  argTypes: {
    navItems: { control: false },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    navItems: [
      { name: "Home", icon: <Home04 />, href: "/" },
      { name: "Discover", icon: <Compass />, href: "/discover" },
      { name: "Search", icon: <Search01 />, href: "/search" },
    ],
  },
};
