import React, { useState } from "react";
import { ChevronRight, Globe } from "lucide-react";
import Button from "./Button";
import logoaiImg from "../assets/images/logoai.png";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/5561985569435";

  const handleMenuClick = () => setMenuOpen(true);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="w-full py-4 px-4 md:px-12 lg:px-20 sticky top-0 z-50 bg-white shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between min-h-[80px]">
        <img src={logoaiImg} alt="Logo Dieta.AI" className="h-16 w-auto" />
        {/* Texto centralizado apenas no mobile */}
        <span className="block md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-[#00bf63] select-none pointer-events-none">
          Dona Nutri A.I
        </span>

        <nav className="hidden md:flex items-center space-x-16 text-3xl font-bold">
          <a
            href="#recursos"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("recursos");
            }}
            className="flex items-center text-gray-700 hover:text-gray-900 text-sm cursor-pointer"
          >
            <span className="mr-1">🧠</span> Funcionalidades
          </a>
          <a
            href="#planos"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("planos");
            }}
            className="flex items-center text-gray-700 hover:text-gray-900 text-sm cursor-pointer"
          >
            <span className="mr-1">💰</span> Preço
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-gray-900 text-sm"
          >
            <span className="mr-1">🔆</span> White Label{" "}
            <ChevronRight className="h-4 w-4" />
          </a>

          <div className="flex items-center ml-8">
            <Globe className="h-8 w-8 mr-4" />
            <span className="mr-2 text-3xl">🇧🇷</span>
          </div>
        </nav>

        <div className="flex items-center space-x-8">
          <Button
            variant="primary"
            className="hidden md:block py-4 px-10 text-lg"
            onClick={() => scrollToId("planos")}
          >
            Assinar agora
          </Button>
          <button className="md:hidden text-gray-700" onClick={handleMenuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fundo escurecido */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={handleCloseMenu}
          ></div>
          {/* Drawer */}
          <div className="ml-auto w-72 max-w-full h-full bg-white shadow-2xl flex flex-col p-8 gap-6 animate-slide-in-right relative">
            <button
              className="absolute top-4 right-4 text-gray-700 text-3xl"
              onClick={handleCloseMenu}
              aria-label="Fechar menu"
            >
              ×
            </button>
            <a
              href="#recursos"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("recursos");
                handleCloseMenu();
              }}
              className="text-gray-700 text-lg font-bold py-2 hover:text-[#00bf63]"
            >
              🧠 Funcionalidades
            </a>
            <a
              href="#planos"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("planos");
                handleCloseMenu();
              }}
              className="text-gray-700 text-lg font-bold py-2 hover:text-[#00bf63]"
            >
              💰 Preço
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCloseMenu}
              className="text-gray-700 text-lg font-bold py-2 hover:text-[#00bf63] flex items-center"
            >
              🔆 White Label <ChevronRight className="h-4 w-4 ml-1" />
            </a>
            <a
              href="#"
              className="text-gray-700 text-lg font-bold py-2 hover:text-[#00bf63]"
              onClick={(e) => {
                e.preventDefault();
                alert("Em Breve");
                handleCloseMenu();
              }}
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
