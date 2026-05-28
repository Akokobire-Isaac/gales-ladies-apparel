import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-none border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-foreground text-background",
        gold: "border-transparent bg-gold/20 text-gold-dark",
        outline: "border-foreground/20 text-foreground",
        sale: "border-transparent bg-red-500/10 text-red-600 dark:text-red-400",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
