"use client";

import { ProductCard } from "@/components/product/product-card";
import { EmptyState } from "@/components/shared/empty-state";
import { useWishlist } from "@/hooks/use-wishlist";

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Saved Items</p>
      <h1 className="font-display mb-12 text-4xl font-light md:text-5xl">Wishlist</h1>
      {items.length === 0 ? (
        <EmptyState
          title="Your wishlist is empty"
          description="Tap the heart on any product to save it here."
        />
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
