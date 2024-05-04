import React from "react"
import SideNav from "./components/sideNav/SideNav"
import { Routes,Route } from "react-router-dom"
import PaginaInicial from "./components/pages/paginaInicial/PaginaInicial"
import Produtos from "./components/pages/Produtos/Produtos"






function App() {

  return <>
          <SideNav />
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/produtos" element={<Produtos />} />

          </Routes>
      </>
  
}

export default App
