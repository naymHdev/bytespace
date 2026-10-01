"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/core/Container";
import ctaBg from "@/assets/CTA_Frame.png";

const CreatorCTA = () => {
  return (
    <section className="relative overflow-hidden bg-brand py-16 sm:py-20 lg:py-24">
      {/* Background Graphic */}
      <Image
        src={ctaBg}
        alt="Creator CTA Background"
        fill
        priority={false}
        className="pointer-events-none object-cover object-center select-none"
      />

      <Container className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.2]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-[840px] text-sm leading-relaxed text-white/85 sm:text-base lg:text-[17px]"
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 sm:mt-10 inline-block"
        >
          <Link
            href="/register"
            className="inline-flex h-12 items-center justify-center rounded-full bg-lime px-8 text-sm font-semibold text-primary-text shadow-sm transition-colors hover:bg-lime-hover hover:shadow-lg hover:shadow-lime/20 sm:text-base"
          >
            Join as Creator
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

export default CreatorCTA;
