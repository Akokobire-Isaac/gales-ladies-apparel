import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { BRAND_NAME, BRAND_TAGLINE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND_NAME} | Premium Women's Fashion Ghana`,
    template: `%s | ${BRAND_NAME}`,
  },
  description: BRAND_TAGLINE,
  keywords: [
    "Ghana fashion",
    "women's office wear",
    "professional dresses",
    "Gale's Ladies Apparel",
    "luxury fashion Ghana",
  ],
  openGraph: {
    title: BRAND_NAME,
    description: BRAND_TAGLINE,
    locale: "en_GH",
    type: "website",
  },
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} min-h-screen antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
