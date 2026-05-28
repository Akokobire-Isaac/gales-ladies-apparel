import type { Category } from "@/types";

export interface CategoryItem {
  slug: Category;
  name: string;
  description: string;
  image: string;
}

export const categories: CategoryItem[] = [
  {
    slug: "office-wear",
    name: "Office Wear",
    description: "Sharp, sophisticated pieces for the boardroom",
    image: "/images/Top1.jpeg",
  },
  {
    slug: "dresses",
    name: "Dresses",
    description: "Timeless silhouettes with modern elegance",
    image: "/images/dress11.jpeg",
  },
  {
    slug: "tops",
    name: "Tops",
    description: "Refined blouses and statement tops",
    image: "/images/Top1.jpeg",
  },
  {
    slug: "handbags",
    name: "Handbags",
    description: "Luxury bags to complete every look",
    image: "/images/Bag2.jpeg",
  },
  {
    slug: "heels",
    name: "Heels",
    description: "Elevate your stride with premium heels",
    image: "/images/heels4.jpeg",
  },
  {
    slug: "safety-boots",
    name: "Safety Boots",
    description: "Professional protection without compromising style",
    image: "/images/safetyboot.jpeg",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description: "Finishing touches that define luxury",
    image: "/images/Bag1.jpeg",
  },
];
