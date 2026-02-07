"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GameDetailForm({ gameId }: { gameId: string }) {
  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [userName, setUserName] = useState("");
  const [userWhatsapp, setUserWhatsapp] = useState("");
  type DiamondOption = { id: number; amount: string; price: number; hasGift?: boolean };
  type PaymentOption = { id: number; name: string; icon: string; bgClass: string };
  const [selectedDiamond, setSelectedDiamond] = useState<DiamondOption | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);

  const diamondOptions: DiamondOption[] = [
    { id: 1, amount: "100 (50+50)", price: 180 },
    { id: 2, amount: "300 (150+150)", price: 520 },
    { id: 3, amount: "500 (250+250)", price: 820, hasGift: true },
    { id: 4, amount: "1000 (500+500)", price: 1670, hasGift: true },
  ];

  const paymentOptions: PaymentOption[] = [
    { id: 1, name: "Khalti", icon: "/khalti.jpg", bgClass: "bg-theme-accentGreen" },
    { id: 2, name: "eSewa", icon: "/esewa.jpg", bgClass: "bg-theme-accentBlue" },
  ];

  const totalAmount = selectedDiamond ? selectedDiamond.price : 0;

  const handleBuyNow = async () => {
    if (!selectedDiamond || !selectedPayment || !userId || !zoneId || !userName || !userWhatsapp) {
      alert("Please fill in all details before proceeding.");
      return;
    }

    const orderData = {
      price: selectedDiamond.amount,
      playerid: userId,
      names: userName,
      whatsapp: userWhatsapp,
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
      const result = await response.json();

      if (response.ok) {
        alert("Order placed successfully! " + (result.message ?? ""));
        setUserId("");
        setZoneId("");
        setUserName("");
        setUserWhatsapp("");
        setSelectedDiamond(null);
        setSelectedPayment(null);
      } else {
        alert("Failed to place order: " + (result.error ?? ""));
      }
    } catch (error) {
      console.error("Error during order placement:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto pb-24">
      {/* Game info card */}
      <div className="bg-theme-card rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-theme-bg">
            <Image
              src="/mobilelegends1.jpg"
              alt={gameId}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-white">Double Diamond MLBB</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-theme-accentGreen/90 text-white text-xs font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.73l-7 7A1 1 0 018 15v-5H4a1 1 0 01-.82-1.73l7-7a1 1 0 011.12-.18z" clipRule="evenodd" /></svg>
                Instant
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-theme-accentBlue/90 text-white text-xs font-medium">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.082 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" /></svg>
                Nepal
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-2">NON-REFUNDABLE & NON-RETURNABLE</p>
          </div>
        </div>
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          Get <span className="font-bold text-theme-accent">double the diamonds</span> for your Mobile Legends: Bang Bang account. Simply provide your MLBB User ID and Zone ID to enjoy instant delivery.
        </p>
      </div>

      {/* Step 1 */}
      <div className="bg-theme-card rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full border-2 border-theme-accent flex items-center justify-center text-theme-accent font-bold text-sm">1</span>
            <span className="font-bold text-white">Enter Your Account Data</span>
          </div>
          <button type="button" className="flex items-center gap-1 text-theme-accent text-sm">
            <span className="w-5 h-5 rounded-full border border-theme-accent flex items-center justify-center text-theme-accent text-xs font-bold">i</span>
            Guide
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 text-xs mb-1">USER ID</label>
            <input
              type="text"
              placeholder="12345678"
              className="w-full bg-theme-bg border border-theme-card rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-theme-accent"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">ZONE ID</label>
            <input
              type="text"
              placeholder="1234"
              className="w-full bg-theme-bg border border-theme-card rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-theme-accent"
              value={zoneId}
              onChange={(e) => setZoneId(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-400 text-xs mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-theme-bg border border-theme-card rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-theme-accent"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">WhatsApp</label>
            <input
              type="text"
              placeholder="98XXXXXXXX"
              className="w-full bg-theme-bg border border-theme-card rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-theme-accent"
              value={userWhatsapp}
              onChange={(e) => setUserWhatsapp(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="bg-theme-card rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 rounded-full border-2 border-theme-accent flex items-center justify-center text-theme-accent font-bold text-sm">2</span>
          <span className="font-bold text-white">Select Diamond Amount</span>
        </div>
        <div className="flex items-center gap-1.5 mb-4">
          <svg className="w-4 h-4 text-theme-accent" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.73l-7 7A1 1 0 018 15v-5H4a1 1 0 01-.82-1.73l7-7a1 1 0 011.12-.18z" clipRule="evenodd" /></svg>
          <span className="text-theme-accent font-semibold text-sm uppercase">Topup</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {diamondOptions.map((option) => {
            const selected = selectedDiamond?.id === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedDiamond(option)}
                className={`relative rounded-xl p-4 text-left transition-all ${
                  selected
                    ? "border-2 border-theme-accent bg-theme-accent/10"
                    : "border border-theme-bg bg-theme-bg hover:border-gray-600"
                }`}
              >
                {selected && (
                  <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-theme-accent flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                )}
                {option.hasGift && !selected && (
                  <span className="absolute top-2 right-2 text-theme-accentBlue">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5a2 2 0 012-2h6a2 2 0 012 2v2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2V5z" /></svg>
                  </span>
                )}
                <p className="font-semibold text-white text-sm">{option.amount}</p>
                <p className="text-gray-400 text-xs mt-0.5">First Top Up</p>
                <p className="text-theme-accent font-bold mt-1">Rs {option.price}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3 */}
      <div className="bg-theme-card rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-8 rounded-full border-2 border-theme-accent flex items-center justify-center text-theme-accent font-bold text-sm">3</span>
          <span className="font-bold text-white">Select Payment Method</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {paymentOptions.map((option) => {
            const selected = selectedPayment?.id === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedPayment(option)}
                className={`rounded-xl p-4 flex flex-col items-center justify-center gap-2 border-2 transition-all ${
                  selected ? "border-theme-accent bg-theme-accent/10" : "border-theme-bg bg-theme-bg hover:border-gray-600"
                }`}
              >
                <div className={`w-full h-10 rounded-lg ${option.bgClass} flex items-center justify-center overflow-hidden`}>
                  <Image src={option.icon} alt={option.name} width={80} height={32} className="object-contain max-h-6 w-auto" />
                </div>
                <span className="font-semibold text-white text-sm">{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-theme-bg border-t border-theme-card p-4 flex items-center justify-between gap-4 safe-area-pb">
        <div>
          <p className="text-gray-400 text-xs uppercase">Total Amount</p>
          <p className="text-theme-accent font-bold text-xl">Rs {totalAmount.toFixed(2)}</p>
        </div>
        <button
          type="button"
          onClick={handleBuyNow}
          disabled={!selectedDiamond || !selectedPayment || !userId || !zoneId || !userName || !userWhatsapp}
          className="flex items-center gap-2 bg-theme-accent text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          Buy Now!
        </button>
      </div>

      {/* Floating chat */}
      <Link
        href="https://wa.link/n5cbbq"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-10 w-14 h-14 rounded-full bg-theme-accentGreen flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">1</span>
      </Link>
    </div>
  );
}
