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
declare const Button: ({ size, type, label, disabled, buttonType, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
