import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fundo from "../img/Login.png";

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
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-right: 25px;
      margin-top: 6%;
      padding: 10px 14px;
    }
    Button {
      background-color: #0c354b;
    }

    text {
      text-transform: lowercase;
    }
    sub {
      color: #969faa;
      font-weight: bold;
      font-size: 100%;
      text-align: center;
    }

    footer {
      color: #0c354b;
      margin-right: 0%;
      font-weight: bold;
      font-size: 100%;
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
          placeholder="DIGITE O SEU E-MAIL"
          type="email"
        />

        <TextField
          required
          id="password"
          placeholder="CONFIRME O SEU E-MAIL"
          type="email"
        />

        <Button
          sx={{ width: "35%", margin: "1.5%" }}
          size="medium"
          variant="contained"
          disableElevation
        >
          <text>
            <i>
              <b>recuperar</b>
            </i>
          </text>
        </Button>
        <sub>
          <em>Confira o seu e-mail</em>
        </sub>

        <footer>
          <em>
            Uma mensagem será enviada com
            <br /> o link para realizar a mudança de senha.
          </em>
        </footer>
      </Box>
    </Container>
  );
}
