import Image from "next/image";
import Container from "@/components/core/Container";

const logos = [
  { src: "/images/brand1.png", alt: "Partner logo 1" },
  { src: "/images/brand2.png", alt: "Partner logo 2" },
  { src: "/images/brand3.png", alt: "Partner logo 3" },
  { src: "/images/brand4.png", alt: "Partner logo 4" },
  { src: "/images/brand5.png", alt: "Partner logo 5" },
];

const PartnerLogos = () => {
  return (
    <section className="bg-secondary-bg py-8 sm:py-10 lg:py-16">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 lg:flex-nowrap lg:justify-between">
          {logos.map((item) => (
            <li
              key={item.src}
              className="flex basis-[40%] justify-center sm:basis-[28%] lg:basis-auto"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={48}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 28vw, 200px"
                className="h-8 w-auto object-contain opacity-80 sm:h-10 lg:h-12"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PartnerLogos;
