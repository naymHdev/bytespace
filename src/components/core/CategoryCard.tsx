import Image from "next/image";
import Link from "next/link";

import type { Category } from "@/data/categories";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  category: Category;
  className?: string;
};

const CategoryCard = ({ category, className }: CategoryCardProps) => {
  const { slug, label, icon } = category;

  return (
    <Link
      href={`/courses?category=${slug}`}
      className={cn(
        "flex aspect-square flex-col items-center justify-center gap-3 rounded-[28px] border border-stroke bg-primary-bg p-3 text-center transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <Image
        src={icon}
        alt=""
        width={60}
        height={60}
        className="size-12 sm:size-15"
      />
      <span className="text-base font-medium text-primary-text sm:text-lg lg:text-xl">
        {label}
      </span>
    </Link>
  );
};

export default CategoryCard;
