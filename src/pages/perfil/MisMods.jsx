import Tarjeta_mod from "../../components/Tarjeta_mod/Tarjeta_mod"
import Paginacion from "../../components/Paginacion/Paginacion"
import "./Perfil.css"

function Perfil() {
    return (
        <>
            <div className="perfil__barra">
                <h2 className="perfil__usuario">user1014</h2>
                <button className="perfil__cerrar" type="button">Cerrar Sesión</button>
            </div>

            <div className="perfil__contenido">
                <nav className="perfil__tabs">
                    <button className="perfil__tab perfil__tab--activa" type="button">Mis Mods</button>
                    <button className="perfil__tab" type="button">Descargados</button>
                </nav>

                <div className="perfil__cabecera">
                    <h2 className="perfil__titulo">Mi contenido</h2>
                    <button className="perfil__subir" type="button">Subir mod</button>
                </div>

                <div className="perfil__grilla">
                    <Tarjeta_mod imagen="/mods/mod1.png" titulo="Hunk's axe has been replaced by a diamond axe." juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod1.png" titulo="Hunk's axe has been replaced by a diamond axe." juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod1.png" titulo="Hunk's axe has been replaced by a diamond axe." juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod1.png" titulo="Hunk's axe has been replaced by a diamond axe." juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                    <Tarjeta_mod imagen="/mods/mod2.png" titulo="Replace Leon to Emily" juego="Resident Evil: Requiem" descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod." likes={26} descargas={153} />
                </div>

                <Paginacion />
            </div>
        </>
    )
}

export default Perfil