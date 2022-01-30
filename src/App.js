import Imglogo from './assets/logo.png'

import './styles.css'



function App() {
  return (
    <div classname="container">
      <div className="container-login">
      
      
      
        <div className="wrap-login">
        
        <form className="login-form">  
        
        <span className="login-form-img">
          <img src={Imglogo} alt="logoicon" />
        </span>
          <span className="login-form-title">Login</span>
          
          <div className="wrap-input">
          <form action='/' method='post'>
           <input className="input" type='text' name='senha' placeholder='E-MAIL'/>
           </form>
           </div>

           <div className="wrap-input">
           <form action='/' method='post'>
           <input className="input" type='text' name='senha' placeholder='SENHA'/>
           </form>
           </div>

          <div className="container-login-form-btn">
            <buttton className="login-form-btn">entrar</buttton>
          </div>

          <div className="txt-center">
          <a className="txt1" href="3">Recuperar senha</a>
          </div>


        </form>
        </div>

      
      </div>
    </div>
  );
}

export default App;
