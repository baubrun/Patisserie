import React from 'react'
import {BrowserRouter} from "react-router-dom"
import Header from "./components/Header"
import Propos from "./components/Propos"
import Magasin from "./components/Magasin"
import Services from "./components/Services"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Propos />
      <Magasin />
      <Services />
    </BrowserRouter>
  )
}

export default App
