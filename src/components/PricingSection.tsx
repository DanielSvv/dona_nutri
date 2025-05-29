import React from "react";

const plans = [
  {
    title: "Mensal",
    price: "R$29,90",
    subtitle: "Pagamento mensal",
    discount: "R$0 de DESCONTO",
    features: [
      "Acesso a todas as funcionalidades",
      "Dashboard em Breve",
      "Dona Nutri no WhatsApp",
      "Suporte prioritário",
      "Sem compromisso",
    ],
    button: "Começar Agora",
    highlight: false,
    value: false,
  },
  {
    title: "Semestral",
    price: "R$24,83",
    subtitle: "R$149,00 à vista",
    pricePerMonth: "/mês",
    discount: "+R$30,40 de DESCONTO",
    features: [
      "Acesso a todas as funcionalidades",
      "Dashboard em Breve",
      "Dona Nutri no WhatsApp",
      "Suporte prioritário",
      "Sem compromisso",
    ],
    button: "Começar Agora",
    highlight: true,
    value: false,
  },
  {
    title: "Anual",
    price: "R$20,75",
    subtitle: "R$249,00 à vista",
    pricePerMonth: "/mês",
    discount: "+R$109,80 de DESCONTO",
    features: [
      "Acesso a todas as funcionalidades",
      "Dashboard em Breve",
      "Dona Nutri no WhatsApp",
      "Suporte prioritário",
      "Sem compromisso",
    ],
    button: "Começar Agora",
    highlight: false,
    value: true,
  },
];

const PricingSection = () => {
  return (
    <section
      id="planos"
      className="w-full py-24 bg-[#00bf63] relative overflow-hidden"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-[#00bf63]/10 rounded-full blur-3xl -top-40 -left-40 animate-pulse-slower"></div>
        <div className="absolute w-[500px] h-[500px] bg-[#00bf63]/10 rounded-full blur-3xl -bottom-40 -right-40 animate-pulse-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 text-white">
          Escolha apenas a forma de pagamento que melhor se adapta a você.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mt-12">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative bg-white/95 rounded-3xl shadow-xl flex-1 max-w-lg mx-auto flex flex-col items-center px-10 py-12 border-2 transition-all duration-300 min-w-[280px] md:min-w-[340px] lg:min-w-[380px] ${
                plan.highlight
                  ? "border-[#00bf63] shadow-2xl scale-105 z-10"
                  : plan.value
                  ? "border-green-400"
                  : "border-white/60"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00bf63] text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
                  Mais Popular
                </span>
              )}
              {plan.value && (
                <span className="absolute -top-5 right-6 bg-green-400 text-white text-sm font-bold px-6 py-2 rounded-full shadow-md">
                  Melhor Valor
                </span>
              )}
              <h3 className="text-3xl font-bold mb-3 text-gray-900">
                {plan.title}
              </h3>
              <div className="text-5xl font-extrabold text-[#00bf63] mb-2 flex items-end">
                {plan.price}
                {plan.pricePerMonth && (
                  <span className="text-2xl font-medium text-gray-600 ml-1">
                    {plan.pricePerMonth}
                  </span>
                )}
              </div>
              <div className="text-gray-500 mb-3 text-lg">{plan.subtitle}</div>
              <div className="mb-6">
                <span className="inline-block bg-green-100 text-green-600 font-bold rounded-full px-6 py-2 text-base">
                  {plan.discount}
                </span>
              </div>
              <ul className="text-gray-700 text-lg mb-8 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-3 last:mb-0">
                    <span className="text-green-500 mr-3 text-2xl">✔</span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              {plan.title === "Mensal" && (
                <a
                  href="https://pay.kiwify.com.br/IspSU41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block py-4 text-lg font-bold rounded-full text-center shadow-lg transition mt-2
                    bg-[#00bf63] text-white hover:bg-[#009e52]`}
                >
                  Assinar
                </a>
              )}
              {plan.title === "Semestral" && (
                <a
                  href="https://pay.kiwify.com.br/HLgGRBf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block py-4 text-lg font-bold rounded-full text-center shadow-lg transition mt-2
                    bg-[#00bf63] text-white hover:bg-[#009e52]`}
                >
                  Assinar
                </a>
              )}
              {plan.title === "Anual" && (
                <a
                  href="https://pay.kiwify.com.br/T8lV952"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full block py-4 text-lg font-bold rounded-full text-center shadow-lg transition mt-2
                    bg-[#00bf63] text-white hover:bg-[#009e52]`}
                >
                  Assinar
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
