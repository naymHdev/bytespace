"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type CategoryChipsProps = {
  categories: string[];
  defaultCategory?: string;
};

const CategoryChips = ({
  categories,
  defaultCategory = categories[0],
}: CategoryChipsProps) => {
  const [active, setActive] = useState(defaultCategory);

  return (
    <div className="mx-auto flex max-w-275 flex-wrap items-center justify-center gap-2 sm:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          aria-pressed={active === category}
          onClick={() => setActive(category)}
          className={cn(
            "rounded-full px-4 py-2 text-sm transition-colors sm:px-4 sm:py-2.5 sm:text-base",
            active === category
              ? "bg-lime font-medium text-primary-text"
              : "bg-secondary-bg text-primary-text hover:bg-stroke",
          )}
        >
          {category}
        </button>
      ))}
      <button
        type="button"
        className="px-2 py-2 text-sm font-medium text-brand hover:underline sm:text-base"
      >
        + More
      </button>
    </div>
  );
};

export default CategoryChips;
