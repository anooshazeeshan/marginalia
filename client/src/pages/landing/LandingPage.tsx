import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import FeaturedBooks from "@/components/ui/FeaturedBooks";
import Stats from "@/components/ui/Stats";
import QuoteSection from "@/components/ui/QuoteSection";
import Footer from "@/components/ui/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <FeaturedBooks />
      <QuoteSection />
      <Footer />
    </main>
  );
}