import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameDetailForm from "@/components/GameDetailForm";

export default function GameDetailPage({
  params,
}: { params: { gameId: string } }) {
  return (
    <div className="min-h-screen bg-theme-bg text-white">
      <Header />
      <main className="container mx-auto mt-4 px-4 pb-8">
        <GameDetailForm gameId={params.gameId} />
      </main>
      <Footer />
    </div>
  );
}
