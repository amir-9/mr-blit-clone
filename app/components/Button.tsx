import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  classNames?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  classNames = "",
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `
        flex 
        justify-center 
        rounded-md 
        text-sm 
        font-bold 
        leading-[28px]
        focus-visible:outline 
        focus-visible:outline-2 
        focus-visible:outline-offset-2 
        `,
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        !secondary && "text-white h-[48px] min-h-[48px] px-2 py-2.5",
        secondary &&
          "text-[#0f84fa] bg-transparent h-[40px] min-h-[40px] p-2 hover:bg-[rgba(11,95,179,.1)]",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-[#0f84fa] hover:bg-[#0b5fb3] focus-visible:outline-[#0b5fb3]",
        classNames
      )}
    >
      {children}
    </button>
  );
};

export default Button;
