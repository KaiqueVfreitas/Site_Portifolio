import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import './App.css'

function App() {

  return (
    <>
    {/*Hashrouter, pois o projeto ficará no GitHub Pages*/}
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
