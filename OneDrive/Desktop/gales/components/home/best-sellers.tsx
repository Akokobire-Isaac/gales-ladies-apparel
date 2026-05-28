"use client";

import Link from "next/link";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { getBestSellers } from "@/data/products";

export function BestSellers() {
  const products = getBestSellers();

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SectionHeading title="Best Sellers" align="left" className="mb-0" />
          <Button asChild variant="outline">
            <Link href="/shop">View All</Link>
          </Button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
