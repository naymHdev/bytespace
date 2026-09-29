"use client";

import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "../../core/Container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

const Logo = () => (
  <Link href="/" className="inline-flex items-center gap-2">
    <span className="flex size-7 items-center justify-center rounded-lg bg-lime text-base font-bold text-primary-text">
      b
    </span>
    <span className="text-xl font-extrabold text-white">ByteSpace</span>
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="bg-brand">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition-colors hover:text-lime",
                isActive(item.href)
                  ? "font-semibold text-white"
                  : "font-medium text-white/70",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-white transition-colors hover:text-lime"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium text-white transition-colors hover:text-lime"
          >
            Join Us
          </Link>
          <Link
            href="/cart"
            aria-label="Cart"
            className="text-white transition-colors hover:text-lime"
          >
            <ShoppingBag className="size-5" />
          </Link>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-white hover:bg-white/10 hover:text-white md:hidden"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 border-none bg-brand p-6 text-white"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="mt-8 flex flex-col gap-6">
              {navLinks.map((item) => (
                <SheetClose  key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-lg transition-colors hover:text-lime",
                      isActive(item.href)
                        ? "font-semibold text-white"
                        : "font-medium text-white/70",
                    )}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}

              <div className="mt-4 flex flex-col gap-3 border-t border-white/20 pt-6">
                <SheetClose >
                  <Button
                    
                    variant="secondary"
                    className="h-11 rounded-full"
                  >
                    <Link href="/register">Join Us</Link>
                  </Button>
                </SheetClose>
                <SheetClose >
                  <Link
                    href="/login"
                    className="text-center text-base font-medium text-white hover:text-lime"
                  >
                    Sign In
                  </Link>
                </SheetClose>
                <SheetClose >
                  <Link
                    href="/cart"
                    className="flex items-center justify-center gap-2 text-base font-medium text-white hover:text-lime"
                  >
                    <ShoppingBag className="size-5" />
                    Cart
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
};

export default Navbar;
