import React from "react";
import Button from "./Button";
import FoodBackground from "./FoodBackground";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <main className="flex-1 relative overflow-hidden">
      <FoodBackground />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              Tenha sua alimentação controlada com inteligência artificial e a
              praticidade do{" "}
              <span className="text-[#00bf63] animate-pulse">WhatsApp</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in">
              Controle sua dieta, acompanhe nutrientes e alcance seus objetivos
              com nossa IA que funciona diretamente no WhatsApp.
            </p>
            <Button
              variant="primary"
              size="large"
              className="py-5 px-16 text-2xl font-extrabold bg-gradient-to-r from-[#00bf63] via-[#00e676] to-[#00bf63] shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 animate-glow"
              onClick={() => {
                const el = document.getElementById("planos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Assinar agora
            </Button>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
