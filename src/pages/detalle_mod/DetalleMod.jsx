import "./DetalleMod.css"

function DetalleMod() {
    return (
        <>
            <section className="ficha-mod__hero">
                <div className="ficha-mod__hero-encabezado">
                    <img className="ficha-mod__hero-imagen" src="/mods/fondo_mod1.png" alt="" />
                    <div className="ficha-mod__hero-texto">
                        <h2 className="ficha-mod__hero-titulo">Hunk's axe has been replaced by a diamond axe.</h2>
                        <div className="ficha-mod__hero-datos">
                            <span className="ficha-mod__hero-dato">
                                <img src="/like-icon.svg" alt="" />26 Me gusta
                            </span>
                            <span className="ficha-mod__hero-dato">
                                <img src="/descarga-icon.svg" alt="" />153 Descargas
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ficha-mod__galeria">
                <div className="ficha-mod__galeria-lista">
                    <img src="/mods/mod1.png" alt="" />
                    <img src="/mods/mod1.png" alt="" />
                    <img src="/mods/mod1.png" alt="" />
                    <img src="/mods/mod1.png" alt="" />
                    <img src="/mods/mod1.png" alt="" />

                </div>
            </section>

            <section className="ficha-mod__contenido">
                <div className="ficha-mod__sobre">
                    <h2 className="ficha-mod__sobre-titulo">Sobre este mod</h2>
                    <p className="ficha-mod__descripcion-corta">
                        El escuadrón hunk ha pasado a utilizar hachas de diamante como armas de combate cuerpo a cuerpo.
                    </p>
                    <p className="ficha-mod__descripcion-larga">{`Notes:
                    This mod is not compatible with Expanded Arsenal by default.
                    Merges with that mod are included in the zip with full permission from the author.
                    The mod works with Dodge Sprint and Kick but has issues with its push mechanic.
                    Up to the original author to fix this.

                    Three versions packaged:
                    1. Main — Gives Grace Leon's hatchet (knife combat remains the same)
                    2. Knife Version — Ports Leon's hatchet combat to Grace's knives
                    3. A standalone mod that allows Grace to throw weapons dropped by zombies.

                    Manual Installation
                    1. Download the latest .zip from the Files tab.
                    2. Navigate to Resident Evil Requiem's game folder.
                    3. Extract the reframework folder located within the downloaded .zip into your game folder`}</p>
                                    </div>

                <aside className="ficha-mod__info">
                    <div className="ficha-mod__fila">
                        <div>
                            <h3 className="ficha-mod__dato-titulo">Creador</h3>
                            <p className="ficha-mod__dato-valor">user1014</p>
                        </div>
                        <div>
                            <h3 className="ficha-mod__dato-titulo">Categoría</h3>
                            <p className="ficha-mod__dato-valor">Armas</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="ficha-mod__dato-titulo">Fecha de subida</h3>
                        <p className="ficha-mod__dato-valor">10 de Octubre 2026</p>
                    </div>

                    <div>
                        <h3 className="ficha-mod__dato-titulo">Etiquetas</h3>
                        <div className="ficha-mod__etiquetas">
                            <span className="ficha-mod__etiqueta">Hacha</span>
                            <span className="ficha-mod__etiqueta">Hunk</span>
                            <span className="ficha-mod__etiqueta">Texturas</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="ficha-mod__dato-titulo">Archivo</h3>
                        <p className="ficha-mod__dato-valor">hunk_axe_1.2.zip</p>
                    </div>

                    <div className="ficha-mod__descarga">
                        <p className="ficha-mod__dato-valor">Versión: 1.2</p>
                        <button className="ficha-mod__boton">
                            <img src="/descarga-icon1.svg" alt="" />Descargar
                        </button>
                    </div>
                </aside>
            </section>
        </>
    )
}

export default DetalleMod