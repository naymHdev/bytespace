"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import Container from "@/components/core/Container";
import heroFrame from "@/assets/Hero_Frame.png";

const Hero = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/courses?search=${encodeURIComponent(query.trim())}`);
    }
  };
  return (
    <section className="relative overflow-hidden bg-brand pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-38 min-h-[860px] sm:min-h-[940px] lg:min-h-[1024px] flex flex-col justify-start">
      {/* Background graphic with subtle fade-in */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none select-none"
      >
        <Image
          src={heroFrame}
          alt="ByteSpace Hero Background"
          fill
          priority
          className="object-cover object-top"
        />
      </motion.div>

      {/* Hero Content */}
      <Container className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[58px] xl:text-[64px]"
        >
          Get Access to Hundreds
          <br />
          Courses Available
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSearch}
          className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 sm:mt-10 sm:gap-3.5"
        >
          <div className="relative flex-1 max-w-[320px] sm:max-w-[360px]">
            <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-secondary-text" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Course, topic, creator"
              className="h-11 w-full rounded-full bg-white pl-11 pr-5 text-sm text-primary-text placeholder:text-secondary-text shadow-sm outline-none transition-all focus:ring-2 focus:ring-lime sm:h-12"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            type="submit"
            className="h-11 rounded-full bg-lime px-7 text-sm font-semibold text-primary-text shadow-sm transition-colors hover:bg-lime-hover sm:h-12 sm:px-8 sm:text-base cursor-pointer"
          >
            Search
          </motion.button>
        </motion.form>
      </Container>
    </section>
  );
};

export default Hero;
