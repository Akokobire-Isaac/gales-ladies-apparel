import { redirect } from "next/navigation";
import { ProductDetail } from "@/components/product/product-detail";
import { getProductBySlug, products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return {
      title: "Shop",
      description: "Browse our latest products.",
    };
  }
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) redirect("/shop");
  return <ProductDetail product={product} />;
}
