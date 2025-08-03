import { useRef, useState, useEffect } from "react";
import { Award } from "lucide-react";

const ProfessionalCertifications = () => {
  const certificates = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "CISCO",
      date: "Em andamento",
      link: "https://learningnetwork.cisco.com/s/ccna",
    },
    {
      title: "Certified Tester Foundation Level (CTFL)",
      issuer: "International Software Testing Qualifications Board (ISTQB)",
      date: "Em andamento",
      link: "https://bstqb.online/ctfl",
    },
    {
      title: "Microsoft Associate Azure AI-900",
      issuer: "Microsoft Associate Azure",
      date: "Válido até Setembro de 2027 - Credenciais: 90088427",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/?practice-assessment-type=certification",
    },
    {
      title: "Microsoft Associate Azure AZ-900",
      issuer: "Microsoft Associate Azure",
      date: "Válido até Setembro de 2027 - Credenciais: 90088427",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification",
    },
    {
      title: "Medalhista Bronze",
      issuer: "Olimpíada Brasileira de Matemática das Escolas Públicas",
      date: "Dezembro de 2020",
      link: "http://obmep.org.br/",
    },
    {
      title: "Medalhista de Prata ",
      issuer: "Olimpíadas de Matemática das Escolas Públicas de São Paulo",
      date: "Outubro de 2024",
      link: "https://olimpiadassp.educacao.sp.gov.br/omasp/",
    },
    {
      title: "Medalhista de Ouro",
      issuer: "Olimpíadas de Redação de São Paulo",
      date: "Outubro de 2024",
      link: "https://atendimento.educacao.sp.gov.br/knowledgebase/article/SED-07930/pt-br",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalGroups = 3; // fixo em 3 como você pediu

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;

    const newIndex = Math.round(scrollLeft / width);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-spacing" id="certificados">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold m-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certificados
          </h2>
          <p className="text-xl text-muted-foreground">
            Certificações que comprovam expertise em tecnologias específicas
          </p>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-[80%] sm:w-[50%] md:w-[25%] flex-shrink-0 snap-start px-3"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 h-full bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center cursor-pointer hover:scale-[1.02] flex flex-col justify-between"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary text-sm font-medium mb-1">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground text-sm">{cert.date}</p>
              </a>
            </div>
          ))}
        </div>

        {/* Indicadores de bolinha */}
        <div className="flex justify-center mt-6 space-x-3">
          {[...Array(totalGroups)].map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary scale-110" : "bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCertifications;
