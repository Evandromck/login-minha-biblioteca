import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fundo from "../img/NovaSenha.png";

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

    e.preventDefault(); //comparando o comportamento padrão

    console.log(formData);
  };

  const Container = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #94b1cd;
      margin-right: 15%;
      font-weight: bold;
      font-size: 100%;
    }

    form {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-right: 25px;
      margin-top: 5%;
      padding: 10px 14px;
    }
    Button {
      background-color: #0c354b;
    }

    text {
      text-transform: lowercase;
    }
    footer {
      text-align: center;
    }
  `;
  return (
    <Container>
      <img src={fundo} alt="Alguma coisa" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 0.9, width: "35%" },
        }}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <span>
          <em>Recuperar senha</em>
        </span>

        <TextField
          required
          id="password"
          placeholder="DIGITE A NOVA SENHA"
          type="password"
        />

        <TextField
          required
          id="password"
          placeholder="CONFIRME A NOVA SENHA"
          type="password"
        />

        <Button
          sx={{ width: "35%", margin: "1.5%" }}
          size="medium"
          variant="contained"
          disableElevation
        >
          <text>
            <i>
              <b>cadastrar</b>
            </i>
          </text>
        </Button>
        <footer>
          <i>
            <b>Memorize a sua nova senha!</b>
          </i>
        </footer>
      </Box>
    </Container>
  );
}
