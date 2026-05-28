import type { CartItem } from "@/types";
import { formatPrice } from "@/lib/utils";
import { BRAND_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

export interface CheckoutDetails {
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  region: string;
  deliveryNotes?: string;
}

export function buildWhatsAppOrderMessage(
  items: CartItem[],
  total: number,
  details: CheckoutDetails
): string {
  const lines: string[] = [
    `*New Order — ${BRAND_NAME}*`,
    "",
    "*Customer Details*",
    `Name: ${details.fullName}`,
    `Phone: ${details.phone}`,
    details.email ? `Email: ${details.email}` : "",
    `Delivery Address: ${details.address}`,
    `City: ${details.city}`,
    `Region: ${details.region}`,
    details.deliveryNotes
      ? `Delivery Notes: ${details.deliveryNotes}`
      : "",
    "",
    "*Order Items*",
  ].filter(Boolean);

  items.forEach((item, index) => {
    const variant = [
      item.size ? `Size: ${item.size}` : "",
      item.color ? `Color: ${item.color}` : "",
    ]
      .filter(Boolean)
      .join(" | ");
    lines.push(
      `${index + 1}. ${item.product.name}`,
      `   Qty: ${item.quantity} × ${formatPrice(item.product.price)}`,
      variant ? `   ${variant}` : "",
      `   Subtotal: ${formatPrice(item.product.price * item.quantity)}`
    );
  });

  lines.push(
    "",
    `*Total: ${formatPrice(total)}*`,
    "",
    "Payment: Mobile Money (MoMo)",
    "Delivery: Nationwide (Ghana)",
    "",
    "Please confirm availability and delivery timeline. Thank you!"
  );

  return lines.join("\n");
}

export function getWhatsAppCheckoutUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
