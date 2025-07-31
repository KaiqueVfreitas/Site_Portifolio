import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Info, navPag } from '@/hooks/contents/NavPagContext.ts';
import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*Info é o hook que contém os dados do site*/}
    <Info.Provider value={navPag}>
      <App />
    </Info.Provider>
   
  </StrictMode>,
)
