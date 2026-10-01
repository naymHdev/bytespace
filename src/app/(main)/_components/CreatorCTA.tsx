import Image from "next/image";
import Link from "next/link";

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
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.2]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-[840px] text-sm leading-relaxed text-white/85 sm:text-base lg:text-[17px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 sm:mt-10">
          <Link
            href="/register"
            className="inline-flex h-12 items-center justify-center rounded-full bg-lime px-8 text-sm font-semibold text-primary-text shadow-sm transition-all duration-200 hover:bg-lime-hover hover:shadow-lg hover:shadow-lime/20 hover:scale-[1.02] active:scale-[0.98] sm:text-base"
          >
            Join as Creator
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CreatorCTA;
