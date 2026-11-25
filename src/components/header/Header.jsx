import "./Header.css"
import { Link } from "wouter"
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

        <div className="btn-login-register oculto">
          <Link href="/registro"><button className="btn-register">Registrarse</button></Link>
          <Link href="/login"><button className="btn-login">Iniciar Sesión</button></Link>
        </div>
      </div>

      <Link href="/perfil" className="usuario-header">
        <div className="usuario-header__avatar">
          <img src="/icons/perfil-icon.png" alt="" />
        </div>
        <p className="usuario-header__nombre">user1014</p>
      </Link>

      <div className="barra-busqueda">
        <img src="/lupa-icon.svg" alt="" />
        <input type="text" placeholder="Buscar..." />
      </div>

      <div className="resultados oculto">
        <div className="resultados__fondo"></div>

        <div className="resultados__panel">
          <section className="resultados__juegos">
            <h3 className="resultados__titulo">Juegos</h3>
            <div className="resultados__juegos-lista">
              <Link href="/juegos/1" className="resultados__juego">
                <img src="/juegos/icon1.png" alt="" />
                <p>Fallout New Vegas</p>
              </Link>
              <Link href="/juegos/2" className="resultados__juego">
                <img src="/juegos/icon2.png" alt="" />
                <p>Fallout 4</p>
              </Link>
              <Link href="/juegos/3" className="resultados__juego">
                <img src="/juegos/icon3.png" alt="" />
                <p>Fallout 3</p>
              </Link>
              <Link href="/juegos/4" className="resultados__juego">
                <img src="/juegos/icon4.png" alt="" />
                <p>Fallout 76</p>
              </Link>
            </div>
          </section>

          <section className="resultados__mods">
            <h3 className="resultados__titulo">Mods</h3>
            <div className="resultados__mods-lista">
              <Link href="/mods/1" className="resultados__mod">
                <img src="/mods/mod13.png" alt="" />
                <div className="resultados__mod-info">
                  <p className="resultados__mod-juego">Fallout 4</p>
                  <p className="resultados__mod-titulo">Unofficial Fallout 4 Patch – UFO4P</p>
                </div>
              </Link>
              <Link href="/mods/1" className="resultados__mod">
                <img src="/mods/mod13.png" alt="" />
                <div className="resultados__mod-info">
                  <p className="resultados__mod-juego">Fallout 4</p>
                  <p className="resultados__mod-titulo">Unofficial Fallout 4 Patch – UFO4P</p>
                </div>
              </Link>
              <Link href="/mods/1" className="resultados__mod">
                <img src="/mods/mod13.png" alt="" />
                <div className="resultados__mod-info">
                  <p className="resultados__mod-juego">Fallout 4</p>
                  <p className="resultados__mod-titulo">Unofficial Fallout 4 Patch – UFO4P</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>

    </header>
  )
}

export default Header