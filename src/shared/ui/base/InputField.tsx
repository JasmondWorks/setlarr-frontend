"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "./Label";
import { Input } from "./Input";
import { ChevronDown, Eye, EyeOff } from "lucide-react";

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>, "type"> {
  type?: "text" | "password" | "email" | "number" | "select" | "checkbox" | "radio" | "textarea" | "custom" | "file" | 'date';
  label?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  errorMessage?: string;
  options?: { label: string; value: string }[];
  renderCustom?: (props: any) => React.ReactNode;
}

const InputField = React.forwardRef<any, InputFieldProps>(
  (
    {
      type = "text",
      label,
      icon,
      iconPosition = "left",
      placeholder,
      errorMessage,
      options = [],
      renderCustom,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || React.useId();
    const [showPassword, setShowPassword] = React.useState(false);

    const isPasswordType = type === "password";
    const currentType = isPasswordType ? (showPassword ? "text" : "password") : type;

    const renderInput = () => {
      switch (type) {
        case "select":
          return (
            <div className="relative">
              <select
                id={inputId}
                ref={ref}
                className={cn(
                  "flex h-[44px] w-full rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-[14px] text-neutral-900 ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors appearance-none cursor-pointer pr-10",
                  className
                )}
                defaultValue=""
                {...props}
              >
                {placeholder && (
                  <option value="" disabled hidden>
                    {placeholder}
                  </option>
                )}
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          );

        case "textarea":
          return (
            <textarea
              id={inputId}
              ref={ref}
              placeholder={placeholder}
              className={cn(
                "flex min-h-[80px] w-full rounded-md border border-neutral-200 bg-transparent px-4 py-3 text-[14px] text-neutral-900 ring-offset-white placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/30 focus-visible:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50 transition-colors resize-y",
                className
              )}
              {...props}
            />
          );

        case "checkbox":
          return (
            <div className="flex items-center gap-2">
              <input
                id={inputId}
                type="checkbox"
                ref={ref}
                className={cn(
                  "h-4 w-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 disabled:opacity-50 cursor-pointer",
                  className
                )}
                {...props}
              />
              {label && (
                <Label htmlFor={inputId} className="font-medium text-neutral-700 cursor-pointer select-none">
                  {label}
                </Label>
              )}
            </div>
          );

        case "radio":
          return (
            <div className="flex flex-col gap-2">
              {options.map((opt, idx) => {
                const radioId = `${inputId}-${opt.value}-${idx}`;
                return (
                  <div key={opt.value} className="flex items-center gap-2">
                    <input
                      id={radioId}
                      type="radio"
                      ref={ref}
                      className={cn(
                        "h-4 w-4 border-neutral-300 text-primary-600 focus:ring-primary-500 disabled:opacity-50 cursor-pointer",
                        className
                      )}
                      {...props}
                      value={opt.value}
                    />
                    <Label htmlFor={radioId} className="font-medium text-neutral-700 cursor-pointer select-none">
                      {opt.label}
                    </Label>
                  </div>
                );
              })}
            </div>
          );

        case "custom":
          if (renderCustom) {
            return renderCustom({
              id: inputId,
              ref,
              placeholder,
              className,
              ...props,
            });
          }
          return null;

        default:
          // Normal input fields (text, email, password, number, file, etc.)
          return (
            <div className="relative">
              {icon && iconPosition === "left" && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none flex items-center justify-center">
                  {icon}
                </span>
              )}
              <Input
                id={inputId}
                type={currentType}
                placeholder={placeholder}
                ref={ref}
                className={cn(
                  icon && iconPosition === "left" && "pl-11",
                  (icon && iconPosition === "right" || isPasswordType) && "pr-11",
                  className
                )}
                {...props}
              />
              {isPasswordType ? (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:text-neutral-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 focus-visible:text-primary-600 rounded-sm cursor-pointer p-0.5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              ) : (
                icon && iconPosition === "right" && (
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none flex items-center justify-center">
                    {icon}
                  </span>
                )
              )}
            </div>
          );
      }
    };

    // Checkboxes display label inside the item itself to layout beside it
    const showOutsideLabel = label && type !== "checkbox" && type !== "radio";

    return (
      <div className="flex flex-col gap-2 w-full">
        {showOutsideLabel && <Label htmlFor={inputId}>{label}</Label>}
        {renderInput()}
        {errorMessage && (
          <span className="text-[12px] text-error-600 font-medium animate-in fade-in slide-in-from-top-1 mt-1">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export { InputField };
