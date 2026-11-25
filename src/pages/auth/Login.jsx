import { Link } from "wouter"
import "./Auth.css"

function Login() {
    return (
        <div className="auth">
            <form className="auth__tarjeta">
                <h2 className="auth__titulo">Inicio Sesión en ModVault</h2>

                <div className="auth__campo">
                    <label className="auth__etiqueta" htmlFor="login-correo">Correo electronico</label>
                    <div className="auth__caja">
                        <input className="auth__input" id="registro-correo" type="email" />
                        <img className="auth__icono" src="/icons/correo-icon.svg" alt="" />
                    </div>
                </div>

                <div className="auth__campo">
                    <label className="auth__etiqueta" htmlFor="login-contrasena">Contraseña</label>
                    <div className="auth__caja">
                        <input className="auth__input" id="login-contrasena" type="password" />
                        <button className="auth__icono" type="button" aria-label="Mostrar contraseña">
                            <img src="/icons/ojo-cerrado-icon.svg" alt="" />
                        </button>
                    </div>
                </div>

                <button className="auth__boton" type="button">Iniciar Sesión</button>
                <p className="auth__cambio">¿No tenes cuenta? <Link href="/registro">Registrate</Link></p>
            </form>
        </div>
    )
}

export default Login