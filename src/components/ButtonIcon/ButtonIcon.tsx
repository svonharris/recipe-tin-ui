import React from "react";

type ButtonIconProps = {
  children: React.ReactElement<{ size?: number }>;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
};

const SIZE_CLASSES: Record<"lg" | "md" | "sm", string> = {
  lg: "iconOnlyFillLg_background",
  md: "iconOnlyFillMd_background",
  sm: "iconOnlyFillSm_background",
};

const SIZE_PX: Record<"lg" | "md" | "sm", number> = {
  lg: 24,
  md: 20,
  sm: 18,
};

const ButtonIcon = ({
  children,
  onClick,
  title,
  type = "button",
  disabled = false,
  size = "lg",
}: ButtonIconProps) => {
  return (
    <button
      className={`baseButton ${SIZE_CLASSES[size]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {React.cloneElement(children, { size: SIZE_PX[size] })}
    </button>
  );
};

export default ButtonIcon;
