import React from "react";
import Image from "next/image";
import Link from "next/link";
import authBg from "@/assets/auth/auth-bg.png";
import logoIcon from "@/assets/auth/logo-icon-vector.png";
import { AuthGraphic } from "./_components/auth-graphic";
import { AuthHeader } from "./_components/auth-header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-x-hidden bg-[#0038e0] px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
      {/* Background Grid Image */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src={authBg}
          alt="ByteSpace Background Grid"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Content Container: Centered with balanced spacing */}
      <div className="relative z-10 w-full max-w-[980px] lg:max-w-[1040px] mx-auto min-w-0">
        {/* Brand Logo at top left */}
        <div className="mb-3.5 sm:mb-5">
          <Link
            href="/"
            className="inline-block transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg"
            aria-label="ByteSpace Home"
          >
            <div className="w-[32px] h-[36px] relative">
              <Image
                src={logoIcon}
                alt="ByteSpace Logo"
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Two Columns aligned at the top with compact gap matching Figma */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-8 lg:gap-12 xl:gap-14 w-full min-w-0">
          {/* Left Column: Dynamic Copy + 3D Composition */}
          <div className="w-full lg:w-[470px] shrink-0 flex flex-col justify-between py-0.5 min-w-0">
            <AuthHeader />
            <div className="hidden lg:flex w-full justify-start pt-2">
              <AuthGraphic />
            </div>
          </div>

          {/* Right Column: White Auth Card */}
          <div className="w-full lg:w-[450px] shrink-0 flex justify-center lg:justify-end min-w-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
