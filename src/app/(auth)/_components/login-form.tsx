"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AuthCard } from "./auth-card";
import { AuthInput } from "./auth-input";
import { SocialButtons } from "./social-buttons";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <AuthCard
      eyebrow="Sign In"
      title={
        <h2 className="text-[32px] sm:text-[36px] font-bold text-primary-text tracking-[-0.02em] leading-[1.15]">
          Welcome Back
        </h2>
      }
      footer={
        <p className="text-[14px] text-secondary-text">
          New user?{" "}
          <Link
            href="/register"
            className="text-brand font-medium hover:underline transition-colors ml-0.5"
          >
            Create an account
          </Link>
        </p>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <AuthInput
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="designer@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          required
        />

        <AuthInput
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="********"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          required
        />

        {/* Right-aligned Submit Button */}
        <div className="flex justify-end pt-3 sm:pt-4">
          <button
            type="submit"
            className="bg-lime hover:bg-lime-hover active:scale-[0.98] text-black font-medium text-[15px] px-8 py-2.5 sm:py-3 rounded-full shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Social login divider and Facebook / Google buttons */}
      <div className="mt-7">
        <SocialButtons />
      </div>
    </AuthCard>
  );
}
