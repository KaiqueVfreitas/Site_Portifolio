import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Analista de Sistemas e Testes (QA)",
      company: "DDS Informática",
      year: "2025 - Atual",
      description:
        "Responsável por validar entregas de desenvolvedores utilizando técnicas de testes caixa branca e cinza. Criação de automações com Robot Framework, integrando bibliotecas como Cypress e Playwright para acelerar processos repetitivos e garantir qualidade em múltiplas camadas do sistema.",
    },
    {
      role: "Desenvolvedor de Soluções Digitais",
      company: "DataCorp Brasil",
      year: "2021 - Atual",
      description:
        "Desenvolvo sistemas sob medida para empresas e criadores digitais, incluindo sites institucionais, blogs, landing pages e plataformas de gestão. Utilizo tecnologias como React, PHP, Electron e NodeJS para criar soluções que otimizam processos comerciais e fortalecem a presença online dos clientes.",
    },
  ];
  

  return (
    <section id="experiencia" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground">
            Vivência prática no mercado de tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <Briefcase size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {exp.role}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {exp.company}
              </p>
              <p className="text-muted-foreground text-sm mb-2">
                {exp.year}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
