"use client"
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Uploadq from "@/app/component/upload";
import { useState } from "react";
import Image from 'next/image';

export default function Page() {
  const [ram,setRam] = useState("onlyQR.jpg")
  function esewa(){
      setRam("onlyQR.jpg");
  }

  function khalti(){
      setRam("khalti.jpg")
  }
  
  return (
    <div className="min-h-screen bg-theme-bg text-white">
        <Header />

        <main className="px-4 py-6 max-w-lg mx-auto">
          {/* QR Code Section */}
          <div className="text-center">
            <h1 className="text-2xl font-extrabold text-theme-accent">Please Scan QR for Payment</h1>
            <Image className="mx-auto mt-6 w-56 h-72 object-contain rounded-2xl border border-theme-card" src={ram.startsWith('/') ? ram : `/${ram}`} alt="Payment QR" width={240} height={320} />
            <div className="flex justify-center gap-4 mt-6">
              <button type="button" className="bg-theme-accentBlue text-white rounded-xl px-5 py-2.5 font-semibold hover:opacity-90" onClick={esewa}>eSewa</button>
              <button type="button" className="bg-theme-accentGreen text-white rounded-xl px-5 py-2.5 font-semibold hover:opacity-90" onClick={khalti}>Khalti</button>
            </div>
          </div>

          {/* Upload Screenshot Section */}
          <div className="bg-theme-card mt-8 py-8 px-6 rounded-2xl border border-theme-bg">
            <h2 className="text-white text-xl font-extrabold text-center mb-6">
              Upload Screenshot Of Payment
            </h2>
            <div className="bg-theme-bg/80 p-6 rounded-xl border border-theme-bg">
              <Uploadq/>
            </div>

            <div className="mt-6">
              <label className="block text-white font-semibold text-sm mb-2">Remark or payment mobile number</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none"
                placeholder="Enter remark or mobile number"
              />
            </div>
          </div>

          <Link href="/" className="block mt-8">
            <button
              type="button"
              className="w-full font-extrabold text-white bg-theme-accent px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Back to Home
            </button>
          </Link>
        </main>

        <Footer />
      </div>
  );
}