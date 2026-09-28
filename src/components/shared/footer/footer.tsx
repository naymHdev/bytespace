import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "../../core/Container";

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
    <footer className="bg-primary-bg">
      <Container className="pt-16 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[480px]">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-lime text-lg font-bold text-primary-text">
                b
              </span>
              <span className="text-2xl font-extrabold text-primary-text">
                ByteSpace
              </span>
            </Link>

            <p className="mt-6 text-base text-primary-text">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-8 flex items-center gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-full border-stroke bg-primary-bg px-5 text-base"
              />
              <Button
                type="submit"
                variant="secondary"
                className="h-12 rounded-full px-6 text-base font-medium"
              >
                Search
              </Button>
            </form>

            <p className="mt-6 text-sm text-secondary-text">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 lg:pt-6">
            {linkGroups.map((group, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {group.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-base text-primary-text transition-colors hover:text-brand"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-stroke py-8 sm:flex-row sm:items-center sm:justify-between lg:mt-24">
          <p className="text-sm text-primary-text">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-primary-text transition-colors hover:text-brand"
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
