import React from "react";

const GuaranteeSection = () => {
  return (
    <section className="w-full flex justify-center py-12 px-2">
      <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-50 rounded-3xl shadow-lg px-8 py-8 max-w-3xl w-full">
        {/* Ícone de escudo com check */}
        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-[#00bf63]/10">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="48"
              height="48"
              rx="24"
              fill="#00bf63"
              fillOpacity="0.15"
            />
            <path
              d="M24 8L40 14V24C40 33.5 32.5 39.5 24 44C15.5 39.5 8 33.5 8 24V14L24 8Z"
              fill="#00bf63"
            />
            <path
              d="M18 25L23 30L31 20"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Satisfação Garantida por 7 Dias
          </h3>
          <p className="text-gray-700 text-base md:text-lg">
            Experimente a Dona Nutri A.I sem riscos! Se em até <b>7 dias</b>{" "}
            você não estiver satisfeito, devolvemos <b>100% do seu dinheiro</b>.
            Cancele quando quiser, sem burocracia ou taxas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
