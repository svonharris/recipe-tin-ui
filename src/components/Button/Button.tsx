import React from "react";
import style from "./Button.module.css";
import "../../styles/buttons.css";

export type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactElement<{ size?: number; color?: string }>;
  onClick?: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  rounded?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "primary" | "secondary" | "primaryGhost";
};

const SIZE: Record<"lg" | "md" | "sm", { className: string; px: number }> = {
  lg: { className: `${style.sizeLg}`, px: 28 },
  md: { className: `${style.sizeMd}`, px: 24 },
  sm: { className: `${style.sizeSm}`, px: 20 },
};

const VARIANT_STYLES: Record<"primary" | "secondary" | "primaryGhost", string> =
  {
    primary: "primaryButton",
    secondary: style.secondaryButton,
    primaryGhost: "primaryGhost",
  };

const DISABLED_STYLES: Record<"outline" | "filled", string> = {
  outline: "disabledOutline",
  filled: "disabledFilled",
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
}: ButtonProps) => {
  const isFilled = variant !== "primaryGhost"; // or a Set if variants grow

  return (
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
      {icon &&
        React.cloneElement(icon, {
          size: SIZE[size].px,
          color: "inherit",
        })}
      <p className="text-md-regular">{children}</p>
    </button>
  );
};

export { Button };
export default Button;
