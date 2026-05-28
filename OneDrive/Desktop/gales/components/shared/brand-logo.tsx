"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BRAND_NAME, LOGO_PATHS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  height?: number;
  variant?: "default" | "footer";
}

export function BrandLogo({
  className,
  height = 40,
  variant = "default",
}: BrandLogoProps) {
  const [logoIndex, setLogoIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const logoSrc = LOGO_PATHS[logoIndex];

  return (
    <Link
      href="/"
      className={cn("relative flex items-center gap-2", className)}
      aria-label={`${BRAND_NAME} home`}
    >
      {!failed ? (
        <Image
          src={logoSrc}
          alt={BRAND_NAME}
          width={height * 3}
          height={height}
          className="h-auto w-auto max-h-10 object-contain object-left"
          style={{ maxHeight: height }}
          priority
          onError={() => {
            if (logoIndex < LOGO_PATHS.length - 1) {
              setLogoIndex((i) => i + 1);
            } else {
              setFailed(true);
            }
          }}
        />
      ) : (
        <span
          className={cn(
            "font-display text-xl font-light tracking-[0.2em] uppercase",
            variant === "footer" && "text-background"
          )}
        >
          Gale&apos;s
        </span>
      )}
    </Link>
  );
}
