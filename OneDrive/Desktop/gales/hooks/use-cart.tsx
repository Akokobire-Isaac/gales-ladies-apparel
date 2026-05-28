"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/types";

const CART_KEY = "gales-cart";

interface CartContextValue {
  items: CartItem[];
  addItem: (
    product: Product,
    quantity?: number,
    options?: { size?: string; color?: string }
  ) => void;
  removeItem: (productId: string, size?: string, color?: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    size?: string,
    color?: string
  ) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

function itemKey(id: string, size?: string, color?: string) {
  return `${id}-${size ?? ""}-${color ?? ""}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = useCallback(
    (
      product: Product,
      quantity = 1,
      options?: { size?: string; color?: string }
    ) => {
      setItems((prev) => {
        const key = itemKey(product.id, options?.size, options?.color);
        const existing = prev.find(
          (i) =>
            itemKey(i.product.id, i.size, i.color) === key
        );
        if (existing) {
          return prev.map((i) =>
            itemKey(i.product.id, i.size, i.color) === key
              ? { ...i, quantity: i.quantity + quantity }
              : i
          );
        }
        return [
          ...prev,
          {
            product,
            quantity,
            size: options?.size,
            color: options?.color,
          },
        ];
      });
      setIsOpen(true);
    },
    []
  );

  const removeItem = useCallback(
    (productId: string, size?: string, color?: string) => {
      const key = itemKey(productId, size, color);
      setItems((prev) =>
        prev.filter((i) => itemKey(i.product.id, i.size, i.color) !== key)
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number, size?: string, color?: string) => {
      const key = itemKey(productId, size, color);
      if (quantity < 1) {
        setItems((prev) =>
          prev.filter((i) => itemKey(i.product.id, i.size, i.color) !== key)
        );
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          itemKey(i.product.id, i.size, i.color) === key
            ? { ...i, quantity }
            : i
        )
      );
    },
    []
  );

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      isOpen,
      setIsOpen,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      subtotal,
      isOpen,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
