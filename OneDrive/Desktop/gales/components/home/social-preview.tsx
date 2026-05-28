"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProductImage } from "@/components/shared/product-image";
import { SectionHeading } from "@/components/shared/section-heading";
import { SOCIAL_LINKS } from "@/lib/constants";

const gridImages = [
  "/images/dress9.jpeg",
  "/images/dress10.jpeg",
  "/images/Bag3.jpeg",
  "/images/heels4.jpeg",
  "/images/dress13.jpeg",
  "/images/heels7.jpeg",
];

export function SocialPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="@gales_apparel"
          subtitle="Follow us on Instagram for style inspiration and new drops"
        />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-6">
          {gridImages.map((src, i) => (
            <motion.a
              key={src}
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden"
            >
              <ProductImage
                src={src}
                alt={`Gale's fashion ${i + 1}`}
                fill
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/40">
                <svg
                  className="h-6 w-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold hover:underline"
          >
            Follow on Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
