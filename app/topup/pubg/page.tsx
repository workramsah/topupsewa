"use client"
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Price from "@/app/component/Price";
import Image from 'next/image';
import Pubgnonum from "@/app/component/Pubgnonum";

export default function Page() {
   const [rate,setRate]= useState("Click on UC")
   // function
   function addText95(){
      setRate("135 (60 uc)")
    }
    function addText190(){
      setRate("285 (120 uc)")
    }
    function addText285(){
      setRate("410 (180 uc)")
    }
    function addText380(){
      setRate("530 (240 uc)")
    }
    function addText475(){
      setRate("660 (325 uc)")
    }
    function addText570(){
      setRate("810 (385 uc)")
    }
    function addText1425(){
      setRate("915 (445 uc)")
    }
    function addText1900(){
      setRate("1330 (660 uc)")
    }
  // this is for right part
  function addText110(){
    setRate("1460 (720 uc)")
  }
  function addText2375(){
   setRate("1990 (950 uc)")
  }
  function addText2850(){
   setRate("3420 (1800 uc)")
  }
  function addText3325(){
   setRate("6540 (3000 uc)")
  }
  function addText3800(){
   setRate("12950 (8100 uc)")
  }
  function addText7600(){
   setRate("000 (000 uc)")
  }
  function addText220w(){
    setRate("000 (000 uc)")
  }
  function addText80w(){
   setRate("000 (000 uc)")}

  // API function to submit data
  const handleSubmit = async () => {
    if (!gamesid || !naam || !message || rate === "Click on UC") {
      setSubmitStatus("Please fill all fields and select a package");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("");

    try {
      const response = await fetch('/api/pubg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gamesid: gamesid,
          naam: naam,
          message: message,
          rate: rate
        }),
      });

      if (response.ok) {
        setSubmitStatus("Order submitted successfully!");
        // Clear form
        setGamesid("");
        setNaam("");
        setMessage("");
        setRate("Click on UC");
      } else {
        setSubmitStatus("Failed to submit order. Please try again.");
      }
       // Navigate to checkout page
    window.location.href = "/freefiretopup";
    } catch {
      setSubmitStatus("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

   // fill boxes
   const [gamesid,setGamesid] =useState("");
  const [naam,setNaam] =useState("");
  const [message,setMessage] =useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  
    return (
      <div className="min-h-screen bg-theme-bg text-white">
        <Header/>
        <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-6 pb-8">
          {/* Hero + intro: stacked on mobile, side-by-side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-theme-accent/10 w-full max-w-xs mx-auto lg:max-w-none">
                <Image className="w-full rounded-2xl aspect-square object-cover" src="/pugb-comp.jpg" alt="PUBG topup" width={320} height={320} loading="lazy" />
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:col-span-8">
              <h1 className="font-extrabold text-2xl md:text-3xl text-white">PUBG Topup</h1>
              <h2 className="text-lg md:text-xl text-theme-accent font-semibold mt-1">Rs 135 - Rs 12950+</h2>
              <p className="mt-4 text-gray-300 leading-relaxed max-w-2xl">
                Experience the ultimate PUBG gaming with our premium UC top-up service. Get instant delivery of PUBG UC at competitive prices. Our secure payment system ensures safe transactions for all your PUBG recharge needs.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-theme-accentGreen/80 text-white rounded-lg text-xs font-medium transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-default">Instant Delivery</span>
                <span className="px-3 py-1.5 bg-theme-accentBlue/80 text-white rounded-lg text-xs font-medium transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-default">Secure Payment</span>
                <span className="px-3 py-1.5 bg-theme-accent/80 text-white rounded-lg text-xs font-medium transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-default">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* UC packages: 2 cols mobile, 3 md, 4 lg */}
          <div className="bg-theme-card rounded-2xl w-full mt-8 lg:mt-10 p-4 md:p-6 border border-theme-bg transition-all duration-300 hover:border-theme-accent/40 hover:shadow-lg hover:shadow-theme-accent/10">
            <h3 className="text-lg font-bold text-white mb-4 md:mb-6">Select UC Package</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText95}><Price price="135" diamond="60 UC" selected={rate === "135 (60 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText190}><Price price="285" diamond="120 UC" selected={rate === "285 (120 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText285}><Price price="410" diamond="180 UC" selected={rate === "410 (180 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText380}><Price price="530" diamond="240 UC" selected={rate === "530 (240 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText475}><Price price="660" diamond="325 UC" selected={rate === "660 (325 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText570}><Price price="810" diamond="385 UC" selected={rate === "810 (385 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText1425}><Price price="915" diamond="445 UC" selected={rate === "915 (445 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText1900}><Price price="1330" diamond="660 UC" selected={rate === "1330 (660 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText110}><Price price="1460" diamond="720 UC" selected={rate === "1460 (720 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText2375}><Price price="1990" diamond="985 UC" selected={rate === "1990 (950 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText2850}><Price price="3420" diamond="1800" selected={rate === "3420 (1800 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText3325}><Price price="6540" diamond="3850 UC" selected={rate === "6540 (3000 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText3800}><Price price="12950" diamond="8100" selected={rate === "12950 (8100 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText7600}><Price price="not fix" diamond="Offfer UC" selected={rate === "000 (000 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText220w}><Price price="not fix" diamond="Monthly" selected={rate === "000 (000 uc)"} /></button>
              <button type="button" className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]" onClick={addText80w}><Price price="not fix" diamond=" Weekly" selected={rate === "000 (000 uc)"} /></button>
            </div>
          </div>

          {/* Amount + Form: on desktop, form in 2 columns and constrained width */}
          <h2 className="text-center text-white font-extrabold text-lg md:text-xl mt-8 mb-2">Amount: <span className="text-theme-accent">{rate}</span></h2>

          <div className="max-w-2xl mx-auto mt-6">
            <div className="bg-theme-card pb-4 pt-4 px-4 md:px-6 rounded-2xl border border-theme-bg transition-all duration-300 hover:border-theme-accent/40 hover:shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-white font-semibold text-sm mb-2">Player ID (UID)</label>
                  <input value={gamesid} onChange={(e)=>setGamesid(e.target.value)} type="number" className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50" placeholder="Enter player uid" />
                </div>
                <div>
                  <label className="block text-white font-semibold text-sm mb-2">Name</label>
                  <input value={naam} onChange={(e)=>setNaam(e.target.value)} type="text" className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50" placeholder="Enter your name" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-white font-semibold text-sm mb-2">WhatsApp Number</label>
                  <input value={message} type="number" onChange={(e)=>setMessage(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50" placeholder="Enter WhatsApp number" />
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full max-w-md mx-auto mt-6 block font-extrabold text-white bg-theme-accent px-6 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-theme-accent/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
            >
              {isLoading ? "Submitting..." : "Buy Now"}
            </button>
          </div>

          {submitStatus && (
            <div className={`max-w-2xl mx-auto mt-4 p-4 rounded-xl text-center transition-opacity duration-300 ${
              submitStatus.includes("successfully") ? "bg-theme-accentGreen/20 text-theme-accentGreen border border-theme-accentGreen/50" : "bg-red-500/20 text-red-200 border border-red-500/50"
            }`}>
              {submitStatus}
            </div>
          )}
          <Pubgnonum/>
          <div className="mt-8 md:mt-10 p-6 md:p-8 bg-theme-card rounded-2xl border border-theme-bg transition-all duration-300 hover:border-theme-accent/30 hover:shadow-lg max-w-4xl mx-auto">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4">How to purchase PUBG UC:</h3>
            <div className="space-y-2 text-gray-300 text-sm md:text-base max-w-2xl">
              <p>1. Select the PUBG UC pack. Or contact us on WhatsApp 9702748991.</p>
              <p>2. Enter your PUBG Player ID, Name and WhatsApp Number.</p>
              <p>3. Check out and choose payment method (eSewa, Khalti).</p>
              <p>4. UC will be credited to your account within 5 minutes.</p>
            </div>
          </div>
          <Footer/>
        </main>
        </div>
    )
}