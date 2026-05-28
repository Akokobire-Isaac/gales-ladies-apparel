"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { EmptyState } from "@/components/shared/empty-state";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  products,
  getProductsByCategory,
  searchProducts,
  sortProducts,
  type SortOption,
} from "@/data/products";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

export function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ?? "";
  const query = searchParams.get("q") ?? "";
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let list = categoryParam ? getProductsByCategory(categoryParam) : products;
    if (query) {
      const searched = searchProducts(query);
      const ids = new Set(searched.map((p) => p.id));
      list = list.filter((p) => ids.has(p.id));
    }
    return sortProducts(list, sort);
  }, [categoryParam, query, sort]);

  const categoryLabel =
    categories.find((c) => c.slug === categoryParam)?.name ??
    (categoryParam === "new-arrivals" ? "New Arrivals" : "All Products");

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <SectionHeading
        title={query ? `Results for "${query}"` : categoryLabel}
        subtitle="Premium fashion for the modern professional woman"
        align="left"
      />

      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-start">
        <aside className="lg:w-56 lg:flex-shrink-0">
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
            Categories
          </p>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            <CategoryLink href="/shop" active={!categoryParam} label="All" />
            <CategoryLink
              href="/shop?category=new-arrivals"
              active={categoryParam === "new-arrivals"}
              label="New Arrivals"
            />
            {categories.map((cat) => (
              <CategoryLink
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                active={categoryParam === cat.slug}
                label={cat.name}
              />
            ))}
          </ul>
        </aside>

        <div className="flex-1">
          <div className="mb-8 flex justify-end">
            <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name">Name A–Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="No products found"
              description="Try a different category or search term."
            />
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CategoryLink({
  href,
  active,
  label,
}: {
  href: string;
  active: boolean;
  label: string;
}) {
  return (
    <li>
      <a
        href={href}
        className={cn(
          "inline-block px-3 py-1.5 text-sm transition-colors",
          active
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        {label}
      </a>
    </li>
  );
}
