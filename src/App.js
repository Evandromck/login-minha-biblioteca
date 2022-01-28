import Imgcapa from './assets/capa.png'
import Imglivra from './assets/livraria.png'
import Imgport from './assets/portariaemerj.png'
import Imglogo from './assets/logo.png'



function App() {
  return (
    <div className="container">
      <div className="container-capa">
        <span className="login-form-capa">
          <img src={Imgcapa} alt="capa-front" />
          <img src={Imglivra} alt="livra-front" />
          <img src={Imgport} alt="port-front" />
          <img src={Imglogo} alt="logo-front" />
          <span className="login-form-title">Login</span>
          
          <div className="wrap-input">
            <input type="email" />
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className="wrap-input">
            <input type="password" />
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-form-btn">Login</button>
          </div>

         <div className="text-center">
            <a className="txt1" href="https://www.google.com.br">Recuperar senha</a>
         </div>
          
        </span>
        
      </div>

    </div>
  );
}

export default App;
