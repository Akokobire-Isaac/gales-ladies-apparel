"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductImage } from "@/components/shared/product-image";
import { BRAND_TAGLINE } from "@/lib/constants";

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[50vh] md:min-h-[60vh]">
        <ProductImage
          src="/images/dress13.jpeg"
          alt="Promotional banner"
          fill
          quality={100}
          unoptimized
          className="object-cover object-center [image-rendering:auto]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-center"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gold">
              Gale&apos;s Ladies Apparel
            </p>
            <h2 className="font-display text-3xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              {BRAND_TAGLINE}
            </h2>
            <Button asChild variant="gold" className="mt-8">
              <Link href="/shop">Explore Collection</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
