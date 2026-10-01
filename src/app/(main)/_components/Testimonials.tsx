"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
          <motion.h2
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-130 text-3xl leading-[1.15] font-bold text-primary-text sm:text-4xl lg:text-[44px]"
          >
            Discover What Our Community Is Saying
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-120 text-base leading-relaxed text-primary-text/80 sm:text-lg"
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="h-full"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
