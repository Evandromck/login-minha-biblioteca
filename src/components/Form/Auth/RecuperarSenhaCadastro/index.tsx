import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import fundo from "../SignIn/image.png";

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
      position: absolute;
      margin-right: 25px;
    }
  `;
  return (
    <Container>
      <img src={fundo} alt="Alguma coisa" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35%" },
        }}
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div className="text">
          <em>
            <b>Login</b>
          </em>
        </div>

        <TextField required id="email" label="E-MAIL" placeholder="E-MAIL" />

        <TextField
          required
          id="password"
          label="SENHA"
          placeholder="SENHA"
          type="password"
        />
        <Button
          sx={{ width: "35%", margin: "1.5%" }}
          size="medium"
          variant="contained"
          disableElevation
        >
          <div className="text2">
            <em>
              <b>entrar</b>
            </em>
          </div>
        </Button>
      </Box>
    </Container>
  );
}
