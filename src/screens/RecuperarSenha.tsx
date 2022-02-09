import React from "react";
import styled from "styled-components";
import createGlobalStyle from "../styles/globol";
//import UsersGrid from "../components/usersGrid";
import RecuperarSenha from "../components/Form/Auth/RecuperarSenha";

const GlobalStyle = createGlobalStyle;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export default function Login() {
  return (
    <Container>
      <GlobalStyle />
      <RecuperarSenha />
    </Container>
  );
}
