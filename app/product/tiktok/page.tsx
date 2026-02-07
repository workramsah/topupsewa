"use client"
import { useState } from 'react';
import Header from "@/components/Header";
import Price from "@/app/component/Price";
import Footer from "@/components/Footer";

export default function Tiktok(){

  function view500(){
    setRate('10')
  }
  // API function to submit data
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const handleSubmit = async () => {
   if (!videoslink || !naam || !whatsapp || rate === "Click on UC" ) {
     setSubmitStatus("Please fill all fields and select a package");
     return;
   }

   setIsLoading(true);
   setSubmitStatus("");

   try {
     const response = await fetch('/api/tiktok', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         videoslink: videoslink,
         naam: naam,
         whatsapp: whatsapp,
         rate: rate
       }),
     });

     if (response.ok) {
       setSubmitStatus("Order submitted successfully!");
       // Clear form
       setVideoslink("");
       setNaam("");
       setWhatsapp("");
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

  //this for needed data
  const [videoslink,setVideoslink] =useState("");
  const [naam,setNaam] =useState("");
  const [whatsapp,setWhatsapp] =useState("");

const [rate,setRate]= useState("Select Price");
  const [selectedOption, setSelectedOption] = useState("Views");
    return(
        <div className="min-h-screen bg-theme-bg text-white">
            <Header/>
            <main className="mx-4 mt-6 pb-8">
                <div className="mt-6">
            <h1 className="font-extrabold text-2xl text-white">TikTok Services</h1>
            <h2 className="text-lg text-theme-accent font-semibold">Views &amp; Likes</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Get more TikTok views and likes. Instant delivery and secure payment.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-theme-accentGreen/80 text-white rounded-lg text-xs font-medium">Instant</span>
            <span className="px-3 py-1 bg-theme-accentBlue/80 text-white rounded-lg text-xs font-medium">Secure</span>
          </div>
          <div className="mt-6">
            <label className="block text-white font-semibold text-sm mb-2">Select Package Type</label>
            <select 
              value={selectedOption} 
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-theme-card border border-theme-bg text-white focus:border-theme-accent outline-none"
            >
              <option value="Views">Views</option>
              <option value="Likes">Likes</option>
            </select>
          </div>
          </div>

          {selectedOption === 'Views' && (
            <>
              <div className="bg-theme-card rounded-2xl w-full mt-6 p-4 border border-theme-bg">
                <div className="grid grid-cols-2 gap-4 h-full">
                 
                  {/* Left Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button onClick={view500}>
                       <Price price="135" diamond="60 views" />
                    </button>
                    
                    <button >
                       <Price price="285" diamond="120 UC" />
                    </button>

                    <button>
                       <Price price="410" diamond="180 UC" />
                    </button>

                    <button>
                       <Price price="530" diamond="240 UC" />
                    </button>

                    <button>
                       <Price price="660" diamond="325 UC" />
                    </button>

                    <button>
                       <Price price="810" diamond="385 UC" />
                    </button>

                    <button>
                       <Price price="915" diamond="445 UC" />
                    </button>

                    <button>
                       <Price price="1330" diamond="660 UC" />
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button>
                       <Price price="1460" diamond="720 UC" />
                    </button>

                    <button>
                       <Price price="1990" diamond="985 UC" />
                    </button>
                    <button>
                       <Price price="3420" diamond="1800" />
                    </button>
                    <button>
                       <Price price="6540" diamond="3850 UC" />
                    </button>
                    <button>
                       <Price price="12950" diamond="8100" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Offfer UC" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Monthly" />
                    </button>
                    <button>
                       <Price price="not fix" diamond=" Weekly" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedOption === 'Likes' && (
            <>
            <div className="bg-theme-card rounded-2xl w-full mt-6 p-4 border border-theme-bg">
                <div className="grid grid-cols-2 gap-4 h-full">
                 
                  {/* Left Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button onClick={view500}>
                       <Price price="135" diamond="60 likes" />
                    </button>
                    
                    <button >
                       <Price price="285" diamond="120 UC" />
                    </button>

                    <button>
                       <Price price="410" diamond="180 UC" />
                    </button>

                    <button>
                       <Price price="530" diamond="240 UC" />
                    </button>

                    <button>
                       <Price price="660" diamond="325 UC" />
                    </button>

                    <button>
                       <Price price="810" diamond="385 UC" />
                    </button>

                    <button>
                       <Price price="915" diamond="445 UC" />
                    </button>

                    <button>
                       <Price price="1330" diamond="660 UC" />
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="col-span-1 flex flex-col gap-4">
                    <button>
                       <Price price="1460" diamond="720 UC" />
                    </button>

                    <button>
                       <Price price="1990" diamond="985 UC" />
                    </button>
                    <button>
                       <Price price="3420" diamond="1800" />
                    </button>
                    <button>
                       <Price price="6540" diamond="3850 UC" />
                    </button>
                    <button>
                       <Price price="12950" diamond="8100" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Offfer UC" />
                    </button>
                    <button>
                       <Price price="not fix" diamond="Monthly" />
                    </button>
                    <button>
                       <Price price="not fix" diamond=" Weekly" />
                    </button>
                  </div>
                </div>
              </div>
              </>
          )}
          <h2 className="text-center text-white font-extrabold text-lg mb-4 mt-6">Amount: <span className="text-theme-accent">{rate}</span></h2>
          <div className="bg-theme-card mt-6 pb-4 pt-4 px-4 rounded-2xl border border-theme-bg">
            <label className="block text-white font-semibold text-sm mb-2">Video Link</label>
            <input 
              value={videoslink}
              onChange={(e)=>setVideoslink(e.target.value)}
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none" 
              placeholder="TikTok video link"
            />
            <label className="block text-white font-semibold text-sm mt-4 mb-2">Name</label>
            <input
              value={naam}
              onChange={(e)=>setNaam(e.target.value)}
              type="text" 
              className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none" 
              placeholder="Enter your name"
            />
            <label className="block text-white font-semibold text-sm mt-4 mb-2">WhatsApp Number</label>
            <input
              value={whatsapp}
              type="number"
              onChange={(e)=>setWhatsapp(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-theme-bg text-white border border-theme-card placeholder-gray-500 focus:border-theme-accent outline-none" 
              placeholder="Enter WhatsApp number"
            />
          </div>
          <button
            type="button"
            className="w-full mt-6 font-extrabold text-white bg-theme-accent px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Buy Now"}
          </button>
          {submitStatus && (
            <div className={`mt-4 p-4 rounded-xl text-center ${
              submitStatus.includes("successfully") 
                ? "bg-theme-accentGreen/20 text-theme-accentGreen border border-theme-accentGreen/50" 
                : "bg-red-500/20 text-red-200 border border-red-500/50"
            }`}>
              {submitStatus}
            </div>
          )}
            </main>
            <Footer/>
        </div>
    )
}