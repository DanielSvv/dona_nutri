import React from "react";

const whatsappNumber = "5599999999999"; // Substitua pelo número real
const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre a Dieta.AI."
);
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const ContactSection = () => {
  return (
    <section className="w-full py-16 bg-[#00bf63] flex flex-col items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl px-8 py-12 max-w-xl w-full flex flex-col items-center">
        <i className="fab fa-whatsapp text-[#00bf63] text-6xl mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
          Fale conosco agora mesmo
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-8 text-center">
          Nossa equipe está pronta para atender você e esclarecer todas as suas
          dúvidas sobre o Mordomize.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#00bf63] hover:bg-[#009e52] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300"
        >
          <i className="fab fa-whatsapp text-2xl" />
          Conversar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
