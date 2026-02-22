import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sabpatakaro.com"),
  title: {
    default: "SabPataKaro - Taxes, Insurance, Money, Passport, PAN, Aadhar & More",
    template: "%s | SabPataKaro"
  },
  description: "Your complete guide to Taxes, Insurance, Money Management, Investment, Passport, PAN, Aadhar, Driving License in India. Free calculators, guides, and official links. Sab Pata Karo Yahan!",
  keywords: ["taxes india", "insurance guide", "money management", "investment", "passport india", "pan card", "aadhar card", "driving license", "financial guide india"],
  authors: [{ name: "SabPataKaro Team", url: "https://sabpatakaro.com" }],
  creator: "SabPataKaro",
  publisher: "SabPataKaro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sabpatakaro.com",
    siteName: "SabPataKaro",
    title: "SabPataKaro - Taxes, Insurance, Money, Passport, PAN – Sab Pata Karo Yahan!",
    description: "Your complete guide to Taxes, Insurance, Money Management, Investment, Passport, PAN, Aadhar, Driving License in India. Educational content only.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SabPataKaro - Complete Guide for Indian Citizens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SabPataKaro",
    description: "Taxes, Insurance, Money Management, Investment, Passport, PAN – Sab Pata Karo Yahan!",
    images: ["/og-image.png"],
    creator: "@sabpatakaro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://sabpatakaro.com",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        {/* Skip link for accessibility - must be inside body, not head */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
