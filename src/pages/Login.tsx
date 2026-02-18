import "./Login.css"

function Register() {
  return (
    <div className="register-container">
      <div className="card">
        <h1>GEOCARE</h1>

        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellidos" />
        <input type="email" placeholder="Correo" />

        <button>Registrar</button>
      </div>
    </div>
  )
}

export default Register
