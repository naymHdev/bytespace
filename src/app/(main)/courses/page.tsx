"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  Filter,
  ChartNoAxesColumn,
  LayoutGrid,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
} from "lucide-react";

import Container from "@/components/core/Container";
import CourseCard from "@/components/shared/course-card";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";
import authBg from "@/assets/auth/auth-bg.png";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const sortOptions = [
  "Most popular",
  "Highest Rated",
  "Newest",
  "Price: Low to High",
  "Price: High to Low",
];

const courseTypes = [
  "Courses",
  "All Courses",
  "Popular",
  "Free Courses",
  "Certifications",
];

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourseType, setSelectedCourseType] = useState("Courses");
  const [selectedCategory, setSelectedCategory] = useState("Featured");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSort, setSelectedSort] = useState("Most popular");
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown states
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Refs for click outside
  const courseDropdownRef = useRef<HTMLDivElement>(null);
  const filterDropdownRef = useRef<HTMLDivElement>(null);
  const levelDropdownRef = useRef<HTMLDivElement>(null);
  const categoryDropdownRef = useRef<HTMLDivElement>(null);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (courseDropdownRef.current && !courseDropdownRef.current.contains(target)) {
        setIsCourseDropdownOpen(false);
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(target)) {
        setIsFilterDropdownOpen(false);
      }
      if (levelDropdownRef.current && !levelDropdownRef.current.contains(target)) {
        setIsLevelDropdownOpen(false);
      }
      if (categoryDropdownRef.current && !categoryDropdownRef.current.contains(target)) {
        setIsCategoryDropdownOpen(false);
      }
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(target)) {
        setIsSortDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Repeat courses 3 times to get 18 courses as shown in the Figma design (6 rows x 3 columns)
  const base18Courses = useMemo(() => {
    return [...courses, ...courses, ...courses];
  }, []);

  // Filter & sort logic
  const filteredCourses = useMemo(() => {
    let result = [...base18Courses];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.author.toLowerCase().includes(q)
      );
    }

    // Filter by level
    if (selectedLevel !== "All Levels") {
      result = result.filter((c) => c.level === selectedLevel);
    }

    // Sort
    if (selectedSort === "Highest Rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (selectedSort === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (selectedSort === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [base18Courses, searchQuery, selectedLevel, selectedSort]);

  return (
    <div className="w-full bg-primary-bg min-h-screen">
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden bg-brand pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-36 lg:pb-16">
        {/* Background Grid Pattern */}
        <Image
          src={authBg}
          alt="ByteSpace Background Grid"
          fill
          priority
          className="pointer-events-none object-cover select-none"
        />

        <Container className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight">
            Find Your Next Course
          </h1>

          {/* Search Bar + Courses Pill */}
          <div className="mx-auto mt-6 sm:mt-7 flex max-w-xl items-center justify-center gap-2.5 sm:gap-3 px-4">
            {/* Search Input Container */}
            <div className="relative flex-1 max-w-[340px] sm:max-w-[400px]">
              <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-secondary-text pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="h-10 sm:h-11 w-full rounded-full bg-white pl-10 pr-9 text-xs sm:text-sm text-primary-text placeholder:text-secondary-text outline-none shadow-sm focus:ring-2 focus:ring-lime"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-secondary-text hover:text-primary-text"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Courses Dropdown Pill */}
            <div className="relative" ref={courseDropdownRef}>
              <button
                type="button"
                onClick={() => setIsCourseDropdownOpen((prev) => !prev)}
                className="flex h-10 sm:h-11 items-center gap-1.5 rounded-full bg-lime px-4 sm:px-5 text-xs sm:text-sm font-semibold text-primary-text shadow-sm transition-colors hover:bg-lime-hover"
              >
                <span>{selectedCourseType}</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 sm:size-4 transition-transform duration-200",
                    isCourseDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {isCourseDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-stroke bg-white p-1.5 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-100">
                  {courseTypes.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setSelectedCourseType(item);
                        setIsCourseDropdownOpen(false);
                        setCurrentPage(1);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors",
                        selectedCourseType === item
                          ? "bg-secondary-bg font-semibold text-brand"
                          : "text-primary-text hover:bg-neutral-100"
                      )}
                    >
                      <span>{item}</span>
                      {selectedCourseType === item && <Check className="size-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Filter & Course Grid Section */}
      <section className="w-full py-8 sm:py-10 lg:py-12">
        <Container>
          {/* Top Filter Buttons Row */}
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            {/* Left Controls */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {/* Filter Button */}
              <div className="relative" ref={filterDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsFilterDropdownOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50",
                    (selectedLevel !== "All Levels" || searchQuery) && "border-brand text-brand ring-1 ring-brand/20"
                  )}
                >
                  <Filter className="size-3.5 sm:size-4" />
                  <span>Filter</span>
                </button>

                {isFilterDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-stroke bg-white p-3 shadow-xl z-30">
                    <div className="text-xs font-semibold text-secondary-text mb-2 px-1">
                      Quick Filters
                    </div>
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLevel("All Levels");
                          setSearchQuery("");
                          setSelectedCategory("Featured");
                          setIsFilterDropdownOpen(false);
                        }}
                        className="w-full text-left rounded-xl px-2.5 py-1.5 text-xs text-danger hover:bg-red-50 font-medium transition-colors"
                      >
                        Reset All Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Level Dropdown */}
              <div className="relative" ref={levelDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsLevelDropdownOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50",
                    selectedLevel !== "All Levels" && "border-brand text-brand font-semibold"
                  )}
                >
                  <ChartNoAxesColumn className="size-3.5 sm:size-4" />
                  <span>{selectedLevel === "All Levels" ? "Level" : selectedLevel}</span>
                  <ChevronDown
                    className={cn(
                      "size-3 sm:size-3.5 text-secondary-text transition-transform duration-200",
                      isLevelDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {isLevelDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-44 rounded-2xl border border-stroke bg-white p-1.5 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-100">
                    {levels.map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => {
                          setSelectedLevel(lvl);
                          setIsLevelDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors",
                          selectedLevel === lvl
                            ? "bg-secondary-bg font-semibold text-brand"
                            : "text-primary-text hover:bg-neutral-100"
                        )}
                      >
                        <span>{lvl}</span>
                        {selectedLevel === lvl && <Check className="size-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Category Dropdown */}
              <div className="relative" ref={categoryDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsCategoryDropdownOpen((prev) => !prev)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50",
                    selectedCategory !== "Featured" && "border-brand text-brand font-semibold"
                  )}
                >
                  <LayoutGrid className="size-3.5 sm:size-4" />
                  <span>{selectedCategory === "Featured" ? "Category" : selectedCategory}</span>
                  <ChevronDown
                    className={cn(
                      "size-3 sm:size-3.5 text-secondary-text transition-transform duration-200",
                      isCategoryDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {isCategoryDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-52 max-h-64 overflow-y-auto rounded-2xl border border-stroke bg-white p-1.5 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-100">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat);
                          setIsCategoryDropdownOpen(false);
                          setCurrentPage(1);
                        }}
                        className={cn(
                          "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors",
                          selectedCategory === cat
                            ? "bg-secondary-bg font-semibold text-brand"
                            : "text-primary-text hover:bg-neutral-100"
                        )}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check className="size-3.5" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sort Dropdown */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                type="button"
                onClick={() => setIsSortDropdownOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-full border border-stroke bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-primary-text shadow-2xs transition-colors hover:bg-neutral-50"
              >
                <ArrowUpDown className="size-3.5 sm:size-4 text-primary-text" />
                <span>{selectedSort}</span>
                <ChevronDown
                  className={cn(
                    "size-3 sm:size-3.5 text-secondary-text transition-transform duration-200",
                    isSortDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {isSortDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-stroke bg-white p-1.5 shadow-xl z-30 animate-in fade-in zoom-in-95 duration-100">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedSort(opt);
                        setIsSortDropdownOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs sm:text-sm font-medium transition-colors",
                        selectedSort === opt
                          ? "bg-secondary-bg font-semibold text-brand"
                          : "text-primary-text hover:bg-neutral-100"
                      )}
                    >
                      <span>{opt}</span>
                      {selectedSort === opt && <Check className="size-3.5" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="mt-5 sm:mt-6 overflow-x-auto no-scrollbar py-1">
            <div className="flex items-center gap-2 sm:gap-2.5">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={cn(
                      "rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-lime text-primary-text font-semibold shadow-xs"
                        : "bg-secondary-bg text-primary-text hover:bg-neutral-200"
                    )}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Courses Grid */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard
                key={`${course.slug}-${index}`}
                course={course}
              />
            ))}
          </div>

          {/* Empty state if search has no results */}
          {filteredCourses.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-secondary-text">
                No courses found matching &quot;{searchQuery}&quot;
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLevel("All Levels");
                  setSelectedCategory("Featured");
                }}
                className="mt-4 rounded-full bg-lime px-6 py-2.5 text-sm font-semibold text-primary-text hover:bg-lime-hover"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Pagination Controls */}
          <div className="mt-12 sm:mt-16 mb-6 sm:mb-10 flex items-center justify-center gap-2 sm:gap-3">
            {/* Prev Button */}
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
              className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-stroke text-primary-text transition-colors hover:border-brand hover:text-brand disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous page"
            >
              <ChevronLeft className="size-4" />
            </button>

            {/* Page Numbers 1 to 5 */}
            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 200, behavior: "smooth" });
                }}
                className={cn(
                  "flex size-9 sm:size-10 items-center justify-center rounded-full text-xs sm:text-sm font-medium transition-colors",
                  currentPage === pageNum
                    ? "font-bold text-primary-text"
                    : "text-secondary-text hover:text-primary-text"
                )}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Button */}
            <button
              type="button"
              disabled={currentPage === 5}
              onClick={() => {
                setCurrentPage((p) => Math.min(5, p + 1));
                window.scrollTo({ top: 200, behavior: "smooth" });
              }}
              className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-stroke text-primary-text transition-colors hover:border-brand hover:text-brand disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next page"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CoursesPage;
