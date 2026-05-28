import Link from "next/link";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
}

export function EmptyState({
  title,
  description,
  actionLabel = "Shop Now",
  actionHref = "/shop",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 h-px w-16 bg-gold" />
      <h2 className="font-display text-2xl font-light md:text-3xl">{title}</h2>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">{description}</p>
      {actionHref && (
        <Button asChild variant="gold" className="mt-8">
          <Link href={actionHref}>{actionLabel}</Link>
        </Button>
      )}
    </div>
  );
}
