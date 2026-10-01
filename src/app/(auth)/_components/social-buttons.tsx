"use client";

import { FaFacebookF, FaGoogle } from "react-icons/fa6";

export function SocialButtons() {
  return (
    <div className="space-y-6 sm:space-y-7">
      {/* Divider */}
      <div className="relative flex items-center justify-center">
        <div className="w-full border-t border-stroke" />
        <span className="absolute bg-white px-3 text-[13px] text-secondary-text">
          or
        </span>
      </div>

      {/* Social Button Group */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => {}}
          className="w-[52px] h-[52px] rounded-full border border-stroke bg-white flex items-center justify-center text-primary-text hover:bg-secondary-bg hover:border-gray-300 active:scale-95 transition-all shadow-xs"
          aria-label="Continue with Facebook"
        >
          <FaFacebookF className="w-4 h-4 text-black" />
        </button>

        <button
          type="button"
          onClick={() => {}}
          className="w-[52px] h-[52px] rounded-full border border-stroke bg-white flex items-center justify-center text-primary-text hover:bg-secondary-bg hover:border-gray-300 active:scale-95 transition-all shadow-xs"
          aria-label="Continue with Google"
        >
          <FaGoogle className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
}
