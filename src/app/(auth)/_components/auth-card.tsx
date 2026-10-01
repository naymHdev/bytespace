import React from "react";
import { cn } from "@/lib/utils";

interface AuthCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: string;
  title: string | React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function AuthCard({
  eyebrow,
  title,
  children,
  footer,
  className,
  ...props
}: AuthCardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-[420px] lg:max-w-[440px] h-full min-h-[480px] sm:min-h-[500px] lg:min-h-[520px] bg-white rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 lg:p-9 shadow-2xl shadow-blue-950/25 border border-white/20 flex flex-col justify-between transition-all duration-300",
        className
      )}
      {...props}
    >
      <div>
        {/* Eyebrow & Title */}
        <div className="mb-5 sm:mb-6">
          {eyebrow && (
            <p className="text-[13.5px] font-semibold text-brand mb-1 tracking-tight">
              {eyebrow}
            </p>
          )}
          {typeof title === "string" ? (
            <h2 className="text-2xl sm:text-[30px] font-bold text-primary-text tracking-[-0.02em] leading-tight">
              {title}
            </h2>
          ) : (
            title
          )}
        </div>

        {/* Main Form Content */}
        <div>{children}</div>
      </div>

      {/* Footer Pinned to Bottom */}
      {footer && (
        <div className="mt-6 pt-2 text-center text-[13.5px]">{footer}</div>
      )}
    </div>
  );
}
