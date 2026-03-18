import React, { useState } from "react";
import style from "./ButtonIcons.module.css";

type ButtonIconProps = {
  icon: React.ReactElement<{ size?: number; color?: string }>;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
  iconColor?: string;
  buttonColor?: string;
  buttonColorHover?: string;
};

const SIZE: Record<"lg" | "md" | "sm", { className: string; px: number }> = {
  lg: { className: `${style.iconLg}`, px: 24 },
  md: { className: `${style.iconMd}`, px: 20 },
  sm: { className: `${style.iconSm}`, px: 18 },
};

const ButtonIcons = ({
  icon,
  onClick,
  title,
  type = "button",
  disabled = false,
  size = "lg",
  iconColor,
  buttonColor,
  buttonColorHover,
}: ButtonIconProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`${SIZE[size].className} ${disabled ? style.disabled : ""}`}
      style={{
        backgroundColor: disabled
          ? undefined
          : isHovered && buttonColorHover
          ? buttonColorHover
          : buttonColor,
      }}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.cloneElement(icon, {
        size: SIZE[size].px,
        color: disabled ? "var(--color-gray-400)" : `${iconColor}`,
      })}
    </button>
  );
};

export default ButtonIcons;
