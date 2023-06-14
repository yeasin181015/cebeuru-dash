import { ColorType } from "@/types";
import { forwardRef, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

const classMap = {
  base: "relative inline-flex cursor-pointer items-center",
  color: {
    primary: "bg-primary-500",
    secondary: "bg-secondary-500",
    success: "bg-success-500",
    danger: "bg-danger-500",
    warning: "bg-warning-500",
    info: "bg-info-500",
    dark: "bg-dark-500",
  },

  size: {
    sm: "h-5 w-9",
    md: "h-6 w-11",
    lg: "h-[28px] w-[52px]",
  },

  controlSize: {
    sm: "top-[2px] left-[2px] h-4 w-4",
    md: "top-[2px] left-[2px] h-5 w-5",
    lg: "top-[2px] left-[2px] h-6 w-6",
  },
};

export type ToggleProps = {
  className?: string;
  children?: React.ReactNode | ((checked: boolean) => React.ReactNode);
  color?: ColorType;
  size?: "sm" | "md" | "lg";
  checked?: boolean;
  defaultChecked?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  inputProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "checked" | "defaultChecked" | "value" | "onChange"
  >;
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      children,
      checked: checkedProps,
      defaultChecked,
      color = "primary",
      size = "sm",
      value,
      onChange,
      disabled,
      inputProps,
    },
    ref
  ) => {
    const [checked, setChecked] = useState(
      defaultChecked || checkedProps || false
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        onChange?.(e);
      },
      []
    );

    const renderChildren = () => {
      if (typeof children === "function") {
        return children(checked);
      }
      return children;
    };

    return (
      <label className={classMap.base}>
        <input
          type="checkbox"
          className="peer sr-only"
          ref={ref}
          checked={checked}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...inputProps}
        />
        {/* Toggle body */}
        <div
          className={twMerge(
            "h-5 w-9 rounded-full transition-colors duration-100 peer-focus:outline-none dark:border-slate-600",
            classMap.size[size],
            checked ? classMap.color[color] : "bg-slate-200 dark:bg-slate-700",
            disabled && "cursor-not-allowed opacity-50",
            className
          )}
        ></div>
        {/* Toggle control */}
        {children ? (
          renderChildren()
        ) : (
          <div
            className={twMerge(
              "absolute transform rounded-full bg-slate-50 transition-all duration-150 peer-checked:translate-x-full peer-checked:border-white dark:bg-slate-200",
              classMap.controlSize[size],
              className
            )}
          ></div>
        )}
      </label>
    );
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
