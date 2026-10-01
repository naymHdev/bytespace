"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Filter,
  ChartNoAxesColumn,
  LayoutGrid,
  ArrowUpDown,
  Check,
  ChevronDown,
} from "lucide-react";

import Container from "@/components/core/Container";
import CourseCard from "@/components/shared/course-card";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import authBg from "@/assets/auth/auth-bg.png";

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const categories = [
  "All Categories",
  "UI/UX Design",
  "Digital Assets",
  "Data Science",
  "Productivity",
  "Finance",
  "Entrepreneurship",
];
const sortOptions = [
  "Most relevant",
  "Highest Rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedSort, setSelectedSort] = useState("Most relevant");

  // Dropdown open states
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Dropdown refs for click outside
  const filterRef = useRef<HTMLDivElement>(null);
  const levelRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (filterRef.current && !filterRef.current.contains(target)) {
        setIsFilterOpen(false);
      }
      if (levelRef.current && !levelRef.current.contains(target)) {
        setIsLevelOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(target)) {
        setIsCategoryOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(target)) {
        setIsSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter & sort logic for the 6 creator courses
  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (selectedLevel !== "All Levels") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    if (selectedSort === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedLevel, selectedSort]);

  return (
    <div className="w-full bg-primary-bg min-h-screen">
      {/* Blue Grid Hero Header */}
      <section className="relative overflow-hidden bg-brand pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-18">
        {/* Background Grid Pattern */}
        <Image
          src={authBg}
          alt="ByteSpace Background Grid"
          fill
          priority
          unoptimized
          className="pointer-events-none object-cover select-none"
        />

        <Container className="relative z-10">
          {/* Creator Profile Info Block */}
          <div className="flex flex-col gap-6">
            {/* Top row: Avatar + Name + Creator Badge + Subtitle */}
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Creator Avatar (Square with rounded corners) */}
              <div className="relative size-20 sm:size-24 shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-white/20 shadow-xl bg-neutral-800">
                <Image
                  src="/images/avatars/avatar1.png"
                  alt="PurePearl Studio"
                  fill
                  priority
                  unoptimized
                  className="object-cover"
                />
              </div>

              {/* Name & Creator Badge */}
              <div className="pt-1">
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-white tracking-tight">
                    PurePearl Studio
                  </h1>
                  <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-primary-text shadow-2xs">
                    Creator
                  </span>
                </div>

                <p className="mt-1 text-xs sm:text-sm text-white/80 font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Creator Bio Paragraphs */}
            <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-white/90 max-w-4xl font-normal">
              <p>
                Welcome to the creative world of PurePearl Studio. Here, you&apos;ll
                discover the passion, expertise, and inspiration that drive my
                creative journey. Let&apos;s explore and learn together!
              </p>
              <p>
                Dive into my creative portfolio, showcasing a glimpse of my
                artistic endeavors. From digital designs to multimedia projects,
                each piece tells a unique story. Explore the world of creativity
                with me.
              </p>
            </div>

            {/* Stats Row & Follow Button */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              {/* Left: Products & Followers Pills */}
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs shadow-xs">
                  <span className="font-bold text-primary-text mr-1.5">3</span>
                  <span className="text-secondary-text font-medium">Products</span>
                </span>

                <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-xs shadow-xs">
                  <span className="font-bold text-primary-text mr-1.5">
                    {isFollowing ? "13" : "12"}
                  </span>
                  <span className="text-secondary-text font-medium">Followers</span>
                </span>
              </div>

              {/* Right: Follow Button */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsFollowing((prev) => !prev)}
                  className={cn(
                    "rounded-full px-7 sm:px-8 py-2.5 text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer",
                    isFollowing
                      ? "bg-white text-brand hover:bg-neutral-100"
                      : "bg-lime hover:bg-lime-hover text-primary-text"
                  )}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Course Listing Section */}
      <section className="w-full py-8 sm:py-10 lg:py-12">
        <Container>
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            {/* Left Filter Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {/* Filter Button */}
              <div className="relative" ref={filterRef}>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50 cursor-pointer",
                    (selectedLevel !== "All Levels" || selectedCategory !== "All Categories") &&
                      "border-brand text-brand ring-1 ring-brand/20"
                  )}
                >
                  <Filter className="size-3.5 sm:size-4" />
                  <span>Filter</span>
                </button>

                {isFilterOpen && (
                  <div className="absolute left-0 top-full mt-2 w-52 rounded-2xl border border-stroke bg-white p-3 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-xs font-semibold text-secondary-text mb-2 px-1">
                      Quick Reset
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLevel("All Levels");
                        setSelectedCategory("All Categories");
                        setSelectedSort("Most relevant");
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left rounded-xl px-2.5 py-1.5 text-xs text-danger hover:bg-red-50 font-medium transition-colors cursor-pointer"
                    >
                      Reset All Filters
                    </button>
                  </div>
                )}
              </div>

              {/* Level Dropdown */}
              <div className="relative" ref={levelRef}>
                <button
                  type="button"
                  onClick={() => setIsLevelOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50 cursor-pointer",
                    selectedLevel !== "All Levels" && "border-brand text-brand font-semibold"
                  )}
                >
                  <ChartNoAxesColumn className="size-3.5 sm:size-4" />
                  <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
                  <ChevronDown className="size-3 text-secondary-text" />
                </button>

                {isLevelOpen && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded-2xl border border-stroke bg-white p-2 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                    {levels.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setIsLevelOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors cursor-pointer",
                          selectedLevel === lvl
                            ? "bg-secondary-bg font-semibold text-brand"
                            : "text-primary-text hover:bg-neutral-100"
                        )}
                      >
                        <span>{lvl}</span>
                        {selectedLevel === lvl && <Check className="size-3.5 text-brand" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50 cursor-pointer",
                    selectedCategory !== "All Categories" && "border-brand text-brand font-semibold"
                  )}
                >
                  <LayoutGrid className="size-3.5 sm:size-4" />
                  <span>{selectedCategory === "All Categories" ? "Category" : selectedCategory}</span>
                  <ChevronDown className="size-3 text-secondary-text" />
                </button>

                {isCategoryOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-stroke bg-white p-2 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors cursor-pointer",
                          selectedCategory === cat
                            ? "bg-secondary-bg font-semibold text-brand"
                            : "text-primary-text hover:bg-neutral-100"
                        )}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check className="size-3.5 text-brand" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                type="button"
                onClick={() => setIsSortOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50 cursor-pointer"
              >
                <ArrowUpDown className="size-3.5 sm:size-4 text-secondary-text" />
                <span>{selectedSort}</span>
                <ChevronDown className="size-3 text-secondary-text" />
              </button>

              {isSortOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-stroke bg-white p-2 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-150">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setIsSortOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors cursor-pointer",
                        selectedSort === opt
                          ? "bg-secondary-bg font-semibold text-brand"
                          : "text-primary-text hover:bg-neutral-100"
                      )}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && <Check className="size-3.5 text-brand" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* 6 Course Cards Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredCourses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
