import { Link } from "wouter"
import Paginacion from "../../components/Paginacion/Paginacion"
import "./Admin.css"

function AdminJuegos() {
  return (
    <>
      <div className="admin__barra">
        <h2 className="admin__titulo">Panel de administrador</h2>
        <button className="admin__cerrar" type="button">Cerrar Sesión</button>
      </div>

      <div className="admin__contenido">
        <nav className="admin__tabs">
          <Link href="/admin" className="admin__tab admin__tab--activa">Juegos</Link>
          <Link href="/admin/mods" className="admin__tab">Mods</Link>
        </nav>

        <div className="admin__cuerpo">
          <section>
            <div className="admin__grilla">
              <div className="admin__juego">
                <img className="admin__portada" src="/juegos/juego1.png" alt="" />
                <button className="admin__editar" type="button">Editar</button>
              </div>
              <div className="admin__juego">
                <img className="admin__portada" src="/juegos/juego2.png" alt="" />
                <button className="admin__editar" type="button">Editar</button>
              </div>
              <div className="admin__juego">
                <img className="admin__portada" src="/juegos/juego3.png" alt="" />
                <button className="admin__editar" type="button">Editar</button>
              </div>
              <div className="admin__juego">
                <img className="admin__portada" src="/juegos/juego4.png" alt="" />
                <button className="admin__editar" type="button">Editar</button>
              </div>
            </div>

            <Paginacion />
          </section>

          <form className="admin__panel">
            <h3 className="admin__panel-titulo">Agregar Juego</h3>

            <div>
              <label className="admin__etiqueta" htmlFor="juego-nombre">Nombre</label>
              <input className="admin__input" id="juego-nombre" type="text" />
            </div>

            <div>
              <p className="admin__etiqueta">Portada</p>
              <label className="admin__zona">
                <input type="file" accept="image/*" />
                <img src="/icons/mas-icon.svg" alt="" />
                <span>Agregar imagen</span>
              </label>
            </div>

            <div>
              <p className="admin__etiqueta">Icono</p>
              <label className="admin__zona">
                <input type="file" accept="image/*" />
                <img src="/icons/mas-icon.svg" alt="" />
                <span>Agregar imagen</span>
              </label>
            </div>

            <div>
              <p className="admin__etiqueta">Encabezado</p>
              <label className="admin__zona">
                <input type="file" accept="image/*" />
                <img src="/icons/mas-icon.svg" alt="" />
                <span>Agregar imagen</span>
              </label>
            </div>

            <button className="admin__subir" type="button">Subir</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AdminJuegos