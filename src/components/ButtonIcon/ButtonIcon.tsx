import React from "react";
import style from "./ButtonIcon.module.css";

type ButtonIconProps = {
  icon: React.ReactElement<{ size?: number; color?: string }>;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  rounded?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "primary" | "secondary" | "primaryOutline";
};

const SIZE: Record<"lg" | "md" | "sm", { className: string; px: number }> = {
  lg: { className: `${style.icon} ${style.iconLg}`, px: 28 },
  md: { className: `${style.icon} ${style.iconMd}`, px: 24 },
  sm: { className: `${style.icon} ${style.iconSm}`, px: 20 },
};

const VARIANT_STYLES: Record<
  "primary" | "secondary" | "primaryOutline",
  string
> = {
  primary: style.primaryButton,
  secondary: style.secondaryButton,
  primaryOutline: style.primaryOutline,
};

const ButtonIcon = ({
  icon,
  onClick,
  title,
  type = "button",
  disabled = false,
  rounded = false,
  size = "lg",
  variant = "primary",
}: ButtonIconProps) => {
  return (
    <button
      className={`${SIZE[size].className} ${rounded ? style.rounded : ""} ${
        disabled ? style.disabled : `${VARIANT_STYLES[variant]}`
      }`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {React.cloneElement(icon, {
        size: SIZE[size].px,
        color: "inherit",
      })}
    </button>
  );
};

export default ButtonIcon;
