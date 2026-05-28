import Link from "next/link";
import { BrandLogo } from "@/components/shared/brand-logo";
import { SocialLinks } from "@/components/shared/social-links";
import {
  BRAND_NAME,
  BRAND_TAGLINE,
  WHATSAPP_DISPLAY,
  SOCIAL_LINKS,
} from "@/lib/constants";

const footerLinks = {
  Shop: [
    { href: "/shop", label: "All Products" },
    { href: "/shop?category=new-arrivals", label: "New Arrivals" },
    { href: "/shop?category=office-wear", label: "Office Wear" },
    { href: "/shop?category=dresses", label: "Dresses" },
  ],
  Support: [
    { href: "/checkout", label: "Checkout" },
    { href: SOCIAL_LINKS.whatsapp, label: "WhatsApp Order" },
    { href: "/about", label: "About Us" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo height={44} variant="footer" className="[&_span]:text-background" />
            <p className="mt-4 max-w-xs text-sm text-background/70">{BRAND_TAGLINE}</p>
            <SocialLinks className="mt-6" iconClassName="text-background/80 hover:text-gold" />
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/70 transition-colors hover:text-background"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>WhatsApp: {WHATSAPP_DISPLAY}</li>
              <li>Instagram: @gales_apparel</li>
              <li>Snapchat: galesapparel</li>
              <li>TikTok: Gale&apos;s Apparel</li>
            </ul>
            <div className="mt-6 space-y-2 text-xs text-background/50">
              <p>Mobile Money accepted</p>
              <p>Nationwide delivery across Ghana</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Crafted with elegance in Ghana 🇬🇭
          </p>
        </div>
      </div>
    </footer>
  );
}
