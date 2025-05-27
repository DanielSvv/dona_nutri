import React, { useState, useEffect } from "react";
import { Image, Dumbbell, Droplet, GlassWater, Brain } from "lucide-react";
// Importação das imagens
import aguaImg from "../assets/images/agua.jpeg";
import celularImg from "../assets/images/celular.jpeg";
import logoaiImg from "../assets/images/logoai.png";
// Adicione mais imports conforme necessário

const features = [
  {
    icon: <Image className="w-12 h-12" />,
    image: celularImg,
    title: "Cadastro de Refeições Inteligente",
    description:
      "Envie fotos, áudios ou mensagens e deixe nossa IA entender tudo o que você consumiu. Registro prático, sem complicações.",
  },
  {
    icon: <Droplet className="w-12 h-12" />,
    image: aguaImg,
    title: "Hidratação no Ponto",
    description:
      "Defina sua meta diária de água e registre o quanto já bebeu. Acompanhe seu progresso sem sair do WhatsApp.",
  },
  {
    icon: <Dumbbell className="w-12 h-12" />,
    image: logoaiImg,
    title: "Registro de Atividades Físicas ",
    description: "EM BREVE",
  },
  {
    icon: <GlassWater className="w-12 h-12" />,
    image: logoaiImg,
    title: "Histórico Completo - EM BREVE",
    description:
      "Tudo o que você registra fica salvo. Tenha acesso a uma linha do tempo da sua evolução alimentar e física.",
  },
  {
    icon: <Brain className="w-12 h-12" />,
    image: logoaiImg,
    title: "Recomendações Personalizadas",
    description: "EM BREVE",
  },
];

const FeaturesGrid = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  useEffect(() => {
    if (!zoomedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedImage]);

  return (
    <section
      id="recursos"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#00bf63]/5 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slower"></div>
        <div className="absolute w-96 h-96 bg-[#00bf63]/5 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recursos que fazem a diferença
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como a Dieta.AI torna o acompanhamento nutricional mais
            simples e eficiente.
          </p>
        </div>

        {/* Feature Showcase */}
        <div className="relative">
          {/* Main Feature Display */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 mb-8 md:mb-12 flex flex-col items-center transform transition-all duration-500 hover:scale-[1.02]">
            <img
              src={features[activeFeature].image}
              alt={features[activeFeature].title}
              className="max-w-full h-auto mb-6 rounded-2xl object-contain cursor-zoom-in transition-transform duration-200 hover:scale-105"
              style={{ maxHeight: "340px", width: "100%" }}
              onClick={() => setZoomedImage(features[activeFeature].image)}
            />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-center">
              {features[activeFeature].title}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 text-center">
              {features[activeFeature].description}
            </p>
          </div>

          {/* Modal de Zoom da Imagem */}
          {zoomedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
              onClick={() => setZoomedImage(null)}
              style={{ cursor: "zoom-out" }}
            >
              <img
                src={zoomedImage}
                alt="Zoom"
                className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl border-4 border-white"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Feature Navigation */}
          <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`p-4 md:p-5 rounded-2xl transition-all duration-300 flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#00bf63]/50
                  ${
                    activeFeature === index
                      ? "bg-[#00bf63] text-white shadow-lg scale-105 border-2 border-[#00bf63]"
                      : "bg-white text-gray-600 hover:bg-[#00bf63]/10 border border-gray-200"
                  }
                `}
                onClick={() => {
                  setActiveFeature(index);
                  setIsAutoPlaying(false);
                }}
                style={{ minWidth: 180, maxWidth: 220 }}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {feature.icon}
                </div>
                <span className="text-xs md:text-sm font-medium text-center leading-tight max-w-[120px]">
                  {feature.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
