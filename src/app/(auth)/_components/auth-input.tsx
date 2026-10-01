import React from "react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

export function AuthInput({
  label,
  id,
  type = "text",
  placeholder,
  error,
  className,
  ...props
}: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-[14px] font-medium text-primary-text"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={cn(
          "w-full h-[50px] px-4 rounded-[14px] border border-stroke bg-white text-primary-text text-[15px] placeholder:text-[#9ca3af] transition-all outline-none",
          "focus:border-brand focus:ring-1 focus:ring-brand/30",
          error && "border-danger focus:border-danger focus:ring-danger/20",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-danger mt-1">{error}</p>}
    </div>
  );
}
