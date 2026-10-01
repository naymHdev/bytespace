"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/core/CategoryCard";
import Container from "@/components/core/Container";
import { learningPaths } from "@/data/categories";

const LearningPaths = () => {
  return (
    <section className="bg-primary-bg py-12 sm:py-16 lg:py-20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-230 text-center"
        >
          <h2 className="text-2xl leading-[1.2] font-semibold text-primary-text sm:text-4xl lg:text-[40px]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-base text-secondary-text sm:text-lg">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-300.5 grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:grid-cols-6 lg:gap-10">
          {learningPaths.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LearningPaths;
