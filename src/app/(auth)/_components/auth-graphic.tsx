"use client";

import Image from "next/image";
import cardFront from "@/assets/auth/Course_Card_1.png";
import cardBack from "@/assets/auth/Course_Card_1 (1).png";
import happyStudents from "@/assets/auth/Auto Layout Vertical.png";
import torusRing from "@/assets/auth/Round.png";
import conePyramid from "@/assets/auth/Cone.png";
import spiralRibbon from "@/assets/auth/Frame.png";

export function AuthGraphic() {
  return (
    <div className="relative w-full max-w-[440px] lg:max-w-[470px] h-[390px] sm:h-[420px] lg:h-[445px] select-none mx-auto lg:mx-0">
      {/* Back Course Card: "Build Digital Asset" */}
      <div className="absolute left-0 top-[58px] lg:top-[66px] w-[295px] sm:w-[325px] lg:w-[350px] z-10 drop-shadow-xl transition-transform duration-300 hover:-translate-y-1">
        <Image
          src={cardBack}
          alt="Build Digital Asset Course Card"
          priority
          className="w-full h-auto object-contain rounded-3xl"
        />
      </div>

      {/* Front Course Card: "the Power of Big Data" */}
      <div className="absolute left-[74px] sm:left-[88px] lg:left-[98px] top-[8px] lg:top-[10px] w-[295px] sm:w-[325px] lg:w-[350px] z-20 drop-shadow-[0_22px_48px_rgba(0,0,0,0.32)] transition-transform duration-300 hover:-translate-y-1">
        <Image
          src={cardFront}
          alt="The Power of Big Data Course Card"
          priority
          className="w-full h-auto object-contain rounded-3xl"
        />
      </div>

      {/* 3D Torus / Donut (Yellow Ring) */}
      <div className="absolute left-[48px] sm:left-[56px] lg:left-[64px] -top-[10px] lg:-top-[12px] w-[80px] sm:w-[90px] lg:w-[98px] z-30 pointer-events-none drop-shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          src={torusRing}
          alt="3D Yellow Torus"
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* 3D Cone / Pyramid (Lime) */}
      <div className="absolute -left-[18px] sm:-left-[24px] lg:-left-[28px] bottom-[10px] lg:bottom-[14px] w-[98px] sm:w-[112px] lg:w-[124px] z-25 pointer-events-none drop-shadow-2xl transition-transform duration-300 hover:scale-105">
        <Image
          src={conePyramid}
          alt="3D Lime Pyramid"
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Happy Students Badge */}
      <div className="absolute right-[10px] sm:right-[14px] lg:right-[18px] -bottom-[10px] lg:-bottom-[14px] w-[190px] sm:w-[215px] lg:w-[235px] z-30 drop-shadow-2xl transition-transform duration-300 hover:scale-105">
        <Image
          src={happyStudents}
          alt="Happy Students Rating Card"
          priority
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>

      {/* 3D Spiral / Coil Ribbon (White) */}
      <div className="absolute right-[28px] sm:right-[36px] lg:right-[42px] bottom-[42px] lg:bottom-[50px] w-[82px] sm:w-[92px] lg:w-[100px] z-40 pointer-events-none drop-shadow-xl transition-transform duration-300 hover:scale-105">
        <Image
          src={spiralRibbon}
          alt="3D White Spiral Ribbon"
          priority
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
