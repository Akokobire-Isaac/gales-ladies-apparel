"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { DEFAULT_PRODUCT_IMAGE } from "@/lib/constants";

interface ProductImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  unoptimized?: boolean;
}

export function ProductImage({
  src,
  alt,
  fill,
  width,
  height,
  className,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 90,
  unoptimized = false,
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src || DEFAULT_PRODUCT_IMAGE);
  const [loaded, setLoaded] = useState(false);

  const shared = cn(
    "object-cover object-center transition-opacity duration-300",
    loaded ? "opacity-100" : "opacity-0",
    className
  );

  if (fill) {
    return (
      <>
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-beige/30" />
        )}
        <Image
          src={imgSrc}
          alt={alt}
          fill
          className={shared}
          sizes={sizes}
          quality={quality}
          unoptimized={unoptimized}
          priority={priority}
          onLoad={() => setLoaded(true)}
          onError={() => {
            setImgSrc(DEFAULT_PRODUCT_IMAGE);
            setLoaded(true);
          }}
        />
      </>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width ?? 600}
      height={height ?? 800}
      className={shared}
      sizes={sizes}
      quality={quality}
      unoptimized={unoptimized}
      priority={priority}
      onLoad={() => setLoaded(true)}
      onError={() => {
        setImgSrc(DEFAULT_PRODUCT_IMAGE);
        setLoaded(true);
      }}
    />
  );
}
