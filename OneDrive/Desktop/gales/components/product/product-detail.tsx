"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { ProductImage } from "@/components/shared/product-image";
import { WishlistButton } from "@/components/product/wishlist-button";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/use-cart";
import { useRecentlyViewed } from "@/hooks/use-recently-viewed";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import type { Product } from "@/types";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const { recent, addRecent } = useRecentlyViewed();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(product.sizes?.[0]);
  const [color, setColor] = useState(product.colors?.[0]);

  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

  useEffect(() => {
    addRecent(product);
  }, [product, addRecent]);

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[3/4] overflow-hidden bg-beige/30">
            <ProductImage
              src={product.images[selectedImage] ?? product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute right-4 top-4">
              <WishlistButton product={product} />
            </div>
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 grid grid-cols-4 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setSelectedImage(i)}
                  className={cn(
                    "relative aspect-square overflow-hidden border-2 transition-colors",
                    selectedImage === i ? "border-gold" : "border-transparent"
                  )}
                >
                  <ProductImage src={img} alt="" fill sizes="100px" />
                </button>
              ))}
            </div>
          )}
          {product.video && (
            <div className="relative mt-4 aspect-[3/4] overflow-hidden bg-beige/30">
              <video
                src={product.video}
                poster={product.images[0]}
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:py-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {product.category.replace("-", " ")}
          </p>
          <h1 className="font-display mt-2 text-4xl font-light md:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            {hasDiscount && (
              <>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice!)}
                </span>
                <Badge variant="sale">
                  -{calculateDiscount(product.price, product.originalPrice!)}%
                </Badge>
              </>
            )}
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            {product.description}
          </p>

          {product.sizes && (
            <div className="mt-8">
              <p className="mb-3 text-xs uppercase tracking-widest">Size</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={cn(
                      "min-w-[3rem] border px-4 py-2 text-sm transition-colors",
                      size === s
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.colors && (
            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-widest">Color</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={cn(
                      "border px-4 py-2 text-sm transition-colors",
                      color === c
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-widest">Quantity</p>
            <div className="inline-flex items-center border border-border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-muted"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-muted"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="gold"
              size="lg"
              className="flex-1"
              onClick={() => addItem(product, quantity, { size, color })}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/checkout">Buy Now</Link>
            </Button>
          </div>

          <div className="mt-10 space-y-2 border-t border-border pt-8 text-sm text-muted-foreground">
            <p>✓ Mobile Money (MoMo) accepted</p>
            <p>✓ Nationwide delivery in Ghana</p>
            <p>✓ Fast & secure WhatsApp ordering</p>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-display mb-8 text-3xl font-light">You May Also Like</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      {recent.filter((p) => p.id !== product.id).length > 0 && (
        <section className="mt-16">
          <h2 className="font-display mb-8 text-2xl font-light">Recently Viewed</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {recent
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
