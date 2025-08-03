import { GraduationCap } from "lucide-react";

const GraduateComponent = () => {
   const formations = [
      {
         title: "Bacharelado em Ciência da Computação",
         institution: "Anhembi Morumbi",
         period: "2025 - 2030",
         description: "Base técnica para diferentes areas da tecnologia, abrangendo IA, cloud, cybersecurity e engenharia de software, aliando teoria à prática.",
       },
   ]
   
   return (
      <section id="formacoes" className="section-spacing bg-card/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Formações
            </h2>
            <p className="text-xl text-muted-foreground">
              Base acadêmica sólida para fundamentar a excelência profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {formation.institution}
                    </p>
                    <p className="text-muted-foreground text-sm mb-3">
                      {formation.period}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {formation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
   )
}

export default GraduateComponent