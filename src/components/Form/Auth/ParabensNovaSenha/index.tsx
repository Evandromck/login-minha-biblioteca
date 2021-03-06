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
      color: #0c354b;
      margin-right: center;
      font-weight: bold;
      text-align: center;
    }

    form {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      margin-right: 25px;
      margin-top: 3%;
      padding: 8.5px 14px;
    }
    Button {
      background-color: #0c354b;
    }

    text {
      text-transform: none;
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
          <em>
            PARABÉNS!
            <br /> Nova senha cadastrada com sucesso.
          </em>
        </span>

        <Button
          sx={{ width: "35%", margin: "1.5%" }}
          size="medium"
          variant="contained"
          disableElevation
        >
          <text>
            <i>
              <b>Acessar a Minha Biblioteca</b>
            </i>
          </text>
        </Button>
      </Box>
    </Container>
  );
}
