import Image from "next/image";

import Container from "@/components/core/Container";
import TestimonialCard from "@/components/core/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import testimonialBg from "@/assets/testimonials-bg.png";

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <Image
        src={testimonialBg}
        alt=""
        fill
        priority={false}
        className="object-cover"
      />

      <Container className="relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="max-w-130 text-3xl leading-[1.15] font-bold text-primary-text sm:text-4xl lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-120 text-base leading-relaxed text-primary-text/80 sm:text-lg">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
