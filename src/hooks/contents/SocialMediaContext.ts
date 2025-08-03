import { createContext } from "react";
import {
  Instagram,
  Linkedin,
  Hash,
  X,
  MessageCircle,
  Mic,
  Send,
} from "lucide-react";
/*HREF, vai se manter opcional, enquanto todas as redes sociais que pretendo ter não forem criadas*/
export interface SocialMedia {
  icon: React.ElementType;
  label: string;
  href?: string;
  color: string;
}

export const redesSociais: SocialMedia[] = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kaiquevfreita/",
    color: "hover:text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kaique-vieira-freitas/",
    color: "hover:text-accent",
  },
  {
    icon: Hash,
    label: "Threads",
    href: "https://www.threads.net/@kaiquevfreita",
    color: "hover:text-primary",
  },
  {
    icon: X,
    label: "X (Twitter)",
    href: "#",
    color: "hover:text-accent",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    href: "#",
    color: "hover:text-primary",
  },
  {
    icon: Mic,
    label: "Medium",
    href: "#",
    color: "hover:text-accent",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "http://wa.me/5511933156578",
    color: "hover:text-primary",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "#",
    color: "hover:text-primary",
  },
];

export const SocialMediaContext = createContext<SocialMedia[]>([]);
