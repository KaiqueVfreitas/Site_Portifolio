import { useRef, useState, useEffect } from "react";
import { Award } from "lucide-react";
import clsx from "clsx";

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

  const certificatesPerPage = 4;
  const totalGroups = Math.ceil(certificates.length / certificatesPerPage); // Corrigido

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToGroup = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const width = container.clientWidth;
    container.scrollTo({
      left: width * index,
      behavior: "smooth",
    });
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
          className={clsx(
            "flex overflow-x-auto snap-x snap-mandatory -mx-3 px-3",
            "scroll-smooth no-scrollbar relative",
            "overflow-y-hidden"
          )}
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-[80%] sm:w-[50%] md:w-[25%] flex-shrink-0 snap-start px-3"
              style={{ overflow: "visible" }} // permite hover crescer sem cortar
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 h-full bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center cursor-pointer hover:scale-[1.02] flex flex-col justify-between will-change-transform"
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

        {/* Indicadores de bolinha animados */}
        <div className="flex justify-center mt-6 space-x-4">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToGroup(i)}
              aria-label={`Ir para grupo ${i + 1}`}
              className={clsx(
                "relative w-4 h-4 rounded-full border border-muted-foreground overflow-hidden transition-all duration-300",
                "hover:border-primary focus:outline-none"
              )}
            >
              {/* Efeito "líquido enchendo" */}
              <span
                className={clsx(
                  "absolute bottom-0 left-0 w-full bg-primary transition-all duration-500 ease-out",
                  i === activeIndex ? "h-full" : "h-0 group-hover:h-full"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCertifications;
