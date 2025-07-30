
import { createContext } from "react"

export type NavItem = {
  href: string
  label: string
}
/*Navegação entre as sections (Footer e Header)*/
export const navPag: NavItem[] = [
  { href: "#quem-sou", label: "Sobre-mim" },
  { href: "#servicos", label: "Serviços" },
  { href: "#formacoes", label: "Formações" },
  { href: "#certificados", label: "Certificados" },
  { href: "#cursos", label: "Extracurriculares" },
  { href: "#contato", label: "Entre em Contato" },
]




export const Info = createContext<NavItem[]>([])
