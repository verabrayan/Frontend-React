import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fundamentos from './pages/Fundamentos'
import GotAPI from './pages/GotAPI'


const App = ()=>{
  return <>
  <header>
    header
  </header>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Fundamentos/>} />
      <Route path="/got" element={<GotAPI/>} />
    </Routes>

  </BrowserRouter>
  <footer>
    footer
  </footer>
  </>
}

export default App