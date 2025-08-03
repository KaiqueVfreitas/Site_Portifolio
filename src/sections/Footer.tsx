import { useContext } from "react";
import { NavPagContext } from "@/hooks/contents/NavPagContext";
import { ContactContext } from "@/hooks/contents/ContactContext";


const Footer = () => {
    const infoContato = useContext(ContactContext);
    const navPag = useContext(NavPagContext);
  
    {/*Ano que está no copy do footer*/ }
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    interface TxtFinal {
      ttl?: string;
      paragraph1?: string;
      paragraph2?: string;
      paragraph3?: string;
    }
    const txtFinal : TxtFinal []= [
      {
        ttl: "Kaique Vieira",
        paragraph1: "Desenvolvedor especializado em criar soluções digitais inovadoras. Transformando ideias em realidade através de código limpo, design intuitivo e tecnologias modernas.",
        paragraph2: "Comprometido com a excelência em cada projeto, e dedicação dia após dia para aprimorar minhas habilidades e oferecer soluções excepcionais.",
      }
    ];

    interface VersaoProjeto{
      version: string,
      dataVersion: string,
      techUse: string,
    }

    const versaoProjeto: VersaoProjeto [] = [ {
      version: "Versão 5.0.0",
      dataVersion: "Última atualização: Agosto de 2025",
      techUse: "Desenvolvido com React, TypeScript e Tailwind CSS",
    } ];


    return (
      <footer className="py-16 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
              {txtFinal.map((info, index) => (
                <div key={`title-${index}`} className="text-left">
                <h3 
                className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {info.ttl}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {info.paragraph1}
                </p>
                <p className="text-muted-foreground text-sm">
                   {info.paragraph2}
                </p>
                </div>
              ))}
           
  
      
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Navegação Rápida
              </h4>
              <div className="space-y-3">
                {navPag.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
  
           
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Informações de Contato
              </h4>
              <div className="space-y-3">
                {infoContato.map((info, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-primary font-medium">{info.label}:</span>
                    <span className="text-muted-foreground ml-2">{info.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border/30">
          {versaoProjeto.map((info, index) => (
              <div 
                key={`title-${index}`}
                className="flex flex-col md:flex-row justify-between items-center gap-4">
              
                <div className="text-left">
                  <p className="text-muted-foreground text-sm">
                    © {currentYear} Kaique Vieira. Todos os direitos reservados.
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-muted-foreground text-xs">
                    {info.version} - {info.dataVersion}
                  </p>
                </div>
              </div>
              ))}
            
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;