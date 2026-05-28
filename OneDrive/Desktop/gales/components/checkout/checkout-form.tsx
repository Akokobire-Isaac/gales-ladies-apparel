"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import {
  buildWhatsAppOrderMessage,
  getWhatsAppCheckoutUrl,
  type CheckoutDetails,
} from "@/lib/whatsapp";
import { EmptyState } from "@/components/shared/empty-state";

const GHANA_REGIONS = [
  "Greater Accra",
  "Ashanti",
  "Western",
  "Central",
  "Eastern",
  "Volta",
  "Northern",
  "Upper East",
  "Upper West",
  "Bono",
  "Bono East",
  "Ahafo",
  "Savannah",
  "North East",
  "Oti",
  "Western North",
];

export function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutDetails>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    region: "Greater Accra",
    deliveryNotes: "",
  });

  if (items.length === 0) {
    return (
      <EmptyState
        title="Nothing to checkout"
        description="Add items to your bag before placing an order."
        actionLabel="Shop Collection"
        actionHref="/shop"
      />
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppOrderMessage(items, subtotal, form);
    const url = getWhatsAppCheckoutUrl(message);
    window.open(url, "_blank");
    clearCart();
  };

  const update = (field: keyof CheckoutDetails, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <h1 className="font-display mb-12 text-4xl font-light md:text-5xl">Checkout</h1>
      <div className="grid gap-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest">
              Full Name *
            </label>
            <Input
              required
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="e.g. Ama Serwaa"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest">
              Phone Number *
            </label>
            <Input
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="e.g. 0249938095"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest">
              Email (optional)
            </label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest">
              Delivery Address *
            </label>
            <Input
              required
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="Street, landmark, house number"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                City *
              </label>
              <Input
                required
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
                placeholder="e.g. Accra"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-widest">
                Region *
              </label>
              <select
                required
                value={form.region}
                onChange={(e) => update("region", e.target.value)}
                className="flex h-11 w-full rounded-none border border-foreground/15 bg-transparent px-4 text-sm focus:outline-none focus:ring-1 focus:ring-gold/40"
              >
                {GHANA_REGIONS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest">
              Delivery Notes
            </label>
            <Input
              value={form.deliveryNotes}
              onChange={(e) => update("deliveryNotes", e.target.value)}
              placeholder="Any special delivery instructions"
            />
          </div>

          <div className="rounded-none border border-gold/30 bg-gold/5 p-4 text-sm">
            <p className="font-medium text-gold-dark">Payment & Delivery</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>• Mobile Money (MTN, Vodafone, AirtelTigo) accepted</li>
              <li>• Nationwide delivery across all 16 regions of Ghana</li>
              <li>• Order confirmed via WhatsApp — fast & secure</li>
            </ul>
          </div>

          <Button type="submit" variant="gold" size="lg" className="w-full">
            Place Order via WhatsApp
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            You will be redirected to WhatsApp to complete your order with our team.
          </p>
        </form>

        <div className="border border-border bg-card p-8">
          <h2 className="font-display mb-6 text-2xl font-light">Order Summary</h2>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="flex gap-4"
              >
                <div className="relative h-20 w-16 flex-shrink-0 overflow-hidden bg-beige/30">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "/images/placeholder.svg";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{item.product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity}
                    {[item.size, item.color].filter(Boolean).length > 0 &&
                      ` · ${[item.size, item.color].filter(Boolean).join(", ")}`}
                  </p>
                  <p className="text-sm">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-between border-t border-border pt-6">
            <span className="font-medium">Total</span>
            <span className="text-xl font-medium text-gold">
              {formatPrice(subtotal)}
            </span>
          </div>
          <Button asChild variant="ghost" className="mt-4 w-full">
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
