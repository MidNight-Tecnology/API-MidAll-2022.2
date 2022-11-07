import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AlterarAssoc from "./pages/AlterarAssoc";
import AlterarEmail from "./pages/AlterarEmail";
import CadastroAssoc from "./pages/CadastroAssoc/antigo";
import Clipping from "./pages/Clipping";
import Relatorio from "./pages/Relatorio";
import GerencAssoc from "./pages/GerencAssoc";
import Sender from "./pages/Clipping/sender";
import { AuthProvider, AuthContext } from "./contexts/auth";

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
                <AlterarEmail />
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
            path="/relatorio"
            element={
              <Private>
                <Relatorio />
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
            path="/sender"
            element={
              <Private>
                <Sender />
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
