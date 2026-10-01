"use client";

import { motion } from "framer-motion";
import Container from "@/components/core/Container";
import CourseCard from "@/components/shared/course-card";
import { courseCategories, courses } from "@/data/courses";

import CategoryChips from "./category-chips";

const FeaturedCourses = () => {
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
          <h2 className="text-3xl leading-[1.2] font-semibold text-primary-text sm:text-4xl lg:text-[44px]">
            Discover Your Passion,
            <br className="hidden sm:block" /> Build Your Skills
          </h2>
          <p className="mt-5 text-base text-secondary-text sm:text-lg">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10"
        >
          <CategoryChips categories={courseCategories} />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedCourses;
