import Get from "../component/Get";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-theme-bg text-white">
      <Header />
      <Get />
      <Footer />
    </div>
  );
}