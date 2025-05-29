import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesGrid from "./components/FeaturesGrid";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import GuaranteeSection from "./components/GuaranteeSection";

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Header />
      <Hero />
      <Features />
      <FeaturesGrid />
      <PricingSection />
      <FAQSection />
      <GuaranteeSection />
      <ContactSection />
      <a
        href={`https://wa.me/5599999999999?text=${encodeURIComponent(
          "Olá! Gostaria de saber mais sobre a Dieta.AI."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 bg-[#00bf63] hover:bg-[#009e52] text-white rounded-full shadow-lg flex items-center justify-center w-16 h-16 transition-all duration-300"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <i className="fab fa-whatsapp text-4xl" />
      </a>
    </div>
  );
}

export default App;
