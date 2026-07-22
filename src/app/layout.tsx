import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollProgress } from "@/components/system/ScrollProgress";
import { ReducedMotionProvider } from "@/components/system/ReducedMotionProvider";
import { JsonLd } from "@/components/system/JsonLd";
import { brand } from "@/config/brand";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: brand.siteTitle,
    template: `%s | ${brand.name}`,
  },
  description: brand.siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: brand.siteTitle,
    description: brand.siteDescription,
    url: brand.url,
    siteName: brand.name,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.siteTitle,
    description: brand.siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="bg-asbor-black text-asbor-ivory flex min-h-full flex-col antialiased">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: brand.name,
            url: brand.url,
            description: brand.siteDescription,
            slogan: brand.slogan,
            foundingLocation: "Colombia",
          }}
        />
        <a href="#main-content" className="skip-link focus-ring">
          Saltar al contenido principal
        </a>
        <ReducedMotionProvider>
          <ScrollProgress />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
