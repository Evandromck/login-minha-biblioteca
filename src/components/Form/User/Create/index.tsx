import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 400px;
  height: 60vh;
  margin: 5% auto;
  display: flex;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    label {
      display: flex;
      flex-direction: column;
    }
    input {
      line-height: 40px;
      border: solid 1px #888;
      background: none;
      border-radius: 10px;
      padding-left: 10%;
    }
    button {
      line-height: 50px;
    }
  }
`;
const defaultFormData = {
  name: "",
  email: "",
  password: "",
};

//

export default function UserCreateForm() {
  const [formData, setFormData] = useState(defaultFormData);
  const { name, email, password } = formData;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };
}
