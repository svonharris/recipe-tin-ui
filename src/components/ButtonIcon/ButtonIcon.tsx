type ButtonIconProps = {
  children: React.ReactNode;
  onClick: () => void;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

const ButtonIcon = ({
  children,
  onClick,
  title,
  type = "button",
  disabled = false,
}: ButtonIconProps) => {
  return (
    <button
      className="baseButton iconOnlyFillLg_background"
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
