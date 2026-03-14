import React from "react";

type ButtonIconProps = {
  children: React.ReactElement<{ size?: number }>;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
  variant?: "filled" | "outline";
};

const SIZE: Record<"lg" | "md" | "sm", { className: string; px: number }> = {
  lg: { className: "iconOnlyFillLg_background", px: 24 },
  md: { className: "iconOnlyFillMd_background", px: 20 },
  sm: { className: "iconOnlyFillSm_background", px: 18 },
};

const VARIANT_CLASSES: Record<"filled" | "outline", string> = {
  filled: "iconOnlyFilled",
  outline: "iconOnlyOutline",
};

const ButtonIcon = ({
  children,
  onClick,
  title,
  type = "button",
  disabled = false,
  size = "lg",
  variant = "filled",
}: ButtonIconProps) => {
  return (
    <button
      className={`baseButton ${SIZE[size].className} ${VARIANT_CLASSES[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {React.cloneElement(children, { size: SIZE[size].px })}
    </button>
  );
};

export default ButtonIcon;
