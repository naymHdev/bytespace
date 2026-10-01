"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/core/Container";

const logos = [
  { src: "/images/brand1.png", alt: "Partner logo 1" },
  { src: "/images/brand2.png", alt: "Partner logo 2" },
  { src: "/images/brand3.png", alt: "Partner logo 3" },
  { src: "/images/brand4.png", alt: "Partner logo 4" },
  { src: "/images/brand5.png", alt: "Partner logo 5" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const PartnerLogos = () => {
  return (
    <section className="bg-secondary-bg py-8 sm:py-10 lg:py-16">
      <Container>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:flex-nowrap lg:justify-between"
        >
          {logos.map((item) => (
            <motion.li
              key={item.src}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex basis-[40%] justify-center sm:basis-[28%] lg:basis-auto"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={48}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 200px"
                className="h-8 w-auto object-contain opacity-75 transition-opacity duration-300 hover:opacity-100 sm:h-10 lg:h-12"
              />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
};

export default PartnerLogos;
