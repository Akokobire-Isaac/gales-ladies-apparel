"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ProductImage } from "@/components/shared/product-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories } from "@/data/categories";

export function FeaturedCollections() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Curated Collections"
          subtitle="Discover pieces crafted for the modern Ghanaian woman"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 4).map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/shop?category=${cat.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <ProductImage
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-light text-white">
                        {cat.name}
                      </h3>
                      <p className="mt-1 text-sm text-white/70">{cat.description}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-gold opacity-0 transition-all group-hover:opacity-100" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
