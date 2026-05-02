import React, { forwardRef } from "react";

interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className = "", id, disabled, ...rest }, ref) => {
    return (
      <label
        htmlFor={id}
        className={`flex items-center gap-3 cursor-pointer ${
          disabled ? "cursor-not-allowed opacity-60" : ""
        }`}
      >
        <div className="relative w-5 h-5">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            className={`w-5 h-5 appearance-none border rounded-md border-gray-300 
              checked:bg-brand-500 checked:border-transparent 
              focus:outline-none focus:ring-2 focus:ring-brand-300
              ${className}`}
            {...rest}
          />

          {/* Check Icon */}
          <svg
            className="absolute top-1/2 left-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 peer-checked:opacity-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {label && (
          <span className="text-sm text-gray-700">{label}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;