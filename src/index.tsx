import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Home";
import NovaSenha from "./screens/NovaSenha";
import NovaSenhaCadastrada from "./screens/NovaSenhaCadastrada";
import RecuperarSenha from "./screens/RecuperarSenha";
import RecuperarSenhaCadastro from "./screens/RecuperarSenhaCadastro";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="novasenha" element={<NovaSenha />} />
      <Route path="novasenhacadastrada" element={<NovaSenhaCadastrada />} />
      <Route path="recuperarsenha" element={<RecuperarSenha />} />
      <Route
        path="recuperarsenhacadastro"
        element={<RecuperarSenhaCadastro />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
