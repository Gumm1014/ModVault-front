import "./Header.css"
import {Link} from "wouter"
function Header() {

  return (
    <header className="header">

      <div className="logo">
        <img src="/logo.png" alt="" />
        <Link href="/home"><h1><span>Mod</span> Vault</h1></Link>
        
      </div>

      <button className="hamburguesa">☰</button>

      <div className="menu">
        <div className="nav">
          <Link href="/juegos"><p>Juegos</p></Link>
          <span className="separador"></span>
          <Link href="/mods"><p>Mods</p></Link>
        </div>
        <div className="btn-login-register">
          <Link href="/registro"><button className="btn-register">Registrarse</button></Link>
          <Link href="/login"><button className="btn-login">Iniciar Sesión</button></Link>
        </div>
      </div>

      <div className="barra-busqueda">
        <img src="/lupa-icon.svg" alt="" />
        <input type="text" placeholder="Buscar..." />
      </div>

    </header>
  )
}

export default Header