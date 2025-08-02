import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

const ServicesSection = () => {
  const servicos = [
    {
      icon: Code,
      ttl: "Desenvolvimento Web",
      desc:
        "Transformo ideias em sites que trabalham por você: vendem, informam e organizam. Sua marca com mais visibilidade e profissionalismo.",
      exemplo:
        "Blogs que aproximam você do seu público, Landing Pages que vendem 24h por dia, e Aplicações personalizadas para controlar finanças, agenda e equipe — tudo em um só lugar.",
    },
    {
      icon: Palette,
      ttl: "UI/UX Design",
      desc:
        "Experiências visuais que encantam e retêm. Design pensado para guiar o usuário até a ação certa — e gerar resultados reais.",
      exemplo:
        "Redes sociais com identidade visual clara e impactante, Aplicativos fáceis de usar, e Sistemas com navegação fluida e atrativa até para quem não entende de tecnologia.",
    },
    {
      icon: Globe,
      ttl: "Consultoria Digital",
      desc:
        "Identifico pontos cegos e te mostro como usar tecnologia a seu favor. Menos esforço, mais vendas e processos que funcionam sozinhos.",
      exemplo:
        "Apps que automatizam emissão de nota fiscal e envio para o cliente, Sistemas de mercado que controlam todo o fluxo de vendas, e Ferramentas que centralizam atendimentos via e-mail, WhatsApp e Instagram em uma única tela.",
    },
  ];

  return (
    <section id="servicos" className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Serviços que Presto
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofereço soluções completas e personalizadas para transformar suas ideias em realidade digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.ttl}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="border-l-4 border-primary pl-4 text-sm text-muted-foreground italic">
                {service.exemplo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
