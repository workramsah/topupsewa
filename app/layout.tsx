import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://topupsewa.games"),
  icons: { icon: "/favicon.ico" },
  title : "Free Topup Sewa Games",
  description: "Top-up Free Fire diamonds instantly at the lowest prices. Buy 50 to 10400 FF diamonds with secure and fast delivery across Nepal",
  keywords:"free fire top-up, free fire diamond top-up, buy free fire diamonds, cheap free fire recharge, instant ff diamond top-up, ff diamonds indonesia, free fire diamond price",
  openGraph: {
    title: "Topup Sewa Games - Free Fire Diamond Top-Up & Game Recharge",
    description: "Top-up Free Fire diamonds instantly at the lowest prices. Buy 50 to 10400 FF diamonds with secure and fast delivery across Nepal. Best prices for game recharges.",
    url: "https://topupsewa.games",
    siteName: "Topup Sewa Games",
    images: [
      {
        url: "/freefire.jpg",
        width: 1200,
        height: 630,
        alt: "Free Fire Diamond Top-Up"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Topup Sewa Games - Free Fire Diamond Top-Up",
    description: "Top-up Free Fire diamonds instantly at the lowest prices. Buy 50 to 10400 FF diamonds with secure and fast delivery across Nepal.",
    images: ["/freefire.jpg"],
    creator: "@topupsewa"
  },
  alternates: {
    canonical: "https://topupsewa.games"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
 


};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
