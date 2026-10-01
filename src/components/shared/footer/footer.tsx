"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "../../core/Container";

import b from "../../../../public/icons/b-vector.png";
import name from "../../../../public/icons/brand-name-black.png";

const linkGroups = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/courses" },
    { label: "Business", href: "/courses?category=business" },
    { label: "IT", href: "/courses?category=it" },
    { label: "Design", href: "/courses?category=design" },
  ],
  [
    { label: "Development", href: "/courses?category=development" },
    { label: "Marketing", href: "/courses?category=marketing" },
    { label: "Photography", href: "/courses?category=photography" },
    { label: "Finance", href: "/courses?category=finance" },
    { label: "Sport", href: "/courses?category=sport" },
  ],
  [
    { label: "Become a Creator", href: "/register" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-primary-bg">
      <Container className="pt-16 pb-12 sm:pt-20 sm:pb-16">
        {/* Top Section */}
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-24">
          {/* Left Column: Brand & Newsletter */}
          <div className="w-full max-w-md lg:max-w-110">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src={b}
                alt="ByteSpace Icon"
                width={30}
                height={30}
                className="h-8 w-auto object-contain"
              />
              <Image
                src={name}
                alt="ByteSpace"
                width={125}
                height={26}
                className="h-5 w-auto object-contain"
              />
            </Link>

            {/* Newsletter Description */}
            <p className="mt-5 text-sm leading-relaxed text-primary-text/80 sm:text-base font-light">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Subscribe Form */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <div className="relative flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-full border border-stroke bg-primary-bg px-5 text-sm text-primary-text placeholder:text-secondary-text shadow-none focus-visible:border-brand focus-visible:ring-1 focus-visible:ring-brand sm:text-base"
                />
              </div>
              <Button
                type="submit"
                className="h-12 rounded-full bg-lime px-8 text-sm font-semibold text-primary-text shadow-none transition-all hover:bg-lime-hover active:scale-[0.98] sm:text-base"
              >
                Search
              </Button>
            </form>

            {/* Privacy Disclaimer */}
            <p className="mt-4 text-xs leading-relaxed text-primary-text font-light">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-10 lg:gap-x-16 xl:gap-x-20 lg:pt-1">
            {linkGroups.map((group, groupIndex) => (
              <ul key={groupIndex} className="flex flex-col space-y-3.5 sm:space-y-4">
                {group.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-primary-text transition-colors hover:text-brand  font-light"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-stroke pt-8 text-xs text-secondary-text sm:mt-20 sm:flex-row sm:items-center sm:text-sm font-light">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>

          <ul className="flex flex-wrap items-center gap-6 sm:gap-8">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
