"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { getTrendingProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

export function TrendingCarousel() {
  const products = getTrendingProducts();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [emblaApi, products.length]);

  return (
    <section className="overflow-hidden bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex items-end justify-between">
          <SectionHeading title="Trending Now" align="left" className="mb-0" />
          <div className="hidden gap-2 sm:flex">
            <Button variant="outline" size="icon" onClick={scrollPrev} aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={scrollNext} aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                className="min-w-0 flex-[0_0_75%] sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
