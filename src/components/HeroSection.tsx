import fotoProfissional from "@/assets/img/imgKaiqueVieiraFotoComFundo.png";

interface TxtProfissional {
   ttl?: string;
   paragraph1?: string;
   paragraph2?: string;
   paragraph3?: string;
}
const txtProfissional: TxtProfissional[] = [
   {
      ttl: "Kaique Vieira",
      paragraph1:
        "Desde 2018 mergulho de forma prática no mundo da tecnologia. Comecei explorando lógica, algoritmos e programação orientada a objetos — o tipo de base que molda bons profissionais. Durante a pandemia, canalizei esse conhecimento para o desenvolvimento web com foco em NodeJS e React. Em 2021, comecei a atuar como freelancer, contribuindo em projetos de empresas.",
      paragraph2:
        "Hoje, além dos serviços como autônomo, trabalho com análise de sistemas e testes (QA), e sigo alimentando minha curiosidade técnica. No meu homelab — um servidor pessoal— desenvolvo projetos em cibersegurança e inteligência artificial, sempre em busca de evoluir e entregar mais valor em cada desafio.",
   },
];
const HeroSection = () => {
   {/*Efeito de passar o mouse em cima e aumentar levemente o tamanho do botão*/}
   const scrollToSection = (sectionId: string) => {
      const element = document.querySelector(sectionId);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section id="quem-sou" className="section-spacing fade-in">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {txtProfissional.map((item, index) => (
                  <div 
                  key={index}
                  className="order-2 lg:order-1 text-left">
                     <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                     {item.ttl}
                     </h1>
                     <div className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                        <p className="mb-4">
                        {item.paragraph1}
                        </p>
                        <p className="mb-4">
                        {item.paragraph2}
                        </p>
                        <p className="mb-4">
                           
                        </p>
                        <p>
                           
                        </p>
                     </div>
   
                     <div className="flex flex-col sm:flex-row gap-4 justify-start">
                        <button
                           onClick={() => scrollToSection("#contato")}
                           className="btn-primary"
                        >
                           Entre em Contato
                        </button>
                        <button
                           onClick={() => scrollToSection("#servicos")}
                           className="btn-secondary"
                        >
                           Serviços que Presto
                        </button>
                     </div>
                  </div>
               ))}
               

               <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="profile-gradient">
                     <img
                        src={fotoProfissional}
                        alt="Kaique Vieira"
                        className="w-96 h-96 object-cover"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
