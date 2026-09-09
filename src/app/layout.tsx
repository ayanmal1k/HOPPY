import type { Metadata } from "next";
import { Syne, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Script from "next/script";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoppy the Frog - The Original. The Legend.",
  description: "Before PEPE, there was hoppy the frog, where it all began. Join the pond and experience the OG memecoin movement with 0% taxes, locked liquidity, and a 100% community-driven fair launch.",
  metadataBase: new URL("https://hoppymeme.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hoppy the Frog - The Original. The Legend.",
    description: "Before PEPE, there was hoppy the frog, where it all began. Join the pond and experience the OG memecoin movement.",
    url: "https://hoppymeme.com",
    siteName: "Hoppy the Frog",
    images: [
      {
        url: "/assets/hero-bg.png",
        width: 1704,
        height: 1704,
        alt: "Hoppy the Frog social banner",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoppy the Frog - The Original. The Legend.",
    description: "Before PEPE, there was hoppy the frog, where it all began. Join the pond and experience the OG memecoin movement.",
    images: ["/assets/hero-bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable} lenis lenis-smooth`}>
      <body className="antialiased relative bg-background text-foreground font-body">
        {/* Ambient background canvas */}
        <BackgroundCanvas />
        
        {/* Smooth scroll container */}
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* Zander AI Widget */}
        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_T6oUT9E3TruoChxVAHdXokur"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
