import React from "react";
import style from "./NavBar.module.css";

type NavItem = {
  name: string;
  icon: React.ReactElement<{ size?: number; color?: string }>;
  to: string;
};

export type NavBarProps = {
  navItems: NavItem[];
  linkComponent?: React.ElementType;
};

const NavBar = ({ navItems, linkComponent }: NavBarProps) => {
  const LinkComponent = linkComponent ?? "a";

  return (
    <nav aria-label="Main Navigation">
      <ul className={style.navList}>
        {navItems.map((item) => {
          const linkProps = linkComponent
            ? { to: item.to }
            : { href: item.to };

          return (
            <li key={item.to}>
              <LinkComponent {...linkProps} className={style.navLink}>
                {React.cloneElement(item.icon, {
                  size: 28,
                  color: "inherit",
                })}
                <p className="text-md-regular">{item.name}</p>
              </LinkComponent>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { NavBar };
export default NavBar;
