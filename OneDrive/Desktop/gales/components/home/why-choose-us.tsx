"use client";

import { Truck, Shield, Gem, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Nationwide delivery across Ghana with careful packaging.",
  },
  {
    icon: Shield,
    title: "Secure MoMo Payments",
    description: "Pay safely via Mobile Money — fast, trusted, and convenient.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Curated fabrics and finishes worthy of luxury boutiques.",
  },
  {
    icon: MapPin,
    title: "Trusted Ghanaian Brand",
    description: "Designed for Ghanaian professional women, by women who understand.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          title="Why Choose Gale's"
          subtitle="Luxury fashion with the trust and convenience you deserve"
        />
        <div className="mb-16 flex flex-wrap justify-center gap-12 text-center">
          <div>
            <p className="font-display text-4xl font-light text-gold md:text-5xl">
              <AnimatedCounter value={5000} suffix="+" />
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              Happy Customers
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-light text-gold md:text-5xl">
              <AnimatedCounter value={200} suffix="+" />
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              Premium Styles
            </p>
          </div>
          <div>
            <p className="font-display text-4xl font-light text-gold md:text-5xl">
              <AnimatedCounter value={16} suffix="" />
            </p>
            <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              Regions Served
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 transition-colors group-hover:bg-gold/10">
                <feature.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-light">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
