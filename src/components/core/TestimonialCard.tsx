import Image from "next/image";

import type { Testimonial } from "@/data/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { name, role, avatar, quote } = testimonial;

  return (
    <div className="flex flex-col rounded-3xl bg-primary-bg p-6 sm:p-8">
      <Image
        src={avatar}
        alt={name}
        width={64}
        height={64}
        className="size-14 rounded-full object-cover sm:size-16"
      />

      <h3 className="mt-5 text-lg font-bold text-primary-text sm:text-xl">
        {name}
      </h3>
      <p className="mt-1 text-sm font-medium text-brand sm:text-base">{role}</p>

      <p className="mt-5 text-sm leading-relaxed text-secondary-text sm:text-base">
        &quot;{quote}&quot;
      </p>
    </div>
  );
};

export default TestimonialCard;
