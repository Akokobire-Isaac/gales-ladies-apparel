import type { Product, Category } from "@/types";

function img(filename: string) {
  return `/images/${filename}`;
}

function item(
  id: string,
  slug: string,
  name: string,
  category: Category,
  filename: string,
  price: number,
  extra: Partial<Product> = {}
): Product {
  return {
    id,
    slug,
    name,
    description: extra.description ?? `Premium ${name.toLowerCase()} from Gale's Ladies Apparel — crafted for the modern Ghanaian woman.`,
    price,
    category,
    images: [img(filename)],
    tags: extra.tags ?? [category.replace("-", " ")],
    inStock: true,
    ...extra,
  };
}

/** Catalog mapped to files in /public/images */
export const products: Product[] = [
  // ——— Dresses ———
  item("d1", "elegant-midi-dress-2", "Elegant Midi Dress", "dresses", "dress2.jpeg", 150, {
    featured: true, trending: true, sizes: ["S", "M", "L", "XL"],
  }),
  item("d2", "classic-office-dress-3", "Classic Office Dress", "dresses", "dress3.jpeg", 120, {
    bestSeller: true, sizes: ["S", "M", "L"],
  }),
  item("d3", "sophisticated-wrap-dress-4", "Sophisticated Wrap Dress", "dresses", "dress4.jpeg", 180, {
    sizes: ["S", "M", "L"],
  }),
  item("d4", "power-meeting-dress-5", "Power Meeting Dress", "dresses", "dress5.jpeg", 150, {
    category: "office-wear",
    tags: ["dress", "office", "professional"],
    featured: true,
    sizes: ["S", "M", "L", "XL"],
  }),
  item("d5", "evening-glam-dress-6", "Evening Glam Dress", "dresses", "drees6.jpeg", 180, {
    newArrival: true,
    sizes: ["S", "M", "L"],
  }),
  item("d6", "chic-day-dress-7", "Chic Day Dress", "dresses", "dress7.jpeg", 120, {
    sizes: ["S", "M", "L"],
  }),
  item("d7", "refined-cocktail-dress-8", "Refined Cocktail Dress", "dresses", "dress8.jpeg", 150, {
    trending: true,
    sizes: ["S", "M", "L"],
  }),
  item("d8", "statement-party-dress-9", "Statement Party Dress", "dresses", "dress9.jpeg", 180, {
    trending: true,
    bestSeller: true,
    sizes: ["S", "M", "L"],
  }),
  item("d9", "luxury-formal-dress-10", "Luxury Formal Dress", "dresses", "dress10.jpeg", 150, {
    bestSeller: true,
    featured: true,
    sizes: ["S", "M", "L", "XL"],
  }),
  item("d10", "signature-gown-11", "Signature Gown", "dresses", "dress11.jpeg", 180, {
    featured: true,
    trending: true,
    newArrival: true,
    originalPrice: 210,
    sizes: ["S", "M", "L"],
  }),
  item("d11", "modern-fit-dress-12", "Modern Fit Dress", "dresses", "dress12.jpeg", 120, {
    sizes: ["S", "M", "L"],
  }),
  item("d12", "executive-midi-13", "Executive Midi Dress", "dresses", "dress13.jpeg", 150, {
    featured: true,
    category: "office-wear",
    tags: ["dress", "office", "midi"],
    sizes: ["S", "M", "L", "XL"],
  }),
  item("d13", "graceful-summer-dress-14", "Graceful Summer Dress", "dresses", "dress14.jpeg", 180, {
    newArrival: true,
    sizes: ["S", "M", "L"],
  }),
  item("d14", "minimalist-shift-15", "Minimalist Shift Dress", "dresses", "dress15.jpeg", 120, {
    newArrival: true,
    sizes: ["S", "M", "L"],
  }),
  item("d15", "boutique-exclusive-16", "Boutique Exclusive Dress", "dresses", "dress16.jpeg", 180, {
    newArrival: true,
    bestSeller: true,
    sizes: ["S", "M", "L"],
  }),

  // ——— Tops / Office ———
  item("t1", "premium-office-top", "Premium Office Top", "tops", "Top1.jpeg", 220, {
    category: "office-wear",
    tags: ["top", "blouse", "office"],
    featured: true,
    bestSeller: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Beige"],
  }),

  // ——— Handbags ———
  item("b1", "structured-tote-bag-1", "Structured Tote Bag", "handbags", "Bag1.jpeg", 150, {
    featured: true,
    colors: ["Tan", "Black", "Cream"],
  }),
  item("b2", "aurum-designer-handbag", "Aurum Designer Handbag", "handbags", "Bag2.jpeg", 200, {
    featured: true,
    bestSeller: true,
    originalPrice: 220,
    colors: ["Gold", "Black"],
  }),
  item("b3", "elegant-shoulder-bag", "Elegant Shoulder Bag", "handbags", "Bag3.jpeg", 170, {
    trending: true,
    colors: ["Brown", "Black"],
  }),
  item("b4", "luxury-crossbody-bag", "Luxury Crossbody Bag", "handbags", "Bag4.jpeg", 160, {
    colors: ["Tan", "Black"],
  }),
  item("b6", "compact-evening-clutch", "Compact Evening Clutch", "handbags", "Bag6.jpeg", 150, {
    newArrival: true,
    colors: ["Gold", "Silver"],
  }),
  item("b7", "classic-leather-handbag", "Classic Leather Handbag", "handbags", "Bag7.jpeg", 180, {
    bestSeller: true,
    colors: ["Brown", "Black"],
  }),
  item("b8", "statement-chain-bag", "Statement Chain Bag", "handbags", "Bag8.jpeg", 190, {
    trending: true,
    colors: ["Black", "Cream"],
  }),
  item("b9", "premium-work-tote", "Premium Work Tote", "handbags", "Bag9.jpeg", 200, {
    featured: true,
    tags: ["handbag", "tote", "office"],
    colors: ["Black", "Tan"],
  }),
  item("b10", "designer-top-handle", "Designer Top Handle Bag", "handbags", "Bag10.jpeg", 190, {
    newArrival: true,
    originalPrice: 210,
    colors: ["Black", "Burgundy"],
  }),
  item("b11", "exclusive-limited-bag", "Exclusive Limited Bag", "handbags", "Bag11.jpeg", 200, {
    newArrival: true,
    featured: true,
    colors: ["Gold", "Black"],
  }),

  // ——— Heels ———
  item("h1", "classic-stiletto-heels", "Classic Stiletto Heels", "heels", "heels.jpeg", 150, {
    featured: true,
    bestSeller: true,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Nude"],
  }),
  item("h2", "gold-strap-heels-1", "Gold Strap Heels", "heels", "heesls1.jpeg", 180, {
    trending: true,
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Gold", "Nude"],
  }),
  item("h3", "pointed-toe-heels-2", "Pointed Toe Heels", "heels", "heels2.jpeg", 120, {
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Red"],
  }),
  item("h4", "elegant-block-heels-3", "Elegant Block Heels", "heels", "heels3.jpeg", 100, {
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Black", "Nude"],
  }),
  item("h5", "premium-party-heels-4", "Premium Party Heels", "heels", "heels4.jpeg", 180, {
    featured: true,
    trending: true,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Gold", "Silver"],
  }),
  item("h6", "sleek-office-heels-5", "Sleek Office Heels", "heels", "heels5.jpeg", 130, {
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Black", "Brown"],
  }),
  item("h7", "strappy-evening-heels-6", "Strappy Evening Heels", "heels", "heels6.jpeg", 160, {
    newArrival: true,
    sizes: ["36", "37", "38", "39", "40"],
    colors: ["Black", "Nude"],
  }),
  item("h8", "designer-heel-collection-7", "Designer Heel Collection", "heels", "heels7.jpeg", 170, {
    newArrival: true,
    trending: true,
    sizes: ["36", "37", "38", "39", "40", "41"],
    colors: ["Black", "Gold"],
  }),

  // ——— Safety Boots ———
  item("s1", "pro-guard-safety-boot", "Pro-Guard Safety Boot", "safety-boots", "safetyboot.jpeg", 200, {
    featured: true,
    bestSeller: true,
    originalPrice: 230,
    video: "/images/safetybootvideo.mp4",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: ["Brown", "Black"],
    description:
      "Steel-toe safety boots with sleek leather finish. Professional protection meets feminine design — trusted for workplaces across Ghana.",
  }),
  item("s2", "elite-safety-boot-2", "Elite Safety Boot", "safety-boots", "safetyboot2.jpeg", 200, {
    trending: true,
    video: "/images/safetybootvideo.mp4",
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    colors: ["Black", "Brown"],
    description:
      "Premium safety footwear with reinforced toe cap. Durable, comfortable, and styled for the modern professional woman.",
  }),
];

function normalizeSlug(value: string): string {
  return decodeURIComponent(value).trim().toLowerCase();
}

export function getProductBySlug(slug: string): Product | undefined {
  const normalized = normalizeSlug(slug);
  return products.find((p) => normalizeSlug(p.slug) === normalized);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "new-arrivals") {
    return products.filter((p) => p.newArrival);
  }
  if (category === "office-wear") {
    return products.filter(
      (p) => p.category === "office-wear" || p.tags.includes("office")
    );
  }
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.trending);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "name";

export function sortProducts(list: Product[], sort: SortOption): Product[] {
  const copy = [...list];
  switch (sort) {
    case "price-asc":
      return copy.sort((a, b) => a.price - b.price);
    case "price-desc":
      return copy.sort((a, b) => b.price - a.price);
    case "name":
      return copy.sort((a, b) => a.name.localeCompare(b.name));
    case "newest":
      return copy.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    default:
      return copy.sort(
        (a, b) =>
          (b.featured ? 1 : 0) - (a.featured ? 1 : 0) ||
          (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0)
      );
  }
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q) ||
      p.images.some((i) => i.toLowerCase().includes(q))
  );
}
