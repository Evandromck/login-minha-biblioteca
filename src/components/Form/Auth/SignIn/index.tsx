import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
    e.preventDefault(); //pare o comportamento padrão
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
      <form onSubmit={onSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="email"
            label="E-mail"
            defaultValue="Hello World"
          />
          <TextField
            disabled
            id="password"
            label="password"
            defaultValue="Hello World"
          />
        </Box>
      </form>
    </Container>
  );
}

//export type AlertColor = 'success' | 'info' | 'warning' | 'error';
/*interface Message {
  severity: AlertColor;
  text: string;
  status: number;
}

export default function SignIn() {
  const [formData, setFormData] = useState(defaultFormData);
  //destructuring Assignment
  const { email, password } = formData;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | boolean>(false);

  const [message, setMessage] = useState<Message>({
    severity: "error",
    text: "",
    status: 403,
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://20.120.7.70/auth/login",
        formData
      );
      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
        //setSuccess(true);
        setMessage({
          severity: "success",
          text: "Usuário autenticado com sucesso!",
          status: 200,
        });

        setTimeout(() => {
          document.location.href = "/";
        }, 4000);
      }
    } catch (e: any) {
      //setError("Usuário inexistente ou senha inválida");
      setMessage({
        severity: "error",
        text: "Usuário inexistente ou senha inválida!",
        status: 403,
      });
    }
  };
  return (
    <Container>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50%" },
        }}
        onSubmit={onSubmit}
      >
        <TextField
          required
          id="email"
          label="E-mail"
          placeholder="Digite o E-mail"
          onChange={onChange}
          value={email}
        />
        <TextField
          required
          id="password"
          label="Senha"
          onChange={onChange}
          value={password}
          placeholder="Digite a Senha"
          type="password"
        />
        <Button
          sx={{ width: "50%", m: "1%" }}
          size="medium"
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
        >
          Enviar
        </Button>
        {success && (
          <Alert severity="success">Usuário autenticado com sucesso</Alert>
        )}

        {error && <Alert severity="error">{error}</Alert>}

        {message.text ? (
          <Alert severity={message.severity} variant="outlined">
            {message.text}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </Container>
  );
}*/
