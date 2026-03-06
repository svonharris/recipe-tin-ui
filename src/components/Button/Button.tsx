import style from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

const VARIANT_STYLES: Record<"primary" | "secondary", string> = {
  primary: style.primaryButton,
  secondary: style.secondaryButton,
};

const Button = ({
  children,
  onClick,
  title,
  type = "button",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={`${style.baseButton} ${VARIANT_STYLES[variant]}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
