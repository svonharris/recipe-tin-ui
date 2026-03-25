import React from "react";
import style from "./NavBar.module.css";

type NavItem = {
  name: string;
  icon: React.ReactElement<{ size?: number; color?: string }>;
  href: string;
};

export type NavBarProps = {
  navItems: NavItem[];
};

const NavBar = ({ navItems }: NavBarProps) => {
  return (
    <nav aria-label="Main Navigation">
      <ul className={style.navList}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.href} className={style.navLink}>
              {React.cloneElement(item.icon, {
                size: 28,
                color: "inherit",
              })}
              <p className="text-md-regular">{item.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { NavBar };
export default NavBar;
