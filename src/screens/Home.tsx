import React from "react";
import styled from "styled-components";
import createGlobalStyle from "../styles/globol";
//import UsersGrid from "../components/usersGrid";
import SignIn from "../components/Form/Auth/Login";

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
      <SignIn />
    </Container>
  );
}
