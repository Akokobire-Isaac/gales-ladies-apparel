import { Suspense } from "react";
import { ShopContent } from "@/components/shop/shop-content";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = {
  title: "Shop",
  description: "Browse premium women's fashion — office wear, dresses, heels, and more.",
};

function ShopLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-32">
      <Skeleton className="mb-8 h-12 w-64" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4]" />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopLoading />}>
      <ShopContent />
    </Suspense>
  );
}
