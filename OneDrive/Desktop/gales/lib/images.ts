import { BRAND_LOGO, DEFAULT_PRODUCT_IMAGE } from "@/lib/constants";

export { BRAND_LOGO };

export function getProductImageSrc(path: string): string {
  if (!path) return DEFAULT_PRODUCT_IMAGE;
  return path.startsWith("/") ? path : `/images/${path}`;
}

/**
 * Map a filename in /public/images to a product image path.
 * Drop files like product-1.jpg, dress-2.png into /public/images and reference here.
 */
export function imageFromPublic(filename: string): string {
  return `/images/${filename.replace(/^\/?images\//, "")}`;
}
