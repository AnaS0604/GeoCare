import { useState } from "react"
import "./Login.css"
import fondo from "./assets/img.png"
{/*import logo from "./assets/Logo1.png"*/}


function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    alert(`Email: ${email}\nPassword: ${password}`)
  }

  return (
    <div
      className="fondo"

      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="fondo-overlay" />

      <div className="login-box">
       {/*<img src={logo} alt="Logo1" className="logo" /> */}

         <h1>GEOCARE</h1> 

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <a href="#" className="login-ora">
          ¿Olvidaste tu contraseña?
        </a>

        <button onClick={login}>Iniciar Sesión</button>
        <button>Registrarse</button>
      </div>
    </div>
  )
}


export default App
