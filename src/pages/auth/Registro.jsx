import { Link } from "wouter"
import "./Auth.css"

function Registro() {
    return (
        <div className="auth">
            <form className="auth__tarjeta">
                <h2 className="auth__titulo">Registrarse</h2>

                <div className="auth__campo">
                    <label className="auth__etiqueta" htmlFor="registro-usuario">Nombre de usuario</label>
                    <input className="auth__input" id="registro-usuario" type="text" />
                </div>

                <div className="auth__campo">
                    <label className="auth__etiqueta" htmlFor="registro-correo">Correo electronico</label>
                    <div className="auth__caja">
                        <input className="auth__input" id="registro-correo" type="email" />
                        <img className="auth__icono" src="/icons/correo-icon.svg" alt="" />
                    </div>
                </div>

                <div className="auth__campo">
                    <label className="auth__etiqueta" htmlFor="registro-contrasena">Contraseña</label>
                    <div className="auth__caja">
                        <input className="auth__input" id="registro-contrasena" type="password" />
                        <button className="auth__icono" type="button" aria-label="Mostrar contraseña">
                            <img src="/icons/ojo-cerrado-icon.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className="auth__campo">
                    <label className="auth__etiqueta" htmlFor="registro-confirmar">Confirmar contraseña</label>
                    <div className="auth__caja">
                        <input className="auth__input" id="registro-confirmar" type="password" />
                        <button className="auth__icono" type="button" aria-label="Mostrar contraseña">
                            <img src="/icons/ojo-cerrado-icon.svg" alt="" />
                        </button>
                    </div>
                </div>

                <button className="auth__boton" type="button">Registrarse</button>
                <p className="auth__cambio">¿Ya tenes cuenta? <Link href="/login">Inicia sesión</Link></p>
            </form>
        </div>
    )
}

export default Registro