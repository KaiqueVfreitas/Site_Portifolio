import { useRef, useState, useEffect } from "react";
import { Award } from "lucide-react";

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

const ProfessionalCertifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeGroup, setActiveGroup] = useState(0);
  const totalGroups = Math.ceil(certificates.length / 4);

  // Atualiza o indicador ao rolar
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveGroup(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Navega ao clicar nos indicadores
  const scrollToGroup = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollTo({ left: index * container.clientWidth, behavior: "smooth" });
  };

  // Arrastar com o botão esquerdo do mouse
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // botão esquerdo
      isDragging = true;
      startX = e.pageX;
      scrollStart = container.scrollLeft;
      container.style.cursor = "grabbing";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.pageX - startX;
      container.scrollLeft = scrollStart - deltaX;
    };

    const onMouseUp = () => {
      isDragging = false;
      container.style.cursor = "grab";
    };

    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    container.style.cursor = "grab";

    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <section className="section-spacing" id="certificados">
      <div className="container mx-auto px-6 overflow-visible">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold m-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Certificados
          </h2>
          <p className="text-xl text-muted-foreground">
            Certificações que comprovam expertise em tecnologias específicas
          </p>
        </div>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-3 px-3 no-scrollbar overflow-visible"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="w-[80%] sm:w-[50%] md:w-[25%] px-3 flex-shrink-0 snap-start overflow-visible relative"
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 h-full bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 text-center cursor-pointer hover:scale-[1.02] flex flex-col justify-between z-10 relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.title}</h3>
                <p className="text-primary text-sm font-medium mb-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-sm">{cert.date}</p>
              </a>
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 space-x-4">
          {Array.from({ length: totalGroups }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToGroup(i)}
              aria-label={`Ir para grupo ${i + 1}`}
              className="relative w-4 h-4 rounded-full border border-muted-foreground overflow-hidden group focus:outline-none"
            >
              <span
                className={`absolute bottom-0 left-0 w-full bg-primary transition-all duration-500 ease-out ${
                  i === activeGroup ? "h-full" : "h-0 group-hover:h-full"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalCertifications;
