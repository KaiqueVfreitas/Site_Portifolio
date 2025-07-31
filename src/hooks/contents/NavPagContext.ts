import { createContext } from "react";

export interface NavItem {
  href: string;
  label: string;
}

export const navPag: NavItem[] = [
  { href: "#quem-sou", label: "Sobre-mim" },
  { href: "#servicos", label: "Serviços" },
  { href: "#formacoes", label: "Formações" },
  { href: "#certificados", label: "Certificados" },
  { href: "#cursos", label: "Extracurriculares" },
  { href: "#contato", label: "Entre em Contato" },
];

export const NavPagContext = createContext<NavItem[]>([]);
