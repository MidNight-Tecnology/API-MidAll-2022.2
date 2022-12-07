import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AlterarAssoc from "./pages/AlterarAssoc";
import CadastroAssoc from "./pages/CadastroAssoc/antigo";
import Clipping from "./pages/Clipping";
import GerencAssoc from "./pages/GerencAssoc";
import EmailPdf from "./pages/Alternativa/alternativo";
import { AuthProvider, AuthContext } from "./contexts/auth";
import { Teste } from "./pages/teste";

const Rotas = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading">Carregando...</div>;
    }
    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mod" element={<Teste />} />
          <Route
            path="/alterassoc/:id"
            element={
              <Private>
                <AlterarAssoc />
              </Private>
            }
          />
          <Route
            path="/alteremail/:id"
            element={
              <Private>
                <EmailPdf />
              </Private>
            }
          />
          <Route
            path="/cadassoc"
            element={
              <Private>
                <CadastroAssoc />
              </Private>
            }
          />
          <Route
            path="/clip"
            element={
              <Private>
                <Clipping />
              </Private>
            }
          />
          <Route
            path="/gerencassoc"
            element={
              <Private>
                <GerencAssoc />
              </Private>
            }
          />
          <Route
            path="*"
            element={
                <Login />
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Rotas;
