import React, { forwardRef } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  error?: boolean;
  hint?: string;
  className?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      placeholder,
      error = false,
      hint,
      className = "",
      disabled = false,
      ...rest
    },
    ref
  ) => {
    let inputClasses =
      "h-11 w-full rounded-lg border px-4 py-2.5 text-sm focus:outline-none transition";

    
    if (disabled) {
      inputClasses +=
        " bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed dark:bg-gray-800 dark:border-gray-700";
    } else if (error) {
      inputClasses +=
        " border-red-500 text-red-600 focus:ring-2 focus:ring-red-200 dark:text-red-400";
    } else {
      inputClasses +=
        " border-gray-300 text-gray-800 focus:ring-2 focus:ring-brand-200 dark:bg-gray-900 dark:border-gray-700 dark:text-white";
    }

    return (
      <div className="w-full">
        <div className="relative">
          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            className={`${inputClasses} ${className}`}
            disabled={disabled}
            {...rest}
          />
        </div>

        {/* fixed height → no layout shift */}
        <div className="h-5 mt-1">
          {hint && <p className="text-red-500 text-xs">{hint}</p>}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;