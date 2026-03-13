import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "filled" | "outline";
  withIcon?: boolean;
  icon?: React.ReactNode;
};

const VARIANT_CLASSES: Record<
  "filled" | "outline",
  Record<"withIcon" | "textOnly", string>
> = {
  filled: {
    withIcon: "iconWText",
    textOnly: "textFilled",
  },
  outline: {
    withIcon: "iconWTextOutline",
    textOnly: "textOutline",
  },
};

const Button = ({
  children,
  onClick,
  title,
  type = "button",
  disabled = false,
  variant = "filled",
  withIcon = false,
  icon,
}: ButtonProps) => {
  const variantClass =
    VARIANT_CLASSES[variant][withIcon ? "withIcon" : "textOnly"];

  return (
    <button
      className={`baseButton ${variantClass}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {withIcon && icon} <span className="text-md-regular">{children}</span>
    </button>
  );
};

export default Button;
