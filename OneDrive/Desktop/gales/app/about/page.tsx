import { EditorialImage } from "@/components/shared/editorial-image";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";

export const metadata = {
  title: "About",
  description: "Learn about Gale's Ladies Apparel — premium Ghanaian women's fashion.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-28 md:px-8 md:pt-32">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative">
          <div className="absolute -inset-3 border border-gold/20 bg-beige/10" aria-hidden />
          <EditorialImage
            src="/images/dress5.jpeg"
            alt={BRAND_NAME}
            priority
            containerClassName="aspect-[4/5] w-full shadow-2xl"
            className="object-[center_12%] [image-rendering:auto]"
          />
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
          <h1 className="font-display text-4xl font-light md:text-5xl">{BRAND_NAME}</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">{BRAND_TAGLINE}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Founded with a vision to dress the modern Ghanaian professional woman, Gale&apos;s
            Ladies Apparel offers curated office wear, elegant dresses, premium accessories,
            and footwear — all designed with quality, sophistication, and local trust at the
            heart of every piece.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From Accra boardrooms to nationwide deliveries, we combine luxury aesthetics with
            the convenience of Mobile Money payments and WhatsApp ordering that Ghanaian
            customers love.
          </p>
        </div>
      </div>
    </div>
  );
}
