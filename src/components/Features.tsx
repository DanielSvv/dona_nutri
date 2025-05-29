import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <section className="bg-[#00bf63] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Side */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full flex justify-center">
              <div
                className="rounded-3xl shadow-2xl overflow-hidden bg-black max-w-[360px] w-full"
                style={{ aspectRatio: "9/16" }}
              >
                <iframe
                  width="360"
                  height="640"
                  src="https://www.youtube.com/embed/RfQSHUDb4hU?rel=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  style={{ minHeight: "400px", background: "black" }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Adicione refeições com áudios e textos
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Envie áudios ou textos sobre suas refeições e nossa IA reconhece
              os alimentos, incluindo produtos industrializados.
            </p>
            <Button
              variant="outline"
              size="large"
              className="border-white bg-white text-[#00bf63] hover:bg-white hover:text-[#009e52] font-bold transition-colors"
              onClick={() => {
                const el = document.getElementById("planos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-white/5 -top-32 -left-32 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-white/5 -bottom-48 -right-48 animate-pulse-slower"></div>
      </div>
    </section>
  );
};

export default Features;
