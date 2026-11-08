import Tarjeta_mod from "../../components/Tarjeta_mod/Tarjeta_mod"
import Paginacion from "../../components/Paginacion/Paginacion"
import "./Catalogo.css"

function Catalogo() {
    return (
        <>
            <section className="catalogo-mods__hero">
                <div className="catalogo-mods__hero-encabezado">
                    <img className="catalogo-mods__hero-imagen" src="/juegos/fondo_juego1.png" alt="" />
                    <div className="catalogo-mods__hero-texto">
                        <h2 className="catalogo-mods__hero-titulo">Resident Evil Requiem</h2>
                        <p className="catalogo-mods__hero-descripcion">– Explora los mods creados por la comunidad para Resident Evil Requiem</p>
                    </div>
                </div>
            </section>

            <div className="catalogo-mods">

                <aside className="catalogo-mods__filtros">
                    <div className="catalogo-mods__bloque-orden">
                        <div className="catalogo-mods__orden-caja">
                            <select className="catalogo-mods__orden">
                                <option>Ordenar: Aleatorio</option>
                                <option>Ordenar: Descargas</option>
                                <option>Ordenar: Likes</option>
                            </select>
                            <img className="catalogo-mods__orden-flecha" src="/flecha-icon.svg" alt="" />
                        </div>
                    </div>

                    <div className="catalogo-mods__bloque-categorias">
                        <h3 className="catalogo-mods__categorias-titulo">Categoría</h3>
                        <div className="catalogo-mods__categorias-lista">
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Audio</label>
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Armas</label>
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Enemigos</label>
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Gameplay</label>
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Outfits</label>
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Texturas</label>
                            <label className="catalogo-mods__opcion"><input type="checkbox" />Personajes</label>
                        </div>
                    </div>
                </aside>

                <div className="catalogo-mods__contenido">
                    <div className="catalogo-mods__grilla">
                        <Tarjeta_mod imagen="/mods/mod1.png" titulo="Hunk's axe has been replaced by a diamond axe." juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                        <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                        <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                        <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                        <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                        <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                        <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    </div>

                    <Paginacion />
                </div>

            </div>

        </>
    )
}

export default Catalogo