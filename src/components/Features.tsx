import React from 'react';
import Button from './Button';

const Features = () => {
  return (
    <section className="bg-[#00bf63] py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Video Side */}
          <div className="lg:w-1/2">
            <div className="relative aspect-video bg-black/10 rounded-2xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-[#00bf63] border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 text-white text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Adicione refeições com áudios e textos
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Envie áudios ou textos sobre suas refeições e nossa IA reconhece os alimentos, incluindo produtos industrializados.
            </p>
            <Button 
              variant="outline" 
              size="large"
              className="border-white text-white hover:bg-white hover:text-[#00bf63]"
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