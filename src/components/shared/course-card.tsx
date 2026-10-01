import { ChartNoAxesColumn, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/data/courses";
import { cn } from "@/lib/utils";

type CourseCardProps = {
  course: Course;
  className?: string;
};

const CourseCard = ({ course, className }: CourseCardProps) => {
  const {
    slug,
    title,
    author,
    image,
    rating,
    level,
    lessons,
    duration,
    comments,
    price,
    enrolled,
    avatars,
  } = course;

  const meta = [`${lessons} Lessons`, duration, `${comments} Comments`];

  return (
    <Link
      href={`/courses/${slug}`}
      className={cn(
        "flex min-w-0 flex-col rounded-3xl border border-stroke bg-primary-bg p-4 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="@container relative aspect-[342/196] overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 342px"
          className="object-cover"
        />
        <ul className="absolute inset-x-2 bottom-2 flex flex-nowrap items-center gap-1 @[320px]:inset-x-3 @[320px]:bottom-3 @[320px]:gap-1.5 @[420px]:inset-x-4 @[420px]:bottom-4 @[420px]:gap-2">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-full bg-white/60 px-2 py-1 text-[10px] leading-none whitespace-nowrap text-primary-text/70 backdrop-blur-md @[320px]:px-3 @[320px]:py-1.5 @[320px]:text-xs @[420px]:px-4 @[420px]:py-2 @[420px]:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <h3 className="min-w-0 truncate text-xl font-semibold text-primary-text">
          {title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-base text-secondary-text">
          {rating}
          <Star className="size-4 fill-current opacity-50" />
        </span>
      </div>

      <p className="mt-1 text-xs text-secondary-text">
        by <span className="text-brand">{author}</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary-bg px-3 py-2 text-xs text-primary-text">
          <ChartNoAxesColumn className="size-3.5" />
          {level}
        </span>
        <div className="flex items-center -space-x-2">
          {avatars.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-full object-cover ring-2 ring-primary-bg"
            />
          ))}
          <span className="flex size-8 items-center justify-center rounded-full bg-lime text-xs font-medium text-primary-text ring-2 ring-primary-bg">
            {enrolled}+
          </span>
        </div>
      </div>

      <p className="mt-auto pt-5 text-xl font-bold text-brand">
        ${price}
        <span className="text-xs font-normal text-secondary-text">
          /lifetime
        </span>
      </p>
    </Link>
  );
};

export default CourseCard;
