import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { InfoProvider } from "@/providers/InfoProvider";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*InfoProvider centraliza os dados globais do site*/}
    <InfoProvider>
    <App />
    </InfoProvider>
  </StrictMode>,
)
