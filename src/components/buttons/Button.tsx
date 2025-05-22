import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
};

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button
      className={"px-4 py-2 font-semibold rounded transition" +
        (variant === "primary"
          ? " bg-blue-600 text-white hover:bg-blue-700"
          : " border border-blue-600 text-blue-600 hover:bg-blue-50")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
