export type Category =
  | "office-wear"
  | "dresses"
  | "tops"
  | "handbags"
  | "heels"
  | "safety-boots"
  | "accessories"
  | "new-arrivals";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  video?: string;
  sizes?: string[];
  colors?: string[];
  tags: string[];
  featured?: boolean;
  bestSeller?: boolean;
  trending?: boolean;
  newArrival?: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}
