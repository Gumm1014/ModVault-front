import "./Home.css"
import Tarjeta_mod from "../../components/Tarjeta_mod/Tarjeta_mod"
import ModFila from "../../components/ModFila/ModFila"
import { Link } from "wouter"
function Home() {

    return (
        <div className="home">
            <section className="hero">
                <div className="hero__contenido">
                    <div className="hero__principal">
                        <Link href="/mods/1"><img src="/mods/mod1.png" alt="" /></Link>
                        <div className="hero__etiquetas">
                            <span className="hero__etiqueta">Hunk's axe has been replaced by a diamond axe.</span>
                            <span className="hero__etiqueta">Resident Evil: Requiem</span>
                        </div>
                    </div>

                    <div className="hero__galeria hero__galeria--apagado">
                        <img src="/mods/mod1.png" alt="" />
                        <img src="/mods/mod2.png" alt="" />
                        <img src="/mods/mod3.png" alt="" />
                        <img src="/mods/mod4.png" alt="" />
                        <img src="/mods/mod5.png" alt="" />
                        <img src="/mods/mod6.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="seccion--juegos">
                <div className="juegos__text">
                    <h2>Juegos</h2>
                    <div className="flecha--text">
                        <p>Ver todos los juegos</p>
                        <img src="./flecha.svg" alt="" />
                    </div>

                </div>

                <div className="contenido--juego">
                    <img src="/juegos/juego1.png" alt="" />
                    <img src="/juegos/juego2.png" alt="" />
                    <img src="/juegos/juego3.png" alt="" />
                    <img src="/juegos/juego4.png" alt="" />
                </div>

            </section>

            <section className="catalogo--mods">
                <div className="catalogo--mods__titulo">
                    <h2>Mods</h2>
                </div>
                
                <div className="listado--mods">

                    <Tarjeta_mod
                        imagen="/mods/mod7.png"
                        titulo="Gun tricks"
                        juego="Red Dead Redemtion 2"
                        descripcion="This mod aims to bring the gun spinning tricks from red dead online to story mode."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod2.png"
                        titulo="Replace Leon to Emily"
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod8.png"
                        titulo="Spell Perk Item Distributor"
                        juego="Fallout 4"
                        descripcion="A F4SE plugin that can be used to add spells/perks/items and more, to every NPC in the game, using config files."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod9.png"
                        titulo="Unofficial Patch NVSE Plus"
                        juego="Fallout New Vegas"
                        descripcion="An updated and refined selection of bugfixes (mostly) requiring NVSE."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod10.png"
                        titulo="Fuz Ro D-oh - Silent Voice"
                        juego="Skyrim Special Edition"
                        descripcion="A SKSE64 plugin that adds support for unvoiced in-game dialog,"
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                    <Tarjeta_mod
                        imagen="/mods/mod1.png"
                        titulo="Hunk's axe has been replaced by a diamond axe."
                        juego="Resident Evil: Requiem"
                        descripcion="Leon reads Emily's appearance. Any mod that alters Emily's appearance will affect this mod."
                        likes={26}
                        descargas={153}
                    />
                </div>

            </section>

            <section className="rankings">
                <div className="rankings__contenedor">

                    <div className="rankings__columna">
                        <h2 className="rankings__titulo">Mods más valorados</h2>
                        <div className="rankings__lista">
                            <ModFila imagen="/mods/mod1.png" juego="Resident Evil: Requiem" titulo="Hunk's axe has been replaced by a diamond axe." valor={26} icono="/like-icon.svg" />
                            <ModFila imagen="/mods/mod2.png" juego="Resident Evil: Requiem" titulo="Replace Leon to Emily" valor={26} icono="/like-icon.svg" />
                            <ModFila imagen="/mods/mod11.png" juego="Fallout 4" titulo="Browning Hi-Power - A New Vegas Classic" valor={26} icono="/like-icon.svg" />
                            <ModFila imagen="/mods/mod12.png" juego="Red Dead Redemption 2" titulo="WhyEm's DLC" valor={26} icono="/like-icon.svg" />
                            <ModFila imagen="/mods/mod10.png" juego="Skyrim Special Edition" titulo="Fuz Ro D-oh - Silent Voice" valor={26} icono="/like-icon.svg" />
                        </div>
                    </div>

                    <div className="rankings__columna">
                        <h2 className="rankings__titulo">Mods más descargados</h2>
                        <div className="rankings__lista">
                            <ModFila imagen="/mods/mod1.png" juego="Resident Evil: Requiem" titulo="Hunk's axe has been replaced by a diamond axe." valor={26} icono="/descarga-icon.svg" />
                            <ModFila imagen="/mods/mod2.png" juego="Resident Evil: Requiem" titulo="Replace Leon to Emily" valor={26} icono="/descarga-icon.svg" />
                            <ModFila imagen="/mods/mod11.png" juego="Fallout 4" titulo="Browning Hi-Power - A New Vegas Classic" valor={26} icono="/descarga-icon.svg" />
                            <ModFila imagen="/mods/mod12.png" juego="Red Dead Redemption 2" titulo="WhyEm's DLC" valor={26} icono="/descarga-icon.svg" />
                            <ModFila imagen="/mods/mod10.png" juego="Skyrim Special Edition" titulo="Fuz Ro D-oh - Silent Voice" valor={26} icono="/descarga-icon.svg" />
                        </div>
                    </div>

                </div>
            </section>

            
        </div>
    )
}

export default Home
