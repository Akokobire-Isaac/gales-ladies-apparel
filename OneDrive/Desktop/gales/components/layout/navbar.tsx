"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/shared/brand-logo";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { useCart } from "@/hooks/use-cart";
import { useWishlist } from "@/hooks/use-wishlist";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/shop?category=new-arrivals", label: "New Arrivals" },
  { href: "/shop?category=office-wear", label: "Office Wear" },
  { href: "/shop?category=dresses", label: "Dresses" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();
  const { totalItems, setIsOpen } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-nav border-b border-border py-3" : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
          <BrandLogo height={36} />

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-gold",
                  pathname === link.href && "text-gold"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="rounded-full p-2 transition-colors hover:bg-foreground/5"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeToggle />
            <Link
              href="/wishlist"
              className="relative rounded-full p-2 transition-colors hover:bg-foreground/5"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center bg-gold text-[10px] font-bold text-black">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(true)}
              className="relative rounded-full p-2 transition-colors hover:bg-foreground/5"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center bg-gold text-[10px] font-bold text-black"
                >
                  {totalItems}
                </motion.span>
              )}
            </button>
            <button
              className="rounded-full p-2 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="glass-nav border-t border-border lg:hidden"
            >
              <nav className="flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm uppercase tracking-widest"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function SearchOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 pt-32 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (query.trim()) {
              router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
              onClose();
            }
          }}
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            placeholder="Search dresses, heels, office wear..."
            className="w-full border-b border-white/30 bg-transparent py-4 text-2xl font-light text-white placeholder:text-white/40 focus:outline-none"
          />
        </form>
        <p className="mt-4 text-sm text-white/50">Press Enter to search</p>
      </div>
    </motion.div>
  );
}
