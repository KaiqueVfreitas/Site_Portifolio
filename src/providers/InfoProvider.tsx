import { ReactNode } from "react";
import { NavPagContext, navPag } from "@/hooks/contents/NavPagContext";
import { ContactContext, infoContato } from "@/hooks/contents/ContactContext";
import { SocialMediaContext, redesSociais } from "@/hooks/contents/SocialMediaContext";

interface Props {
  children: ReactNode;
}

export function InfoProvider({ children }: Props) {
  return (
    <NavPagContext.Provider value={navPag}>
      <ContactContext.Provider value={infoContato}>
        <SocialMediaContext.Provider value={redesSociais}>
          {children}
        </SocialMediaContext.Provider>
      </ContactContext.Provider>
    </NavPagContext.Provider>
  );
}
