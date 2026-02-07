"use client";

import { useState } from "react";
import GameCard from "./GameCard";

export default function GameCategories() {
  const [activeTab, setActiveTab] = useState("Top Up");

  const tabs = ["Top Up", "Voucher", "Gift Card", "Subscription"];

  // Sample data for Top Up games, replace with actual data fetching later
  const topUpGames = [
    { name: "Double Diamond MLBB", imageUrl: "/mobilelegends1.jpg", href: "/double-diamond-mlbb" },
    { name: "Mobile Legends", imageUrl: "/mobilelegends1.jpg", href: "/topup/mobilelegends" },
    { name: "Free Fire (Nepal)", imageUrl: "/freefire.jpg", href: "/freefire-diamond-topup" },
    { name: "PUBG UC", imageUrl: "/pugb-comp.jpg", href: "/topup/pubg" },
    { name: "TikTok", imageUrl: "/tiktok.jpg", href: "/product/tiktok" },
  ];

  const voucherItems = [
    { name: "Steam Gift Card", imageUrl: "/steam.jpg", href: "/voucher/steam" },
    { name: "Google Play Gift Card", imageUrl: "/google-play.jpg", href: "/voucher/google-play" },
    { name: "Netflix Gift Card", imageUrl: "/netflix-card.jpg", href: "/voucher/netflix" },
  ];

  const giftCardItems = [
    { name: "Amazon Gift Card", imageUrl: "/amazon.jpg", href: "/giftcard/amazon" },
    { name: "Apple Gift Card", imageUrl: "/apple.jpg", href: "/giftcard/apple" },
  ];

  const subscriptionItems = [
    { name: "Netflix Premium", imageUrl: "/netflix-sub.jpg", href: "/subscription/netflix" },
    { name: "Spotify Premium", imageUrl: "/spotify.jpg", href: "/subscription/spotify" },
    { name: "YouTube Premium", imageUrl: "/youtube-premium.jpg", href: "/subscription/youtube" },
  ];

  return (
    <div className="mt-8">
      <div className="flex justify-center border-b border-theme-card">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            className={`px-6 py-3 text-sm font-semibold ${
              activeTab === tab
                ? "border-b-2 border-theme-accent text-theme-accent"
                : "text-gray-400 hover:text-gray-200"
            } transition-colors duration-200`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6 p-4">
        {activeTab === "Top Up" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
            {topUpGames.map((game) => (
              <GameCard
                key={game.name}
                name={game.name}
                imageUrl={game.imageUrl}
                href={game.href}
              />
            ))}
          </div>
        )}
        {activeTab === "Voucher" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
            {voucherItems.map((item) => (
              <GameCard
                key={item.name}
                name={item.name}
                imageUrl={item.imageUrl}
                href={item.href}
              />
            ))}
          </div>
        )}
        {activeTab === "Gift Card" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
            {giftCardItems.map((item) => (
              <GameCard
                key={item.name}
                name={item.name}
                imageUrl={item.imageUrl}
                href={item.href}
              />
            ))}
          </div>
        )}
        {activeTab === "Subscription" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
            {subscriptionItems.map((item) => (
              <GameCard
                key={item.name}
                name={item.name}
                imageUrl={item.imageUrl}
                href={item.href}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
