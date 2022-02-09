import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const defaultFormData = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formData, setFormData] = useState(defaultFormData);
  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState, //mantendo as informaçoes no formulrio
      [e.target.id]: e.target.value, //compara o valor com o id
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //prepara e comportamento padrão
    console.log(formData);
  };

  const Container = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;
  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40%" },
        }}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <em>
          <b>Login</b>
        </em>
        <TextField
          required
          id="email"
          label="E-mail"
          placeholder="Digite o E-mail"
        />

        <TextField
          required
          id="password"
          label="Senha"
          placeholder="Digite a Senha"
          type="password"
        />
        <Button
          sx={{ width: "40%", margin: "1.5%" }}
          size="medium"
          variant="contained"
          disableElevation
        >
          <em>
            <b>entrar</b>
          </em>
        </Button>
      </Box>
    </Container>
  );
}
