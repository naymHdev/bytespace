"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import Container from "@/components/core/Container";
import authBg from "@/assets/auth/auth-bg.png";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-primary-bg flex flex-col justify-between">
      {/* Transparent Navbar on Hero */}
      <Navbar transparent />

      {/* Blue Grid Hero Section */}
      <section className="relative flex-1 min-h-screen flex items-center justify-center overflow-hidden bg-brand pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Background Grid Pattern with subtle entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none select-none"
        >
          <Image
            src={authBg}
            alt="ByteSpace Grid Pattern"
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </motion.div>

        {/* Ambient Subtle Lime Glow behind 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute size-72 sm:size-96 rounded-full bg-lime/25 blur-[90px]"
        />

        <Container className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Giant 404 Lime Gradient Text with Float & Spring Entrance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: -25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 14,
              duration: 0.8,
            }}
          >
            <motion.h1
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              className="select-none font-black text-[130px] sm:text-[180px] md:text-[220px] lg:text-[260px] leading-none tracking-tight bg-gradient-to-b from-[#d5ff1e] via-[#c2ef12] to-[#7eb818] bg-clip-text text-transparent drop-shadow-sm"
            >
              404
            </motion.h1>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-snug"
          >
            The page you are looking for doesn&apos;t exist
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80 font-normal max-w-lg leading-relaxed"
          >
            Try to use a correct url or go back to homepage to start again
          </motion.p>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-lime hover:bg-lime-hover px-7 sm:px-8 py-3 text-xs sm:text-sm font-bold text-primary-text shadow-md transition-colors cursor-pointer"
            >
              Back to Home
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
