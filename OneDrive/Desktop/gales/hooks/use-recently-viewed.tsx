"use client";

import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/types";

const RECENT_KEY = "gales-recent";
const MAX_RECENT = 8;

export function useRecentlyViewed() {
  const [recent, setRecent] = useState<Product[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENT_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  const addRecent = useCallback((product: Product) => {
    setRecent((prev) => {
      const filtered = prev.filter((p) => p.id !== product.id);
      const next = [product, ...filtered].slice(0, MAX_RECENT);
      if (hydrated) localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      return next;
    });
  }, [hydrated]);

  useEffect(() => {
    if (hydrated && recent.length) {
      localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    }
  }, [recent, hydrated]);

  return { recent, addRecent };
}
