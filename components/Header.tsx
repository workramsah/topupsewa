"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-theme-bg text-white p-4 border-b border-theme-card">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="p-1.5 rounded-lg hover:bg-theme-card transition-colors"
            aria-label="Back"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-theme-accent flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-white text-lg">G</span>
            </div>
            <span className="font-bold text-lg uppercase tracking-tight hidden sm:inline">Gaming Center</span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="p-2 rounded-lg hover:bg-theme-card transition-colors"
            aria-label="Search"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link
            href="/order"
            className="p-2 rounded-lg hover:bg-theme-card transition-colors"
            aria-label="Profile / Orders"
          >
            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-theme-card"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 p-4 bg-theme-card rounded-lg space-y-2">
          <Link href="/" className="block py-2 text-white hover:text-theme-accent" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/freefire-diamond-topup" className="block py-2 text-white hover:text-theme-accent" onClick={() => setIsMenuOpen(false)}>Free Fire Top Up</Link>
          <Link href="/freefiretopup" className="block py-2 text-white hover:text-theme-accent" onClick={() => setIsMenuOpen(false)}>Checkout</Link>
          <Link href="/order" className="block py-2 text-white hover:text-theme-accent" onClick={() => setIsMenuOpen(false)}>Orders</Link>
          <a href="https://wa.link/n5cbbq" target="_blank" rel="noopener noreferrer" className="block py-2 text-theme-accent-green">WhatsApp</a>
        </div>
      )}
    </header>
  );
}
