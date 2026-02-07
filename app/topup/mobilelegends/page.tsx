"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Price from "@/app/component/Price";
import Image from "next/image";

export default function Page() {
  const [rate, setRate] = useState("Click on Diamond");

  function setRate180() {
    setRate("180 (100 Diamonds)");
  }
  function setRate520() {
    setRate("520 (300 Diamonds)");
  }
  function setRate820() {
    setRate("820 (500 Diamonds)");
  }
  function setRate1670() {
    setRate("1670 (1000 Diamonds)");
  }
  function setRate2570() {
    setRate("2570 (1500 Diamonds)");
  }
  function setRate3420() {
    setRate("3420 (2000 Diamonds)");
  }
  function setRate4270() {
    setRate("4270 (2500 Diamonds)");
  }
  function setRate5120() {
    setRate("5120 (3000 Diamonds)");
  }
  function setRate7060() {
    setRate("7060 (4000 Diamonds)");
  }
  function setRate10800() {
    setRate("10800 (6000 Diamonds)");
  }
  function setRate16200() {
    setRate("16200 (10000 Diamonds)");
  }
  function setRate32400() {
    setRate("32400 (20000 Diamonds)");
  }

  const [userId, setUserId] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [names, setNames] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = async () => {
    if (!userId || !zoneId || !names || !whatsapp || rate === "Click on Diamond") {
      setSubmitStatus("Please fill all fields and select a diamond package");
      return;
    }

    setIsLoading(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          price: rate,
          playerid: `${userId}_${zoneId}`,
          names,
          whatsapp,
        }),
      });

      if (response.ok) {
        setSubmitStatus("Order submitted successfully!");
        setUserId("");
        setZoneId("");
        setNames("");
        setWhatsapp("");
        setRate("Click on Diamond");
        window.location.href = "/freefiretopup";
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitStatus(data.error || "Failed to submit order. Please try again.");
      }
    } catch {
      setSubmitStatus("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-theme-bg text-white">
      <Header />
      <main className="mx-4 mt-6 pb-8">
        <div className="rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-theme-accent/10 w-full max-w-xs">
          <Image
            className="w-full rounded-2xl"
            src="/mobilelegends1.jpg"
            alt="Mobile Legends topup"
            width={208}
            height={208}
            loading="lazy"
          />
        </div>
        <div className="mt-6">
          <h1 className="font-extrabold text-2xl text-white">Mobile Legends Topup</h1>
          <h2 className="text-lg text-theme-accent font-semibold">Rs 180 - Rs 32400+</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Get Mobile Legends diamonds instantly. Our premium MLBB top-up service offers competitive prices, secure payment, and fast delivery for your Battle Points and diamond needs in Nepal.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-theme-accentGreen/80 text-white rounded-lg text-xs font-medium transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-default">
              Instant Delivery
            </span>
            <span className="px-3 py-1 bg-theme-accentBlue/80 text-white rounded-lg text-xs font-medium transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-default">
              Secure Payment
            </span>
            <span className="px-3 py-1 bg-theme-accent/80 text-white rounded-lg text-xs font-medium transition-transform duration-200 hover:scale-110 hover:shadow-md cursor-default">
              24/7 Support
            </span>
          </div>
        </div>

        <div className="bg-theme-card rounded-2xl w-full mt-6 p-4 border border-theme-bg transition-all duration-300 hover:border-theme-accent/40 hover:shadow-lg hover:shadow-theme-accent/10">
          <div className="grid grid-cols-2 gap-4 h-full">
            <div className="col-span-1 flex flex-col gap-4">
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate180}
              >
                <Price price="180" diamond="100 Diamonds" selected={rate === "180 (100 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate520}
              >
                <Price price="520" diamond="300 Diamonds" selected={rate === "520 (300 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate820}
              >
                <Price price="820" diamond="500 Diamonds" selected={rate === "820 (500 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate1670}
              >
                <Price price="1670" diamond="1000 Diamonds" selected={rate === "1670 (1000 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate2570}
              >
                <Price price="2570" diamond="1500 Diamonds" selected={rate === "2570 (1500 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate3420}
              >
                <Price price="3420" diamond="2000 Diamonds" selected={rate === "3420 (2000 Diamonds)"} />
              </button>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate4270}
              >
                <Price price="4270" diamond="2500 Diamonds" selected={rate === "4270 (2500 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate5120}
              >
                <Price price="5120" diamond="3000 Diamonds" selected={rate === "5120 (3000 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate7060}
              >
                <Price price="7060" diamond="4000 Diamonds" selected={rate === "7060 (4000 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate10800}
              >
                <Price price="10800" diamond="6000 Diamonds" selected={rate === "10800 (6000 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate16200}
              >
                <Price price="16200" diamond="10000 Diamonds" selected={rate === "16200 (10000 Diamonds)"} />
              </button>
              <button
                type="button"
                className="group w-full text-left transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                onClick={setRate32400}
              >
                <Price price="32400" diamond="20000 Diamonds" selected={rate === "32400 (20000 Diamonds)"} />
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-center text-white font-extrabold text-lg mb-4">
          Amount: <span className="text-theme-accent">{rate}</span>
        </h2>

        <div className="bg-theme-card mt-6 pb-4 pt-4 px-4 rounded-2xl border border-theme-bg transition-all duration-300 hover:border-theme-accent/40 hover:shadow-lg">
          <label className="block text-white font-semibold text-sm mb-2">User ID (MLBB)</label>
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50"
            placeholder="Enter MLBB User ID"
          />
          <label className="block text-white font-semibold text-sm mt-4 mb-2">Zone ID</label>
          <input
            value={zoneId}
            onChange={(e) => setZoneId(e.target.value)}
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50"
            placeholder="Enter Zone ID"
          />
          <label className="block text-white font-semibold text-sm mt-4 mb-2">Name</label>
          <input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50"
            placeholder="Enter your name"
          />
          <label className="block text-white font-semibold text-sm mt-4 mb-2">WhatsApp Number</label>
          <input
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            type="text"
            className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/30 outline-none transition-all duration-200 hover:border-theme-accent/50"
            placeholder="Enter WhatsApp number"
          />
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full mt-6 font-extrabold text-white bg-theme-accent px-6 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-[1.02] hover:shadow-lg hover:shadow-theme-accent/30 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
        >
          {isLoading ? "Submitting..." : "Buy Now"}
        </button>

        {submitStatus && (
          <div
            className={`mt-4 p-4 rounded-xl text-center transition-opacity duration-300 ${
              submitStatus.includes("successfully")
                ? "bg-theme-accentGreen/20 text-theme-accentGreen border border-theme-accentGreen/50"
                : "bg-red-500/20 text-red-200 border border-red-500/50"
            }`}
          >
            {submitStatus}
          </div>
        )}

        <div className="mt-8 p-6 bg-theme-card rounded-2xl border border-theme-bg transition-all duration-300 hover:border-theme-accent/30 hover:shadow-lg">
          <h3 className="text-lg font-bold text-white mb-4">How to purchase MLBB Diamonds:</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>1. Select a diamond package above. Or contact us on WhatsApp 9702748991.</p>
            <p>2. Enter your MLBB User ID, Zone ID, Name and WhatsApp Number.</p>
            <p>3. Click Buy Now and choose payment method (eSewa, Khalti).</p>
            <p>4. Diamonds will be credited to your account within 5 minutes.</p>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
