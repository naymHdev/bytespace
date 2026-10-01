"use client";

import { usePathname } from "next/navigation";

interface AuthHeaderProps {
  title?: string;
  description?: string;
}

export function AuthHeader({ title, description }: AuthHeaderProps) {
  const pathname = usePathname();
  const isRegister = pathname?.includes("/register");

  const displayTitle =
    title ?? (isRegister ? "Sign up and come in" : "Sign in with ease");
  const displayDescription =
    description ??
    (isRegister
      ? "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      : "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.");

  return (
    <div className="w-full max-w-[420px] min-w-0">
      <h1 className="text-[26px] sm:text-[30px] lg:text-[32px] font-bold text-white tracking-tight leading-tight">
        {displayTitle}
      </h1>
      <p className="mt-2.5 text-[14px] sm:text-[14.5px] text-white/85 leading-relaxed font-normal break-words">
        {displayDescription}
      </p>
    </div>
  );
}
