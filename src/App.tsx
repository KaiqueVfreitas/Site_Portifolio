import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { TooltipProvider } from "@/components/ui/tooltip";
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InfoProvider } from "@/providers/InfoProvider";
const queryClient = new QueryClient();
function App() {

  return (
    <>
    {/*InfoProvider centraliza os dados globais do site*/}
    <InfoProvider> 
{/*Hashrouter, pois o projeto ficará no GitHub Pages*/}
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
    </QueryClientProvider>
    </InfoProvider>
    
      
    </>
  )
}

export default App
