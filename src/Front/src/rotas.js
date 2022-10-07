import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Login from './pages/Login';
import AlterarAssoc from './pages/AlterarAssoc';
import AlterarEmail from './pages/AlterarEmail';
import CadastroAssoc from './pages/CadastroAssoc/antigo';
import Clipping from './pages/Clipping';
import GerencAssoc from './pages/GerencAssoc';

export default function Rotas() {
  return(
    
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<Login/>} />
       <Route path='/AlterAssoc' element={<AlterarAssoc/>} />
       <Route path='/AlterEmail' element={<AlterarEmail/>} />
       <Route path='/CadAssoc' element={<CadastroAssoc/>} />
       <Route path='/Clipping' element={<Clipping/>} />
       <Route path='/GerencAssoc' element={<GerencAssoc/>} />
      </Routes>
    </BrowserRouter>
  )
};