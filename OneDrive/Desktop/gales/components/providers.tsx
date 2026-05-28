"use client";

import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/hooks/use-cart";
import { WishlistProvider } from "@/hooks/use-wishlist";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { PageTransition } from "@/components/layout/page-transition";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <CartProvider>
        <WishlistProvider>
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <CartDrawer />
          <FloatingWhatsApp />
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
