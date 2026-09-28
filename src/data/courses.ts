export type Course = {
  slug: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessons: number;
  duration: string;
  comments: number;
  price: number;
  enrolled: number;
  avatars: string[];
};

export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const avatars = [
  "/images/avatars/avatar1.png",
  "/images/avatars/avatar2.png",
  "/images/avatars/avatar3.png",
  "/images/avatars/avatar4.png",
];

const base = {
  author: "purepearl studio",
  rating: 4.5,
  level: "Beginner" as const,
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  price: 25,
  enrolled: 26,
  avatars,
};

export const courses: Course[] = [
  {
    ...base,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/courses/c1.png",
  },
  {
    ...base,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/c2.png",
  },
  {
    ...base,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/images/courses/c3.png",
  },
  {
    ...base,
    slug: "balancing-productivity-and-focus",
    title: "Balancing Productivity and Focus",
    image: "/images/courses/c4.png",
  },
  {
    ...base,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/images/courses/c5.png",
  },
  {
    ...base,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/courses/c6.png",
  },
];
