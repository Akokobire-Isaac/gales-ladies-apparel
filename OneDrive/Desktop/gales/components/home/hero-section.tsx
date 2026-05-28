"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BRAND_TAGLINE, HERO_VIDEO, HERO_POSTER } from "@/lib/constants";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 1;
    const play = () => {
      video.play().catch(() => {});
    };
    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Static video layer — no parallax transform (prevents blur) */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_POSTER}
          className="hero-media h-full w-full object-cover object-center"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Light overlays — keeps text readable without dulling the video */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10"
          aria-hidden
        />
        {/* Subtle brightness lift */}
        <div
          className="pointer-events-none absolute inset-0 bg-white/[0.06] mix-blend-overlay"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-4 pb-24 pt-32 md:px-8 md:pb-32 lg:justify-center lg:pb-0">
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-gold drop-shadow-sm"
          >
            Ghana · Premium Women&apos;s Fashion
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="font-display max-w-4xl text-5xl font-light leading-[1.05] text-white drop-shadow-md md:text-7xl lg:text-8xl"
          >
            Elevate Your
            <br />
            <span className="text-gradient-gold italic">Professional</span> Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-lg text-base text-white/90 drop-shadow-sm md:text-lg"
          >
            {BRAND_TAGLINE}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild variant="gold" size="lg">
              <Link href="/shop">Shop Now</Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link href="/shop?category=new-arrivals">New Arrivals</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-px bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}
