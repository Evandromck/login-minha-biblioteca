/* eslint-disable jsx-a11y/alt-text */
import React from 'react';


import { AreaHeader } from './styled'

function Hearder(){
    return(
        
        <AreaHeader>
          <body className="container">
      
      <div className="container-login">  
      
        <div className="wrap-login">
        
       <div className="logo">
           
           < img  src = "../../../logo.png"  alt = ""  />
       </div>
        
        
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
        </AreaHeader>
        
    );
}

export default Hearder;