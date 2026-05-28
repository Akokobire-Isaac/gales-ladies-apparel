import { HeroSection } from "@/components/home/hero-section";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { TrendingCarousel } from "@/components/home/trending-carousel";
import { BestSellers } from "@/components/home/best-sellers";
import { PromoBanner } from "@/components/home/promo-banner";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { SocialPreview } from "@/components/home/social-preview";
import { Testimonials } from "@/components/home/testimonials";
import { Newsletter } from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <TrendingCarousel />
      <BestSellers />
      <PromoBanner />
      <WhyChooseUs />
      <SocialPreview />
      <Testimonials />
      <Newsletter />
    </>
  );
}
