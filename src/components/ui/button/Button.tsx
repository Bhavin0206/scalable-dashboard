import React, { ReactNode } from "react";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md";
  variant?: "primary" | "outline";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean; // 
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  className = "",
  disabled,
  loading = false,
  type = "button",
  ...rest
}) => {
  const sizeClasses = {
    sm: "px-4 py-3 text-sm",
    md: "px-5 py-3.5 text-sm",
  };

  const variantClasses = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 disabled:bg-brand-300",
    outline:
      "bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-medium gap-2 rounded-lg transition ${sizeClasses[size]} ${variantClasses[variant]} ${disabled || loading ? "cursor-not-allowed opacity-50" : ""
        } ${className}`}
      {...rest}
    >
      {loading ? (
        <>
          {/* Spinner */}
          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>

          {/* Optional text */}
          <span>Loading...</span>
        </>
      ) : (
        <>
          {startIcon && <span>{startIcon}</span>}
          {children}
          {endIcon && <span>{endIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;