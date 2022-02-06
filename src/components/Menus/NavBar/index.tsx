import React from "react";
import styled from 'styled-components';



const fontSize = '1.5em';
const color = '#2c3e50';

const H1 = styled.h1`
   font-size: ${fontSize};
   color: ${color};
   
` 

const NavBar:React.FC = () => (
    <>
    <H1>Bem vindo ao curso </H1>
    

    </>
)

export default NavBar