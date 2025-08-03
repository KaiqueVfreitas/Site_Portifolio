import { useState, useEffect, useContext, useRef } from "react";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import { NavPagContext, subFormacoes } from "@/hooks/contents/NavPagContext";
import { sub } from "date-fns";
import Curriculo from "@/assets/docs/Kaique Vieira de Freitas - Currículo.pdf";

const Header = () => {
   const navPag = useContext(NavPagContext);

   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const [showDropdown, setShowDropdown] = useState(false);
   const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

   const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const scrollToSection = (href: string) => {
      const element = document.querySelector(href);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
         setIsOpen(false);
         setMobileDropdownOpen(false);
      }
   };

   return (
      <nav
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
               ? "bg-background/95 backdrop-blur-md border-b border-border shadow-xl shadow-background/20"
               : "bg-transparent"
         }`}
      >
         <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
               {/* Logo */}
               <div
                  className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent cursor-pointer"
                  onClick={() => scrollToSection("#quem-sou")}
               >
                  Kaique Vieira
               </div>

               {/* Desktop Menu */}
               <div className="hidden md:flex space-x-8 items-center">
                  {navPag.map((item) => (
                     <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                     >
                        {item.label}
                     </button>
                  ))}

                  {/* Formações dropdown manual */}
                  <div
                     className="relative"
                     onMouseEnter={() => {
                        if (dropdownTimeout.current)
                           clearTimeout(dropdownTimeout.current);
                        setShowDropdown(true);
                     }}
                     onMouseLeave={() => {
                        dropdownTimeout.current = setTimeout(() => {
                           setShowDropdown(false);
                        }, 180);
                     }}
                  >
                     <button className="flex items-center text-foreground hover:text-primary transition-colors duration-300 font-medium">
                        <a>Formações</a>
                        <ChevronDown
                           size={14}
                           className={`ml-1 text-muted-foreground transition-transform duration-300 ${
                              showDropdown ? "rotate-180" : ""
                           }`}
                        />
                     </button>
                     {showDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-md shadow-lg z-50 animate-fade-in-down">
                           {subFormacoes.map((subItem) => (
                              <button
                                 key={subItem.href}
                                 onClick={() => scrollToSection(subItem.href)}
                                 className="w-full flex items-center gap-2 px-4 py-2 text-foreground hover:bg-muted/40 transition-all duration-200"
                              >
                                 <subItem.icon
                                    size={16}
                                    className="text-muted-foreground"
                                 />
                                 {subItem.label}
                              </button>
                           ))}
                        </div>
                     )}
                  </div>
                  <a
   href={Curriculo}
   target="_blank"
   rel="noopener noreferrer"
   className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
>
   Currículo
</a>
               </div>

               {/* Botão Hamburguer */}
               <button
                  className="md:hidden p-2 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card transition-all duration-300"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <X size={20} /> : <AlignJustify size={20} />}
               </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
               <div className="md:hidden mt-4 p-6 bg-card/95 backdrop-blur-md rounded-lg border border-border animate-fade-in-down">
                  <div className="flex flex-col space-y-4">
                     {navPag.map((item) => (
                        <button
                           key={item.href}
                           onClick={() => scrollToSection(item.href)}
                           className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                        >
                           {item.label}
                        </button>
                     ))}

                     {/* Formações - Mobile Dropdown */}
                     <div className="flex flex-col space-y-2">
                        <button
                           onClick={() =>
                              setMobileDropdownOpen(!mobileDropdownOpen)
                           }
                           className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 flex items-center justify-between"
                        >
                           Formações
                           <ChevronDown
                              size={16}
                              className={`text-muted-foreground transition-transform duration-300 ${
                                 mobileDropdownOpen ? "rotate-180" : ""
                              }`}
                           />
                        </button>
                        {mobileDropdownOpen && (
                           <div className="pl-4 flex flex-col space-y-2 animate-fade-in-down">
                              {subFormacoes.map((subItem) => (
                                 <button
                                    key={subItem.href}
                                    onClick={() =>
                                       scrollToSection(subItem.href)
                                    }
                                    className="flex items-center gap-2 text-left text-muted-foreground hover:text-primary transition-all duration-200 text-sm"
                                 >
                                    <subItem.icon
                                       size={16}
                                       className="text-muted-foreground"
                                    />
                                    {subItem.label}
                                 </button>
                              ))}
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Header;
