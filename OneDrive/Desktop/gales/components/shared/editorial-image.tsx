"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  /** Use native file — best clarity for uploaded JPEGs */
  unoptimized?: boolean;
}

/**
 * High-fidelity image for hero/editorial/about sections.
 * Uses higher quality and optional unoptimized delivery to avoid soft compression.
 */
export function EditorialImage({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  unoptimized = true,
}: EditorialImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-beige/20",
        containerClassName
      )}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-beige/40 to-beige/10" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        unoptimized={unoptimized}
        quality={100}
        sizes="(max-width: 1024px) 100vw, 640px"
        className={cn(
          "object-cover object-center",
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
