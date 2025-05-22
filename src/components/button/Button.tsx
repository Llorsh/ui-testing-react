
export interface ButtonProps {
  /** How large should the button be? */
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional type */
  type?: "button" | "submit" | "reset";
  /** Optional disabled */
  disabled?: boolean;
  buttonType?: "primary" | "primaryDoctor" | "secondary" | "outline" | "text";
}



/** Primary UI component for user interaction */
const Button = ({
  size = "base",
  type = "button",
  label,
  disabled = false,
  buttonType = "primary",
  ...props
}: ButtonProps) => {


  const lightMode =
    buttonType === "primary"
      ? "bg-primary text-white hover:bg-primary-hover hover:text-white disabled:bg-disabled font-bold"
      : buttonType === "primaryDoctor"
        ? "bg-primary-doctor text-white hover:bg-primary-doctor-hover hover:text-white disabled:bg-disabled font-bold"
        : buttonType === "secondary"
          ? "bg-secondary text-primary hover:bg-secondary-hover hover:text-primary disabled:bg-disabled font-bold disabled:text-white"
          : buttonType === "outline"
            ? "outline outline-primary text-primary hover:bg-primary hover:text-white disabled:bg-white font-bold disabled:text-disabled disabled:outline-disabled"
            : buttonType === "text"
              ? "font-medium text-primary hover:font-bold disabled:text-disabled disabled:font-medium"
              : "bg-secondary text-primary hover:bg-secondary-hover hover:text-primary disabled:bg-disabled font-bold disabled:text-white";

  const sizeClasses = {
    xs: "text-xs px-4 py-2",
    sm: "text-sm px-4 py-3",
    base: "text-base px-6 py-4",
    lg: "text-lg px-8 py-5",
    xl: "text-xl px-10 py-6 ",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={[
        "rounded-lg",
        sizeClasses[size],
        lightMode
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
export default Button;