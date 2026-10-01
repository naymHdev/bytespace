import Image from "next/image";

import Container from "@/components/core/Container";
import frame11 from "@/assets/Frame 11.png";
import frame12 from "@/assets/Frame 12.png";
import frame15Bg from "@/assets/Frame 15_bg.png";

const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const GrowthSection = () => {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Graphic */}
      <Image
        src={frame15Bg}
        alt=""
        fill
        priority={false}
        className="pointer-events-none object-cover object-center select-none"
      />

      <Container className="relative z-10 flex max-w-[1360px] flex-col gap-14 sm:gap-16 lg:gap-20">
        {/* Block 1: Professional Growth */}
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left: Text & Stats */}
          <div className="w-full max-w-[500px]">
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-primary-text sm:text-4xl lg:text-[48px] xl:text-[52px]">
              Your Path to Professional
              <br className="hidden sm:inline" /> Growth Starts Here!
            </h2>

            <p className="mt-6 text-base leading-relaxed text-secondary-text sm:text-lg">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Metrics */}
            <div className="mt-8 flex items-center gap-10 sm:gap-12 lg:gap-14">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-[36px]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-normal text-secondary-text sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration Frame 11 */}
          <div className="relative flex w-full max-w-[580px] shrink-0 items-center justify-center xl:max-w-[640px]">
            <Image
              src={frame11}
              alt="Your Path to Professional Growth Starts Here"
              priority={false}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Block 2: Create & Manage Courses Easily */}
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 xl:gap-16">
          {/* Left: Illustration Frame 12 */}
          <div className="order-2 relative flex w-full max-w-[520px] shrink-0 items-center justify-center lg:order-1 xl:max-w-[586px]">
            <Image
              src={frame12}
              alt="Create & Manage Courses Easily"
              priority={false}
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Right: Text & Checklist */}
          <div className="order-1 w-full max-w-[500px] lg:order-2">
            <h2 className="text-3xl font-bold leading-[1.12] tracking-tight text-primary-text sm:text-4xl lg:text-[48px] xl:text-[52px]">
              Create &amp; Manage
              <br className="hidden sm:inline" /> Courses Easily.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-secondary-text sm:text-lg">
              <span className="font-semibold text-primary-text">ByteSpace</span>{" "}
              supports individuals or entities in the creation, publication,
              and administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-8 flex flex-col gap-4 sm:gap-4.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3.5">
                  <svg
                    className="size-[22px] shrink-0"
                    viewBox="0 0 22 22"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="11" fill="#0038E0" />
                    <path
                      d="M6.5 11.2L9.5 14.2L15.5 8.2"
                      stroke="white"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-base font-medium text-primary-text sm:text-[17px]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GrowthSection;
