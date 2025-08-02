import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from "lucide-react";
import { ContactContext } from "@/hooks/contents/ContactContext";
import { useContext } from "react";
const ContactSection = () => {
   const infoContato = useContext(ContactContext);
   return (
      <section id="contato" className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Formas de Contato
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pronto para transformar suas ideias em realidade? Entre em contato e vamos conversar sobre seu próximo projeto
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  {infoContato.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <info.icon size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">
                  Contato Rápido
                </h4>
                <div className="flex gap-4">
                  <a
                    href="mailto:kaique@example.com"
                    className="flex-1 flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Mail size={20} />
                    Email
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 border border-border bg-background hover:border-primary/50 hover:bg-primary/10 rounded-lg transition-all"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactSection;
