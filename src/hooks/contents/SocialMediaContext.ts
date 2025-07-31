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

export interface SocialMedia {
  icon: React.ElementType;
  label: string;
  href: string;
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
    href: "#",
    color: "hover:text-accent",
  },
  {
    icon: Hash,
    label: "Threads",
    href: "#",
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
    href: "#",
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
