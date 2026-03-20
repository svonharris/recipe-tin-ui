import React from "react";
import style from "./ButtonIcon.module.css";
import "../../styles/buttons.css";
import Stack from "../Stack/Stack";

type ButtonIconProps = {
  children?: React.ReactNode;
  icon: React.ReactElement<{ size?: number; color?: string }>;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  rounded?: boolean;

  size?: "xl" | "lg" | "md" | "sm";
  variant?: "primary" | "secondary" | "tertiary" | "primaryGhost";
};

const SIZE: Record<
  "xl" | "lg" | "md" | "sm",
  { className: string; px: number }
> = {
  xl: { className: `${style.icon} ${style.iconXl}`, px: 48 },
  lg: { className: `${style.icon} ${style.iconLg}`, px: 28 },
  md: { className: `${style.icon} ${style.iconMd}`, px: 24 },
  sm: { className: `${style.icon} ${style.iconSm}`, px: 20 },
};

const VARIANT_STYLES: Record<
  "primary" | "secondary" | "tertiary" | "primaryGhost",
  string
> = {
  primary: "primaryButton",
  secondary: "secondaryButton",
  tertiary: "tertiaryButton",
  primaryGhost: "primaryGhost",
};

const DISABLED_STYLES: Record<"outline" | "filled", string> = {
  outline: "disabledOutline",
  filled: "disabledFilled",
};

const ButtonIcon = ({
  children,
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
    <Stack gap={8} align="center">
      <button
        className={`buttonBase ${SIZE[size].className}  
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
      {children && <p className="text-md-regular">{children}</p>}
    </Stack>
  );
};

export default ButtonIcon;
