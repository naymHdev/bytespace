export type Category = {
  slug: string;
  label: string;
  icon: string;
};

export const learningPaths: Category[] = [
  { slug: "design", label: "Design", icon: "/images/categories/l1.png" },
  {
    slug: "development",
    label: "Development",
    icon: "/images/categories/l2.png",
  },
  {
    slug: "it-software",
    label: "IT & Software",
    icon: "/images/categories/l3.png",
  },
  {
    slug: "business",
    label: "Business",
    icon: "/images/categories/l4.png",
  },
  {
    slug: "marketing",
    label: "Marketing",
    icon: "/images/categories/l5.png",
  },
  {
    slug: "photography",
    label: "Photography",
    icon: "/images/categories/l6.png",
  },
];
