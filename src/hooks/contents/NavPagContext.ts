import { createContext } from "react";

import {
   GraduationCap,
   Wrench,
   Award,
   Book,
   LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string,
  label: string,
  icon?: LucideIcon,
}

export const navPag: NavItem[] = [
  { href: "#quem-sou", label: "Sobre-mim" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Entre em Contato" },
  { href: "#experiencia", label: "Atuação Profissional" },
];

export const subFormacoes: NavItem[] = [
  { href: "#formacoes", label: "Superior", icon: GraduationCap },
  { href: "#formacoes", label: "Técnico", icon: Wrench },
  { href: "#certificados", label: "Certificados", icon: Award },
  { href: "#cursos", label: "Extracurriculares", icon: Book },
];

export const NavPagContext = createContext<NavItem[]>([]);
