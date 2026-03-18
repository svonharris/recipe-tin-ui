import React from "react";
import style from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactElement<{ size?: number; color?: string }>;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  rounded?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "primary" | "secondary" | "primaryOutline";
};

const SIZE: Record<"lg" | "md" | "sm", { className: string; px: number }> = {
  lg: { className: `${style.sizeLg}`, px: 28 },
  md: { className: `${style.sizeMd}`, px: 24 },
  sm: { className: `${style.sizeSm}`, px: 20 },
};

const VARIANT_STYLES: Record<
  "primary" | "secondary" | "primaryOutline",
  string
> = {
  primary: style.primaryButton,
  secondary: style.secondaryButton,
  primaryOutline: style.primaryOutline,
};

const Button = ({
  children,
  icon,
  onClick,
  title,
  type = "button",
  disabled = false,
  rounded = false,
  size = "lg",
  variant = "primary",
}: ButtonProps) => (
  <button
    className={`${style.baseButton} ${SIZE[size].className} ${
      rounded ? style.rounded : ""
    } ${disabled ? style.disabled : `${VARIANT_STYLES[variant]}`}`}
    onClick={onClick}
    type={type}
    disabled={disabled}
    title={title}
  >
    {icon &&
      React.cloneElement(icon, {
        size: SIZE[size].px,
        color: "inherit",
      })}
    <span className="text-md-regular">{children}</span>
  </button>
);

export default Button;
