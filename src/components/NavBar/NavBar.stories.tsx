import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../NavBar/NavBar";
import { Home04, Compass, Search01 } from "../../icons";

const meta = {
  title: "Components/Navigation",
  component: NavBar,
  argTypes: {
    navItems: {
      control: false,
      description: "Array of navigation items, each with a `name`, `icon`, and `to`.",
    },
    linkComponent: {
      control: false,
      description:
        "The link component to render. Defaults to a plain `<a>` tag. Pass your router's link component (e.g. `NavLink` from React Router) to enable client-side navigation.",
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    navItems: [
      { name: "Home", icon: <Home04 />, to: "/" },
      { name: "Discover", icon: <Compass />, to: "/discover" },
      { name: "Search", icon: <Search01 />, to: "/search" },
    ],
  },
};
