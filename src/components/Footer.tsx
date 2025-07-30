const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    
    const quickLinks = [
      { label: "Quem Sou", href: "#quem-sou" },
      { label: "Serviços", href: "#servicos" },
      { label: "Formações", href: "#formacoes" },
      { label: "Certificados", href: "#certificados" },
      { label: "Contato", href: "#contato" },
    ];
  
    const contactInfo = [
      { label: "Email", value: "kaique@example.com" },
      { label: "Telefone", value: "+55 (11) 99999-9999" },
      { label: "Localização", value: "São Paulo, SP" },
    ];
  
    const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    return (
      <footer className="py-16 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <div className="text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                Kaique Vieira
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Desenvolvedor especializado em criar soluções digitais inovadoras. 
                Transformando ideias em realidade através de código limpo, design intuitivo 
                e tecnologias modernas.
              </p>
              <p className="text-muted-foreground text-sm">
                Comprometido com a excelência em cada projeto.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Navegação Rápida
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
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
  
            {/* Contact Info */}
            <div className="text-left">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Informações de Contato
              </h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="text-sm">
                    <span className="text-primary font-medium">{info.label}:</span>
                    <span className="text-muted-foreground ml-2">{info.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border/30">
                <p className="text-muted-foreground text-sm">
                  Disponível para novos projetos e parcerias
                </p>
              </div>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="pt-8 border-t border-border/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-left">
                <p className="text-muted-foreground text-sm">
                  © {currentYear} Kaique Vieira. Todos os direitos reservados.
                </p>
                <p className="text-muted-foreground text-xs mt-1">
                  Desenvolvido com React, TypeScript e Tailwind CSS
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-muted-foreground text-xs">
                  Versão 1.0 - Última atualização: Janeiro 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;