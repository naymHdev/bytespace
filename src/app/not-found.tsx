import Image from "next/image";
import Link from "next/link";

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
      <section className="relative flex-1 min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-brand pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Background Grid Pattern */}
        <Image
          src={authBg}
          alt="ByteSpace Grid Pattern"
          fill
          priority
          unoptimized
          className="pointer-events-none object-cover select-none"
        />

        <Container className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Giant 404 Lime Gradient Text */}
          <h1 className="select-none font-black text-[130px] sm:text-[180px] md:text-[220px] lg:text-[260px] leading-none tracking-tight bg-gradient-to-b from-[#d5ff1e] via-[#c2ef12] to-[#7eb818] bg-clip-text text-transparent drop-shadow-sm">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-snug">
            The page you are looking for doesn&apos;t exist
          </h2>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80 font-normal max-w-lg leading-relaxed">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="mt-6 sm:mt-8 inline-flex items-center justify-center rounded-full bg-lime hover:bg-lime-hover px-7 sm:px-8 py-3 text-xs sm:text-sm font-bold text-primary-text shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Back to Home
          </Link>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
