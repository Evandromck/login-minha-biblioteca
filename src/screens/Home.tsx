import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/Menus/SideBar';
import  styled  from 'styled-components';

const Container = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

`

const Home:React.FC = () =>(
    <Container>
        <SideBar />
        <Main Welcome="Bem vindo" route=""/>
    </Container>
)


export default Home;