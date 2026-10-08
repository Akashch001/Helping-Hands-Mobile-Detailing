import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MeetChris from "@/components/MeetChris";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <NavBar />
      <main id="main-content">
        <Hero />
        <MeetChris />
        <Services />
        <BeforeAfter />
        <Pricing />
        <Reviews />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
