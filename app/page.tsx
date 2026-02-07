import Head from "next/head";
import Footer from "./component/Footer";
import Get from "./component/Get";
import Header from "./component/Header";
import ProductCard from "./component/ProductCard";

export default async function page() {
  return (
    <>
      <Head>
        <title>Free Fire Top-Up - Cheap Diamonds & Instant Recharge | Game Shop</title>
        <meta name="description" content="Top-up Free Fire diamonds instantly at the lowest prices. Buy 50 to 10400 FF diamonds with secure and fast delivery across Indonesia and India." />
        <meta name="keywords" content="free fire top-up, free fire diamond top-up, buy free fire diamonds, cheap free fire recharge, instant ff diamond top-up, ff diamonds indonesia, free fire diamond price" />
        <meta property="og:title" content="Free Fire Diamond Top-Up - Instant & Affordable Recharge" />
        <meta property="og:description" content="Buy Free Fire diamonds online at the best prices. Fast FF diamond top-up with secure payment for Indonesia and India." />
        <meta property="og:image" content="/freefire.jpg" />
        <meta property="og:url" content="https://topupsewa.games/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Free Fire Diamonds",
            "description": "Purchase Free Fire diamond for your gaming account",
            "brand": {
              "@type": "Brand",
              "name": "Free Fire"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "65",
              "highPrice": "1000",
              "offerCount": "1"
            }
          })}
        </script>
      </Head>
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Header/>
        <main className="text-gray-900 dark:text-white">
          <h1 className="learn text-center p-2 bg-red-50 dark:bg-red-900/20 mb-2 text-gray-900 dark:text-white">Games</h1>

          <div className="flex justify-center flex-wrap ml-2 gap-4">
            <ProductCard name="FreeFire" price="Rs 95 -- Rs 1000" img="freefire.jpg" Url="/freefire-diamond-topup"/>
            <ProductCard name="PUBG" price="Rs 99-1000+" img="pugb-comp.jpg" Url="/topup/pubg"/>
            <ProductCard name="Call Of Duty" price="Comming Fast" img="callofduty (1).jpg" Url="/topup/callofduty"/>
            <ProductCard name="Mobile Legends" price="Comming Soon" img="mobilelegends1.jpg" Url="topup/mobilelegends"/>
          </div>

          <h1 className="learn text-center p-2 bg-red-50 dark:bg-red-900/20 mt-2 mb-2 text-gray-900 dark:text-white">Product Comming Soon</h1>
          <div className="flex justify-center flex-wrap ml-2 gap-4">
            <ProductCard name="Github Student" price=" Comming Soon" img="pugb-comp.jpg" Url="/product/githubstudentpack" />
            <ProductCard name="Cloud Storage" price="Comming Soon" img="onedrive.png" Url="/product/cloudstorage"/>
            <ProductCard name="Tik Tok Fans" price="Rs 10-1000" img="tiktok.jpg" Url="/product/tiktok"/>
            <ProductCard name="Instagram Fans" price="Comming Soon" img="instagram (1).jpg" Url="/product/instagramfollowers"/>
          </div>

          <h1 className="learn text-center p-2 bg-red-50 dark:bg-red-900/20 mt-2 mb-2 text-gray-900 dark:text-white">Suscription</h1>
          <div className="flex justify-center flex-wrap ml-2 gap-4">
            <ProductCard name="Netflix" price="Comming Soon" img="netfilx.jpg" Url="/subscription/netfilx" />
            <ProductCard name="Amazon Prime" price="Comming Soon" img="prime.jpg" Url="/subscription/amazoneprime" />
            <ProductCard name="Youtube Premium" price="Comming Soon" img="youtube.jpg" Url="/subscription/youtubepremium" />
            <ProductCard name="Canva Pro" price="Comming Soon" img="canva.jpg" Url="/subscription/canvapro" />
          </div>
          
          <div className="h-[50vh] overflow-y-auto">
            <Get/>
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}
