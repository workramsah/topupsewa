import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Fire Top Up - Buy Diamonds at Best Price | Game Shop",
  description:
    "Buy Free Fire diamonds at the best prices. Instant top-up service for Free Fire Indonesia. Get 50 to 10400 diamonds with secure payment methods.",
  keywords:
    "free fire top up, free fire diamonds, free fire indonesia, free fire diamond purchase, free fire recharge, free fire diamond price",
  openGraph: {
    title: "Free Fire Top Up - Buy Diamonds at Best Price",
    description:
      "Get Free Fire diamonds instantly at competitive prices. Secure payment methods and fast delivery.",
    images: ["/freefire.jpg"],
    url: "https://topupsewa.games/freefire-diamond-topup",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function FreeFireDiamondTopUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
