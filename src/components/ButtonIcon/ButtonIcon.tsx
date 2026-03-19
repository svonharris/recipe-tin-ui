import React from "react";
import style from "./ButtonIcon.module.css";

type ButtonIconProps = {
  icon: React.ReactElement<{ size?: number; color?: string }>;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  rounded?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "primary" | "secondary" | "primaryGhost";
};

const SIZE: Record<"lg" | "md" | "sm", { className: string; px: number }> = {
  lg: { className: `${style.icon} ${style.iconLg}`, px: 28 },
  md: { className: `${style.icon} ${style.iconMd}`, px: 24 },
  sm: { className: `${style.icon} ${style.iconSm}`, px: 20 },
};

const VARIANT_STYLES: Record<"primary" | "secondary" | "primaryGhost", string> =
  {
    primary: style.primaryButton,
    secondary: style.secondaryButton,
    primaryGhost: style.primaryGhost,
  };

const DISABLED_STYLES: Record<"outline" | "filled", string> = {
  outline: style.disabledOutline,
  filled: style.disabledFilled,
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
  const isFilled = variant !== "primaryGhost"; // or a Set if variants grow

  return (
    <button
      className={`${SIZE[size].className} 
      ${rounded ? style.rounded : ""} 
      ${
        disabled
          ? DISABLED_STYLES[isFilled ? "filled" : "outline"]
          : VARIANT_STYLES[variant]
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
