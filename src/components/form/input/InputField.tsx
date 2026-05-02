import React, { forwardRef } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  error?: boolean;
  hint?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      error = false,
      hint,
      className = "",
      ...rest
    },
    ref
  ) => {
    // base styles
    let inputClasses =
      "h-11 w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none";

    // state styles
    inputClasses += error
      ? " border-red-500 focus:ring-2 focus:ring-red-200"
      : " border-gray-300 focus:ring-2 focus:ring-brand-200";

    inputClasses += ` ${className}`;

    return (
      <div className="w-full">
        {/* Input wrapper (fixed height) */}
        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={inputClasses}
            {...rest}
          />
        </div>

        {/* Fixed error space (no layout shift) */}
        <div className="h-5 mt-1">
          {hint && <p className="text-red-500 text-xs">{hint}</p>}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;