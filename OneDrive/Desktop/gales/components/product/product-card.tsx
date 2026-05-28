"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { ProductImage } from "@/components/shared/product-image";
import { WishlistButton } from "@/components/product/wishlist-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group relative"
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-beige/30">
          <ProductImage
            src={product.images[0]}
            alt={product.name}
            fill
            quality={95}
            unoptimized
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute right-3 top-3 z-10">
            <WishlistButton product={product} />
          </div>
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {product.newArrival && <Badge variant="gold">New</Badge>}
            {hasDiscount && (
              <Badge variant="sale">
                -{calculateDiscount(product.price, product.originalPrice!)}%
              </Badge>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
            <Button
              variant="gold"
              size="sm"
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                addItem(product);
              }}
            >
              <ShoppingBag className="h-4 w-4" />
              Quick Add
            </Button>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {product.category.replace("-", " ")}
          </p>
          <h3 className="font-display text-lg font-light leading-tight">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice!)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
