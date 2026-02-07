"use client"
import Price from "@/app/component/Price";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

import Image from 'next/image';
import Link from "next/link";

// Update API URL to use port 3000
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function Page() {
  const [price,setPrice]=useState("Click On Diamond")
  //this is for left part
  function addText95(){
    setPrice("95 (115💎)")
  }
  function addText190(){
    setPrice("190 (240💎)")
  }
  function addText285(){
    setPrice("285 (335💎)")
  }
  function addText380(){
    setPrice("380 (480💎)")
  }
  function addText475(){
    setPrice("475 (610💎)")
  }
  function addText570(){
    setPrice("570 (725💎)")
  }
  function addText1425(){
    setPrice("1425 (1850💎)")
  }
  function addText1900(){
    setPrice("1900 (2530💎)")
  }
// this is for right part
function addText110(){
  setPrice("855 (1090💎)")
}
function addText2375(){
  setPrice("2375 (3140💎)")
}
function addText2850(){
  setPrice("2850 (3770💎)")
}
function addText3325(){
  setPrice("3325 (4380💎)")
}
function addText3800(){
  setPrice("3800 (5060💎)")
}
function addText7600(){
  setPrice("195 L")
}
function addText220w(){
  setPrice("950 M")
}
function addText80w(){
  setPrice("195 W")}

  //
  const [playerid,setPlayerid] =useState("");
  const [names,setName] =useState("");
  const [whatsapp,setWhatsapp] =useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

// api for post
const addProduct = async () => {
  try {
    setIsLoading(true);
    setError("");
    
    if (!playerid || !names || !whatsapp || price === "Click On Diamond") {
      setError("Please fill in all fields and select a price");
      return;
    }

    console.log('Sending request to:', `${API_URL}/api/users`);
    const response = await fetch(`${API_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price, playerid, names, whatsapp })
    });

    const data = await response.json();
    console.log('Response:', data);

    if (!response.ok) {
      throw new Error(data.error || "Failed to create order");
    }

    // Clear form after successful submission
    setPlayerid("");
    setName("");
    setWhatsapp("");
    setPrice("Click On Diamond");
    
    // Navigate to checkout page
    window.location.href = "/freefiretopup";
  } catch (err: unknown) {
    console.error('Error:', err);
    setError(err instanceof Error ? err.message : "An error occurred while creating the order");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-theme-bg text-white">
       <Header/>

        <main className="mx-4 mt-6 pb-8">
          <div className="rounded-2xl overflow-hidden">
            <Image className="w-full max-w-xs rounded-2xl" src="/topupfree.jpg" alt="Free Fire topup" width={208} height={208} loading="lazy" />
          </div>

          <div className="mt-6">
            <h1 className="font-extrabold text-2xl text-white">Free Fire Topup</h1>
            <h2 className="text-lg text-theme-accent font-semibold">Rs 115 - Rs 7000+</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Experience the ultimate Free Fire gaming with our premium diamond top-up service. Get instant delivery of Free Fire diamonds at competitive prices. Our secure payment system ensures safe transactions for all your Free Fire recharge needs.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-theme-accentGreen/80 text-white rounded-lg text-xs font-medium">Instant Delivery</span>
            <span className="px-3 py-1 bg-theme-accentBlue/80 text-white rounded-lg text-xs font-medium">Secure Payment</span>
            <span className="px-3 py-1 bg-theme-accent/80 text-white rounded-lg text-xs font-medium">24/7 Support</span>
          </div>
          </div>

          {/* Left and Right Component Placement */}
          <div className="bg-theme-card rounded-2xl w-full mt-6 p-4 border border-theme-bg">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Side */}
              <div className="col-span-1 flex flex-col gap-4  ">
                <button onClick={addText95}>
                   <Price price="95" diamond="115 Diamond" />
                </button>
                
                <button onClick={addText190}>
                   <Price price="190" diamond="240 Diamond" />
                </button>

                <button onClick={addText285}>
                   <Price price="285" diamond="335 Diamond" />
                </button>

                <button onClick={addText380}>
                   <Price price="380" diamond="480 Diamond" />
                </button>

                <button onClick={addText475}>
                   <Price price="475" diamond="610 Diamond" />
                </button>

                <button onClick={addText570}>
                   <Price price="570" diamond="725 Diamond" />
                </button>

                <button onClick={addText1425}>
                   <Price price="1425" diamond="1850 Diamond" />
                </button>

                <button onClick={addText1900}>
                   <Price price="1900" diamond="2530 Diamond" />
                </button>
                
              </div>

              {/* Right Side */}
              <div className="col-span-1 flex flex-col gap-4">
                <button onClick={addText110}>
                   <Price price="855" diamond="1090 Diamond" />
                </button>

               
                <button onClick={addText2375}>
                   <Price price="2375" diamond="3140 Diamond" />
                </button>
                <button onClick={addText2850}>
                   <Price price="2850" diamond="3770 Diamond" />
                </button>
                <button onClick={addText3325}>
                   <Price price="3325" diamond="4380 Diamond" />
                </button>
                <button onClick={addText3800}>
                   <Price price="3800" diamond="5060 Diamond" />
                </button>
                <button onClick={addText7600}>
                   <Price price="195" diamond="Levelup" />
                </button>
                <button onClick={addText220w}>
                   <Price price="950" diamond="Monthly" />
                </button>
                <button onClick={addText80w}>
                   <Price price="195" diamond=" Weekly" />
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-center text-white font-extrabold text-lg mb-4">Price: <span className="text-theme-accent">{price}</span></h2>
          <div className="bg-theme-card mt-6 pb-4 pt-4 px-4 rounded-2xl border border-theme-bg">
            <label className="block text-white font-semibold text-sm mb-2">Player ID (UID)</label>
            <input 
              type="number" 
              value={playerid} 
              onChange={(e)=>setPlayerid(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none transition" 
              placeholder="Enter player uid"
            />
            
            <label className="block text-white font-semibold text-sm mt-4 mb-2">Name</label>
            <input 
              type="text" 
              value={names} 
              onChange={(e)=>setName(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none transition" 
              placeholder="Enter your name"
            />
            
            <label className="block text-white font-semibold text-sm mt-4 mb-2">WhatsApp Number</label>
            <input 
              type="number" 
              value={whatsapp} 
              onChange={(e)=>setWhatsapp(e.target.value)} 
              className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none transition" 
              placeholder="Enter WhatsApp number"
            />
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 text-red-200 rounded-xl">
              {error}
            </div>
          )}

          <button 
            onClick={addProduct} 
            disabled={isLoading}
            className={`w-full mt-6 font-extrabold text-white bg-theme-accent px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Processing...' : 'Buy Now'}
          </button>

          <div className="mt-8 p-6 bg-theme-card rounded-2xl border border-theme-bg">
            <h3 className="text-lg font-bold text-white mb-4">How to purchase Free Fire Diamonds:</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>1. First, select the Diamond Pack you want to buy <Link href="https://wa.link/n5cbbq" className="text-theme-accentGreen">or contact on WhatsApp</Link></p>
              <p>2. Next, enter your Free Fire Player UID , Name and WhatsApp Number.</p>
              <p>3. After that, check out and choose your payment method (eSEWA, kHALTI).</p>
              <p>4. After payment is made, the Diamond you purchased will be credited to your account within 5 minutes</p>
            </div>
          </div>
        </main>
        <Footer/>
      </div>
  );
}
