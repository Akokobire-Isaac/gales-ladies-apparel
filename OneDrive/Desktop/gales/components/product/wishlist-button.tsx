"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useWishlist } from "@/hooks/use-wishlist";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface WishlistButtonProps {
  product: Product;
  className?: string;
}

export function WishlistButton({ product, className }: WishlistButtonProps) {
  const { toggle, isWishlisted } = useWishlist();
  const active = isWishlisted(product.id);

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(product);
      }}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-background",
        className
      )}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
    >
      <motion.div animate={active ? { scale: [1, 1.3, 1] } : {}}>
        <Heart
          className={cn(
            "h-4 w-4 transition-colors",
            active ? "fill-red-500 text-red-500" : "text-foreground"
          )}
        />
      </motion.div>
    </motion.button>
  );
}
