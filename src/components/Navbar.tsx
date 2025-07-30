import { useState, useEffect } from "react";
import { AlignJustify, X } from "lucide-react";

const NavBar = () => {
    {/*Ativa ou não, o menu hamburguer*/}
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    {/*Define quais setas iram aparecer conforme o scroll na tela*/}
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    {/*Passagem de mouse suavizada*/}
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      };

      const navPag = [
        { href: "#quem-sou", label: "Sobre-mim" },
        { href: "#servicos", label: "Serviços" },
        { href: "#formacoes", label: "Formações" },
        { href: "#certificados", label: "Certificados" },
        { href: "#cursos", label: "Extracurriculares" },
        { href: "#contato", label: "Entre em Contato" },
      ];

      return (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xl shadow-background/20"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
                onClick={() => scrollToSection("#quem-sou")}
              >
                Kaique Vieira
              </div>
    
              {/* MENU ABERTO-EXTENSO */}
              <div className="hidden md:flex space-x-8">
                {navPag.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
    
              {/* MENU ABERTO-QUEBRADO */}
              <button
                className="md:hidden p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card transition-all duration-300"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={20} /> : <AlignJustify size={20} />}
              </button>
            </div>
    
            {/* MENU-HAMBURGUER */}
            {isOpen && (
              <div className="md:hidden mt-4 p-6 bg-card/95 backdrop-blur-md rounded-lg border border-border">
                <div className="flex flex-col space-y-4">
                  {navPag.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      );
}

export default NavBar