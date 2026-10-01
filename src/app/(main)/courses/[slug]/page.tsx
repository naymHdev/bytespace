"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesColumn,
  Star,
  Users,
  Share2,
  Play,
  Check,
  FolderArchive,
  Video,
  Award,
  MessagesSquare,
  X,
} from "lucide-react";

import Container from "@/components/core/Container";
import authBg from "@/assets/auth/auth-bg.png";
import { cn } from "@/lib/utils";

const tabs = ["About", "Lesson", "Reviews"];

const modules = [
  {
    num: "1",
    title: "Module 1: Introduction to Digital Assets",
    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
  },
  {
    num: "2",
    title: "Module 2: Design Principles for Impact",
    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
  },
  {
    num: "4",
    title: "Module 4: User-Centric Design Strategies",
    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
  },
  {
    num: "5",
    title: "Module 5: Interactive Media and Engagement",
    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
  },
  {
    num: "6",
    title: "Module 6: Project Showcase and Critique",
    desc: "Put theory into practice with hands-on projects and receive constructive feedback through peer reviews and expert critiques to refine your portfolio.",
  },
];

const reviews = [
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatars/avatar3.png",
    stars: 5,
    comment:
      "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    time: "a year ago",
    avatar: "/images/avatars/avatar4.png",
    stars: 5,
    comment:
      "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const sampleLessons = [
  {
    num: "01",
    title: "Introduction to Digital Assets",
    duration: "12 mins",
  },
  {
    num: "02",
    title: "Design Principles for Impacts",
    duration: "21 mins",
  },
  {
    num: "03",
    title: "Advanced Techniques in Digital Creation",
    duration: "16 mins",
  },
];

const courseIncludes = [
  {
    icon: FolderArchive,
    text: "Learning Resources",
  },
  {
    icon: Video,
    text: "Quality Lesson Videos",
  },
  {
    icon: Award,
    text: "Certificate of Completion",
  },
  {
    icon: MessagesSquare,
    text: "Private Consultation",
  },
];

const keyPoints = [
  "Comprehensive Project Walkthrough & Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

const sneakPeekImages = [
  {
    src: "/images/courses/c1.png",
    alt: "Wireframe sketching and ideation on paper",
  },
  {
    src: "/images/courses/sneak-2.jpg",
    alt: "UI/UX component design on modern laptop",
  },
  {
    src: "/images/courses/c4.png",
    alt: "Designer workspace setup with dual monitors and plant",
  },
  {
    src: "/images/courses/sneak-4.jpg",
    alt: "Mobile application interface screens and flow",
  },
];

const CourseDetailPage = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="relative w-full bg-primary-bg min-h-screen">
      {/* Top Blue Hero Grid Banner Background */}
      <div className="absolute top-0 inset-x-0 h-[700px] sm:h-[780px] lg:h-[940px] bg-brand overflow-hidden pointer-events-none z-0">
        <Image
          src={authBg}
          alt="ByteSpace Grid Background"
          fill
          priority
          unoptimized
          className="object-cover select-none"
        />
      </div>

      <Container className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        {/* Course Header Area */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left: Title, Subtitle, Author, Badges */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-white tracking-tight leading-[1.2]">
              Build Digital Asset: A Comprehensive Guide
            </h1>

            <p className="mt-2.5 text-sm sm:text-base text-white/80 font-normal">
              Unlock the Power of Digital Creation with Expert Guidance
            </p>

            <p className="mt-3 text-xs sm:text-sm text-white/70 font-normal">
              by{" "}
              <span className="text-lime font-semibold underline decoration-lime/50 underline-offset-4 cursor-pointer hover:text-white transition-colors">
                purepearl studio
              </span>
            </p>

            {/* Pill Badges Row */}
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 sm:px-4 py-2 text-xs font-semibold text-primary-text shadow-sm">
                <ChartNoAxesColumn className="size-3.5 text-primary-text" />
                Intermediate
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 sm:px-4 py-2 text-xs font-semibold text-primary-text shadow-sm">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                4.5 (172 reviews)
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 sm:px-4 py-2 text-xs font-semibold text-primary-text shadow-sm">
                <Users className="size-3.5 text-primary-text" />
                199 Students
              </span>
            </div>
          </div>

          {/* Right: Share Button */}
          <div className="shrink-0 pt-1">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full bg-lime hover:bg-lime-hover px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary-text shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Share2 className="size-4" />
              <span>{copiedShare ? "Copied!" : "Share"}</span>
            </button>
          </div>
        </div>

        {/* Main 2-Column Content Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (Video + Tabs + Content) */}
          <div className="lg:col-span-8 flex flex-col space-y-8 sm:space-y-10">
            {/* Video Preview Card */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl border border-white/20 cursor-pointer"
            >
              <Image
                src="/images/courses/course-preview.jpg"
                alt="Course Video Preview"
                fill
                priority
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 sm:size-20 rounded-2xl sm:rounded-3xl bg-black/40 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-black/60">
                  <Play className="size-7 sm:size-8 fill-white text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Navigation Tabs (About / Lessons / Reviews) */}
            <div className="flex items-center gap-2 sm:gap-3 pt-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "rounded-full px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer",
                      isActive
                        ? "bg-lime text-primary-text font-semibold shadow-xs"
                        : "bg-secondary-bg text-secondary-text hover:text-primary-text hover:bg-neutral-200"
                    )}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            {/* Tab: About (Default Content matching Figma) */}
            {activeTab === "About" && (
              <div className="flex flex-col space-y-8 sm:space-y-10">
                {/* Description */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">
                    Description
                  </h2>

                  <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-secondary-text">
                    <p>
                      Embark on an enlightening exploration into the world of
                      digital creation with our comprehensive course, &quot;Build
                      Digital Assets: A Comprehensive Guide.&quot; This
                      transformative learning experience invites you to delve
                      deep into the intricacies of crafting impactful digital
                      content. From laying the groundwork with foundational
                      concepts to mastering advanced techniques, this guide is
                      meticulously curated to empower you with the skills
                      essential for navigating the dynamic landscape of digital
                      asset creation.
                    </p>

                    <p>
                      In the initial modules, you&apos;ll establish a solid
                      foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation.
                      Understand the fundamental elements that constitute
                      compelling digital content and gain proficiency in
                      leveraging these elements to communicate effectively in the
                      digital realm.
                    </p>

                    <p>
                      As you progress through the course, you&apos;ll ascend to
                      higher levels of expertise, delving into the nuances of
                      design principles that drive impactful creations. Uncover
                      the secrets behind effective visual communication,
                      exploring color theory, typography, and layout strategies
                      that elevate your digital assets to new heights. Engage in
                      hands-on exercises that reinforce your understanding,
                      allowing you to apply these principles in practical
                      scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peek */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">
                    Sneak Peek
                  </h2>

                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {sneakPeekImages.map((img, i) => (
                      <div
                        key={i}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-stroke bg-secondary-bg shadow-2xs transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">
                    Key Points
                  </h2>

                  <ul className="mt-4 space-y-3.5">
                    {keyPoints.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-xs sm:text-sm font-medium text-primary-text"
                      >
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                          <Check className="size-3 stroke-[3]" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Tab: Lesson */}
            {activeTab === "Lesson" && (
              <div className="flex flex-col space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">
                    Explore the Modules
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-secondary-text">
                    Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">
                    Lesson List
                  </h2>

                  <div className="mt-5 space-y-5">
                    {modules.map((mod) => (
                      <div
                        key={mod.num}
                        className="flex items-start gap-4"
                      >
                        {/* Lime Video Camera Icon */}
                        <div className="flex size-12 sm:size-14 shrink-0 items-center justify-center rounded-2xl bg-lime text-primary-text">
                          <Video className="size-5 sm:size-6 text-primary-text" />
                        </div>

                        <div className="pt-0.5">
                          <h3 className="font-bold text-sm sm:text-base text-primary-text">
                            {mod.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-secondary-text">
                            {mod.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learning Progress Card */}
                <div className="rounded-2xl border border-stroke bg-white p-5 sm:p-6 shadow-2xs">
                  <span className="text-xs sm:text-sm font-medium text-secondary-text">
                    Learning Progress
                  </span>
                  <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-primary-text">
                    55%
                  </div>
                  <div className="mt-3.5 h-3 w-full overflow-hidden rounded-full bg-secondary-bg">
                    <div
                      className="h-full rounded-full bg-lime transition-all duration-700"
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Reviews */}
            {activeTab === "Reviews" && (
              <div className="flex flex-col space-y-6 sm:space-y-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-text">
                    What Learners Are Saying
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-secondary-text">
                    Discover what our learners have to say about their experience with &quot;Build Digital Assets: A Comprehensive Guide.&quot; Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                <div className="space-y-4">
                  {reviews.map((rev, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-stroke bg-white p-5 sm:p-6 shadow-2xs space-y-3.5"
                    >
                      {/* Top User Info Row */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image
                            src={rev.avatar}
                            alt={rev.name}
                            width={44}
                            height={44}
                            unoptimized
                            className="size-10 sm:size-11 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-sm sm:text-base text-primary-text">
                              {rev.name}
                            </h4>
                            <p className="text-xs text-secondary-text">
                              {rev.role}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-secondary-text">
                          {rev.time}
                        </span>
                      </div>

                      {/* 5 Dark Stars */}
                      <div className="flex items-center gap-1 text-primary-text">
                        {[...Array(rev.stars)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="size-4 fill-primary-text text-primary-text"
                          />
                        ))}
                      </div>

                      {/* Review Comment */}
                      <p className="text-xs sm:text-sm leading-relaxed text-secondary-text">
                        {rev.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-stroke bg-white p-6 sm:p-7 shadow-xl">
              {/* Lessons Title */}
              <h3 className="text-base sm:text-lg font-bold text-primary-text">
                112 Lessons (24 hours)
              </h3>

              {/* Sample Lessons */}
              <div className="mt-4 space-y-2.5">
                {sampleLessons.map((item) => (
                  <div
                    key={item.num}
                    className="flex items-center justify-between text-xs sm:text-sm gap-2"
                  >
                    <span className="text-primary-text font-medium truncate">
                      <span className="text-secondary-text mr-2">{item.num}</span>
                      {item.title}
                    </span>
                    <span className="text-brand font-semibold shrink-0">
                      {item.duration}
                    </span>
                  </div>
                ))}

                <p className="text-xs text-secondary-text pt-1 font-normal cursor-pointer hover:underline hover:text-brand transition-colors">
                  99 more videos
                </p>
              </div>

              {/* Call to action message */}
              <p className="mt-5 text-xs sm:text-sm leading-relaxed text-secondary-text">
                Ready to Dive in? Enroll Now and Start Building Your Digital
                Future!
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-bold text-brand">
                  $25
                </span>
                <span className="text-xs font-normal text-secondary-text">
                  /lifetime
                </span>
              </div>

              {/* Enroll Button */}
              <button
                type="button"
                className="mt-3.5 flex h-11 sm:h-12 w-full items-center justify-center rounded-full bg-lime hover:bg-lime-hover text-sm sm:text-base font-bold text-primary-text shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Enroll Now
              </button>

              {/* "This course include" Features */}
              <div className="mt-6 border-t border-stroke pt-5">
                <h4 className="text-sm font-bold text-primary-text">
                  This course include
                </h4>

                <ul className="mt-3.5 space-y-3">
                  {courseIncludes.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-xs sm:text-sm text-primary-text font-medium"
                      >
                        <IconComponent className="size-4 text-brand shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Creator Profile Box */}
              <div className="mt-6 rounded-2xl border border-stroke p-4 bg-secondary-bg/40">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/avatars/avatar4.png"
                    alt="PurePearl Studio"
                    width={44}
                    height={44}
                    unoptimized
                    className="size-11 rounded-full object-cover ring-2 ring-white"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-primary-text">
                      PurePearl Studio
                    </h5>
                    <p className="text-xs text-secondary-text">
                      Professional Creator
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-secondary-text">
                  Ready to Dive in? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                <Link
                  href="/creators"
                  className="mt-3.5 flex h-9 w-full items-center justify-center rounded-full border border-stroke bg-white text-xs font-semibold text-primary-text hover:bg-neutral-50 transition-colors cursor-pointer"
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-black shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>
            <div className="relative aspect-video w-full">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Course Preview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailPage;
