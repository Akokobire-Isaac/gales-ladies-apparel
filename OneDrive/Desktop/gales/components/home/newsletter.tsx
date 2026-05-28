"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Stay Connected</p>
          <h2 className="font-display text-3xl font-light md:text-4xl">
            Join the Gale&apos;s Circle
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Be first to know about new arrivals, exclusive offers, and style edits.
          </p>
          {submitted ? (
            <p className="mt-8 text-gold">Thank you for subscribing!</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" variant="gold">
                Subscribe
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
