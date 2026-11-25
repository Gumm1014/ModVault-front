import Tarjeta_mod from "../../components/Tarjeta_mod/Tarjeta_mod"
import "./SubirMod.css"

function SubirMod() {
  return (
    <>
      <div className="subir-mod__barra">
        <h2 className="subir-mod__usuario">user1014</h2>
        <div className="subir-mod__acciones">
          <button className="subir-mod__cancelar" type="button">Cancelar</button>
          <button className="subir-mod__subir" type="button">Subir mod</button>
        </div>
      </div>

      <div className="subir-mod__cuerpo">
        <form className="subir-mod__formulario">
          <h2 className="subir-mod__titulo">Subir mod</h2>

          <section className="subir-mod__seccion">
            <h3 className="subir-mod__seccion-titulo">Información del mod</h3>

            <div className="subir-mod__fila">
              <div>
                <label className="subir-mod__etiqueta" htmlFor="mod-nombre">Nombre</label>
                <input className="subir-mod__input" id="mod-nombre" type="text" />
              </div>
              <div>
                <label className="subir-mod__etiqueta" htmlFor="mod-version">Versión</label>
                <input className="subir-mod__input" id="mod-version" type="text" />
              </div>
            </div>

            <div className="subir-mod__fila">
              <div>
                <label className="subir-mod__etiqueta" htmlFor="mod-juego">Juego</label>
                <div className="subir-mod__caja">
                  <select className="subir-mod__select" id="mod-juego" defaultValue="">
                    <option value="" disabled hidden></option>
                    <option>Resident Evil Requiem</option>
                    <option>Skyrim Special Edition</option>
                  </select>
                  <img className="subir-mod__flecha" src="/flecha-icon.svg" alt="" />
                </div>
              </div>
              <div>
                <label className="subir-mod__etiqueta" htmlFor="mod-categoria">Categoría</label>
                <div className="subir-mod__caja">
                  <select className="subir-mod__select" id="mod-categoria" defaultValue="">
                    <option value="" disabled hidden></option>
                    <option>Audio</option>
                    <option>Armas</option>
                    <option>Enemigos</option>
                    <option>Gameplay</option>
                    <option>Outfits</option>
                    <option>Texturas</option>
                    <option>Personajes</option>
                  </select>
                  <img className="subir-mod__flecha" src="/flecha-icon.svg" alt="" />
                </div>
              </div>
            </div>

            <div>
              <label className="subir-mod__etiqueta" htmlFor="mod-corta">Descripción corta</label>
              <textarea className="subir-mod__texto subir-mod__texto--corta" id="mod-corta" />
            </div>

            <div>
              <label className="subir-mod__etiqueta" htmlFor="mod-larga">Descripción larga</label>
              <textarea className="subir-mod__texto subir-mod__texto--larga" id="mod-larga" />
            </div>
          </section>

          <section className="subir-mod__seccion">
            <h3 className="subir-mod__seccion-titulo">Imágenes</h3>

            <div>
              <p className="subir-mod__etiqueta">
                Encabezado <span className="subir-mod__opcional">(opcional)</span>
              </p>
              <p className="subir-mod__ayuda">Se muestra como un banner en la parte superior de tu ficha de mod</p>
              <label className="subir-mod__zona">
                <input type="file" accept="image/*" />
                <img src="/icons/mas-icon.svg" alt="" />
                <span>Agregar imagen</span>
              </label>
            </div>

            <div>
              <p className="subir-mod__etiqueta">Imágenes</p>
              <p className="subir-mod__ayuda">Se muestra en una galería en tu ficha de mod</p>
              <label className="subir-mod__zona">
                <input type="file" accept="image/*" multiple />
                <img src="/icons/mas-icon.svg" alt="" />
                <span>Agregar imagen</span>
              </label>
            </div>
          </section>

          <section className="subir-mod__seccion">
            <h3 className="subir-mod__seccion-titulo">Archivo y etiquetas</h3>

            <div>
              <p className="subir-mod__etiqueta">Archivo</p>
              <label className="subir-mod__zona">
                <input type="file" />
                <img src="/icons/mas-icon.svg" alt="" />
                <span>Agregar archivo</span>
              </label>
            </div>

            <div>
              <label className="subir-mod__etiqueta" htmlFor="mod-etiqueta">Etiqueta</label>
              <div className="subir-mod__caja">
                <input className="subir-mod__input" id="mod-etiqueta" type="text" />
                <button className="subir-mod__agregar" type="button" aria-label="Agregar etiqueta">
                  <img src="/icons/arrow-right.svg" alt="" />
                </button>
              </div>
            </div>
          </section>
        </form>

        <aside className="subir-mod__panel">
          <div className="subir-mod__vista">
            <h3 className="subir-mod__vista-titulo">Visualizacion del mod</h3>
            <Tarjeta_mod titulo="-" juego="-" descripcion="-" likes={0} descargas={0} imagen="/vacio.svg" />
          </div>
        </aside>
      </div>
    </>
  )
}

export default SubirMod