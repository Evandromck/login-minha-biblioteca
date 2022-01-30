import Imglogo from './assets/logo.png'

import './styles.css'



function App() {

   

  return (
    <div classname="container">
      <div className="container-login">   

        
        <div className="wrap-login">
        

        <span className="login-form-img">          
          <img src={Imglogo}  alt="logoicon" />
        </span>
        
        <form className="login-form">         
        
          <span className="login-form-title"><em><b>Login</b></em></span>
          
          <div className="wrap-input">
          <form action='/' method='post'>
           <input className="input" type='text' name='email' placeholder='E-MAIL'/>
           </form>
           </div>

           <div className="wrap-input">
           <form action='/' method='post'>
           <input className="input" type='text' name='senha' placeholder='SENHA'/>
           </form>
           </div>

          <div className="container-login-form-btn">
            <buttton className="login-form-btn"><em><b>entrar</b></em></buttton>
          </div>

          <div className="txt-center">
          <a className="txt1" href="3"><em><b>Recuperar senha</b></em></a>
          </div>


        </form>
        </div>

      
      </div>
      </div>     
      
    
  );
}

export default App;
