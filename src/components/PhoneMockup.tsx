import React from "react";
import celularImg from "../assets/images/celular.jpeg";

const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] md:w-[320px]">
      {/* Phone frame */}
      <div className="relative z-10 w-full aspect-[9/19] bg-black rounded-[40px] p-3 shadow-xl transform hover:rotate-1 transition-transform duration-500">
        {/* Screen */}
        <div className="bg-white h-full w-full rounded-[32px] overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="w-1/3 h-6 bg-black mx-auto rounded-b-xl"></div>
          {/* Imagem do celular */}
          <img
            src={celularImg}
            alt="Celular com Dieta.AI"
            className="flex-1 object-cover w-full h-full"
          />
        </div>
      </div>
      {/* Shadow/reflection effect */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[20px] bg-black/20 rounded-full blur-lg z-0"></div>
    </div>
  );
};

export default PhoneMockup;
