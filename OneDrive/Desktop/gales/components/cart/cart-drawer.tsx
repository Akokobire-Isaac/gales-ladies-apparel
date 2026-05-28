"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { EmptyState } from "@/components/shared/empty-state";

export function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    subtotal,
    totalItems,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl font-light">
            Your Bag ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 items-center justify-center">
            <EmptyState
              title="Your bag is empty"
              description="Discover our curated collection of premium fashion."
              actionLabel="Start Shopping"
              actionHref="/shop"
            />
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-6 overflow-y-auto py-4">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.li
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-4"
                  >
                    <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-beige/30">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "/images/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <Link
                        href={`/product/${item.product.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="font-display text-sm hover:text-gold"
                      >
                        {item.product.name}
                      </Link>
                      {(item.size || item.color) && (
                        <p className="text-xs text-muted-foreground">
                          {[item.size, item.color].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      <p className="mt-1 text-sm font-medium">
                        {formatPrice(item.product.price)}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1,
                                item.size,
                                item.color
                              )
                            }
                            className="p-1.5 hover:bg-muted"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1,
                                item.size,
                                item.color
                              )
                            }
                            className="p-1.5 hover:bg-muted"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.size, item.color)
                          }
                          className="text-muted-foreground hover:text-red-500"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>

            <div className="border-t border-border pt-6">
              <div className="mb-4 flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <p className="mb-4 text-xs text-muted-foreground">
                Delivery nationwide · Mobile Money accepted
              </p>
              <Button asChild variant="gold" className="w-full">
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  Checkout via WhatsApp
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="mt-2 w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
