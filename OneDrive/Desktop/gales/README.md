# Gale's Ladies Apparel

Premium ecommerce fashion website for **Gale's Ladies Apparel** — a Ghanaian women's fashion brand offering professional office wear, dresses, heels, handbags, safety boots, and accessories.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **Shadcn-style UI** (Radix primitives)
- **Lucide Icons**
- **Embla Carousel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Images

1. Upload product photos and your logo to `public/images/`
2. See `public/images/README.md` for naming conventions
3. Update `data/products.ts` when adding new products

**Logo:** `logo.png` (used in navbar, footer, favicon)

**Hero:** `hero.jpg`

## Project Structure

```
app/              # Pages (home, shop, product, checkout, wishlist, about)
components/       # UI, layout, home sections, product, cart, checkout
data/             # products.ts, categories.ts, testimonials.ts
hooks/            # cart, wishlist, recently viewed
lib/              # utils, whatsapp checkout, constants
public/images/    # Your uploaded images
types/            # TypeScript types
```

## Features

- Cinematic hero with parallax
- Product catalog with search, filters, sort
- Cart drawer & wishlist (localStorage)
- WhatsApp checkout (0249938095)
- Dark / light mode
- Mobile-first responsive design
- Framer Motion animations

## WhatsApp Checkout

Orders are sent to **0249938095** with cart items, quantities, total, and delivery details formatted for Ghana.

## Build for Production

```bash
npm run build
npm start
```

## Social Media

- Instagram: [@gales_apparel](https://instagram.com/gales_apparel)
- TikTok: Gale's Apparel
- Snapchat: galesapparel
- WhatsApp: 0249938095

---

Crafted with elegance in Ghana 🇬🇭
