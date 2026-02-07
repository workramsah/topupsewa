"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  "/freefire.jpg",
  "/mobilelegends1.jpg",
  "/topupfree.jpg",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-56 md:h-80 overflow-hidden rounded-2xl border border-theme-card">
      <Image
        src={images[currentIndex]}
        alt="Hero Banner"
        fill
        style={{ objectFit: "cover" }}
        className="transition-opacity duration-500 ease-in-out"
      />

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          type="button"
          onClick={goToPrevious}
          className="bg-theme-bg/80 text-white p-2.5 rounded-full hover:bg-theme-card transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          type="button"
          onClick={goToNext}
          className="bg-theme-bg/80 text-white p-2.5 rounded-full hover:bg-theme-card transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-theme-bg/50">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center drop-shadow">TOP UP NOW</h2>
        <Link href="/freefire-diamond-topup" className="mt-4 inline-block bg-theme-accent text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
          TOP UP NOW
        </Link>
      </div>
    </div>
  );
}
