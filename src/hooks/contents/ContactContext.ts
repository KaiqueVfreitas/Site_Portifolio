import { createContext } from "react";
import { Mail, Phone, MapPin } from "lucide-react";


/*HREF, vai se manter opcional, enquanto todas as redes sociais que pretendo ter não forem criadas*/
export interface ContactInfo {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string; 
}

export const infoContato: ContactInfo[] = [
  {
    icon: Mail,
    label: "Gmail",
    value: "kaiquevieiraffreitas@gmail.com",
    href: "mailto:kaiquevieiraffreitas@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "+55 (11) 93315 6578",
    href: "tel:+5511933156578",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Osasco, São Paulo, Brasil",
  },
];

export const ContactContext = createContext<ContactInfo[]>([]);
