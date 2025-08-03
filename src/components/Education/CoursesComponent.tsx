import { useState } from "react";
import { BookOpen } from "lucide-react";

const CoursesComponent = () => {
  const courses = [
    {
      title: "Inteligência Artificial e Computacional",
      institution: "FIAP",
      year: "2025",
      hours: "80h",
      group: "IA / Dados"
    },
    {
      title: "Linux Fundamentos",
      institution: "FIAP",
      year: "2025",
      hours: "40h",
      group: "Redes / Segurança / Infra / Cloud"
    },
    {
      title: "Gestão de Infraestrutura de TI (Redes)",
      institution: "FIAP",
      year: "2025",
      hours: "20h",
      group: "Redes / Segurança / Infra / Cloud"
    },
    {
      title: "Cybersecurity",
      institution: "FIAP",
      year: "2025",
      hours: "120h",
      group: "Redes / Segurança / Infra / Cloud"
    },
    {
      title: "Cloud Fundamentals, Administration and Solution Architect",
      institution: "FIAP",
      year: "2025",
      hours: "80h",
      group: "Redes / Segurança / Infra / Cloud"
    },
    {
      title: "Business Intelligence",
      institution: "FIAP",
      year: "2025",
      hours: "40h",
      group: "IA / Dados"
    },
    {
      title: "Big Data & Analytics",
      institution: "FIAP",
      year: "2025",
      hours: "60h",
      group: "IA / Dados"
    },
    {
      title: "AWS",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "40h",
      group: "Redes / Segurança / Infra / Cloud"
    },
    {
      title: "Visual Basic for Applications (VBA)",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "90h",
      group: "Desenvolvimento / RPA / QA"
    },
    {
      title: "Python para Dados",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "120h",
      group: "IA / Dados"
    },
    {
      title: "Power Apps",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "10h",
      group: "Desenvolvimento / RPA / QA"
    },
    {
      title: "Power Automate",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "30h",
      group: "Desenvolvimento / RPA / QA"
    },
    {
      title: "Inteligência Artificial",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "60h",
      group: "IA / Dados"
    },
    {
      title: "Cloud, Nuvem e Inteligência Artificial Azure",
      institution: "SENAI",
      year: "2023",
      hours: "30h",
      group: "Redes / Segurança / Infra / Cloud"
    },
    {
      title: "Programação Web Fullstack",
      institution: "OneBitCode",
      year: "2022",
      hours: "250h",
      group: "Desenvolvimento / RPA / QA"
    },
    {
      title: "Auxiliar Administrativo",
      institution: "Microlins",
      year: "2022",
      hours: "80h",
      group: "Administração / Office"
    },
    {
      title: "Auxiliar Administrativo",
      institution: "Hashtag Treinamentos",
      year: "2024",
      hours: "80h",
      group: "Administração / Office"
    },
    {
      title: "Office 2016",
      institution: "Fundação Bradesco",
      year: "2021",
      hours: null,
      group: "Administração / Office"
    },
    {
      title: "Power BI 2016",
      institution: "Fundação Bradesco",
      year: "2021",
      hours: null,
      group: "IA / Dados"
    },
    {
      title: "Excel 2016 Avançado",
      institution: "Fundação Bradesco",
      year: "2021",
      hours: null,
      group: "Administração / Office"
    },
    {
      title: "Algoritmos",
      institution: "Curso em Vídeo",
      year: "2018",
      hours: "40h",
      group: "Desenvolvimento / RPA / QA"
    },
    {
      title: "Python",
      institution: "Curso em Vídeo",
      year: "2018",
      hours: "120h",
      group: "IA / Dados"
    },
    {
      title: "Java e Java POO",
      institution: "Curso em Vídeo",
      year: "2018",
      hours: "80h",
      group: "Desenvolvimento / RPA / QA"
    },
    {
      title: "Playwright",
      institution: "Udemy",
      year: "2025",
      hours: "60h",
      group: "Desenvolvimento / RPA / QA"
    }
  ];

  const [activeGroup, setActiveGroup] = useState("Desenvolvimento / RPA / QA");

  const groups = ["Todos", ...new Set(courses.map(c => c.group))];

  const filteredCourses =
  activeGroup === "Todos"
    ? [...courses].sort((a, b) => Number(b.year) - Number(a.year))
    : courses
        .filter(course => course.group === activeGroup)
        .sort((a, b) => Number(b.year) - Number(a.year));

  return (
    <section id="cursos" className="section-spacing bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cursos Extracurriculares
          </h2>
          <p className="text-xl text-muted-foreground">
            Aprendizado contínuo em tendências e tecnologias emergentes
          </p>
        </div>

        {/* Filtros por grupo */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {groups.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveGroup(group)}
              className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                activeGroup === group
                  ? "bg-primary text-white border-primary"
                  : "bg-card border-border text-muted-foreground hover:bg-muted"
              }`}
            >
              {group}
            </button>
          ))}
        </div>

        {/* Cursos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {course.title}
              </h3>
              <p className="text-primary text-sm font-medium mb-1">
                {course.institution}
              </p>
              <p className="text-muted-foreground text-sm">{course.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesComponent;
