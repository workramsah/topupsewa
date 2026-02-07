import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gaming Top-Up Hub | Free Fire & Mobile Legends Diamond Top-Up",
  description:
    "Get instant Free Fire and Mobile Legends diamonds at the best prices in Nepal. Fast, secure and reliable top-up service with 24/7 support. Best rates guaranteed!",
  keywords:
    "Free Fire topup Nepal, FF diamond topup, Mobile Legends topup, MLBB diamonds, gaming topup service, Garena Free Fire recharge, cheap FF diamonds, secure game topup",
  robots: "index, follow",
  openGraph: {
    title: "Gaming Top-Up Hub | Free Fire & Mobile Legends Diamond Top-Up",
    description:
      "Your trusted source for Free Fire and Mobile Legends diamond top-ups. Best prices in Nepal with instant delivery and secure payments.",
    type: "website",
  },
};

export default function FreeFireTopUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
