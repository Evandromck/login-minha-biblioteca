import React from 'react';
import { BrowserRouter } from 'reac-router-dom'

import Header from './components/Herder';
import Footer from './components/Footer';

import Routes from './Routes';

import './App.css';

function App(){
  return ( 
      <BrowserRouter>
       <Header />

       <Routes />
       
       <Footer />
      </BrowserRouter>
  );
     
}

export default App;









/*import  Routes  from './Routes';

function App() {
 
  return (

    <BrowserRouter>
          <Routes />
    <body className="container">
      
      <div className="container-login">  
      
        <div className="wrap-login">
        

        <span className="login-form-img">          
          <img src={Imglogo}  alt="logoicon" />
        </span> 
        
        <form className="login-form">         
        
          <span className="login-form-title"><em><b>Login</b></em></span>
          
          <div className="wrap-input">
          <form action='/' method='post'>
           <input className="input" type='email' name='email' placeholder='E-MAIL'/>
           </form>
           </div>

           <div className="wrap-input">
           <form action='/' method='post'>
           <input className="input" type='password' name='senha' placeholder='SENHA'/>
           </form>
           </div>

          <div className="container-login-form-btn">
            <buttton className="login-form-btn"><em><b>entrar</b></em></buttton>
          </div>

          <div className="txt-center">
          <a className="txt1" href="2"><em><b>Recuperar senha</b></em></a>
          </div>


        </form>
        </div>

      
      </div>
      </body>  

         
      
      </BrowserRouter>
  );
}

export default App;*/
