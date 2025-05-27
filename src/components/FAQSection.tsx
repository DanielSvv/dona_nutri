import React, { useState } from "react";

const faqs = [
  {
    question: "Como funciona a assinatura?",
    answer:
      "Você escolhe o plano ideal, realiza o pagamento e recebe acesso imediato à nossa inteligência artificial especializada pelo WhatsApp, além de todas as funcionalidades da plataforma.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim! A assinatura é totalmente sem compromisso. Você pode cancelar a qualquer momento, sem multas ou taxas extras.",
  },
  {
    question: "O que é a Dona Nutri no WhatsApp?",
    answer:
      "É uma inteligência artificial especializada em nutrição. Assim que você assina, ela te chama no WhatsApp para começar a registrar suas refeições, tirar dúvidas e te acompanhar diariamente.",
  },
  {
    question: "O suporte é realmente prioritário?",
    answer:
      "Sim. Todos os assinantes têm acesso a um canal exclusivo com respostas rápidas para dúvidas e ajuda no uso da plataforma.",
  },
  {
    question: "É só para quem está fazendo dieta?",
    answer:
      "Não! A Dona Nutri ajuda em diversos objetivos: alimentação saudável, ganho de massa, emagrecimento ou apenas manter uma rotina equilibrada.",
  },
  {
    question: "O que é o 'Dashboard em Breve'?",
    answer:
      "Estamos desenvolvendo uma área exclusiva onde você poderá visualizar seu progresso, dados nutricionais e relatórios de forma visual e prática. Fique tranquilo, está chegando!",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#00bf63] mb-10">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#00bf63] rounded-2xl bg-white/80 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-[#00bf63] focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                {faq.question}
                <span
                  className={`ml-4 transition-transform ${
                    open === idx ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`px-6 pb-5 text-gray-700 text-base transition-all duration-300 ${
                  open === idx ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
