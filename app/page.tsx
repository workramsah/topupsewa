import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GameCategories from "@/components/GameCategories";
import HeroCarousel from "@/components/HeroCarousel";

export default async function Page() {
  return (
    <div className="min-h-screen bg-theme-bg text-white">
      <Header />
      <main className="container mx-auto mt-4 px-4">
        <HeroCarousel />
        <GameCategories />
      </main>
      <Footer />
    </div>
  );
}