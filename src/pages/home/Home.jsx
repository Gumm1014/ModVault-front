import "./Home.css"
import Tarjeta_mod from "../../components/Tarjeta_mod/Tarjeta_mod"
import ModFila from "../../components/ModFila/ModFila"
import { Link } from "wouter"
import { useState, useEffect } from "react";
import api from "../../services/api";
function Home() {

    const [mods, setMods] = useState([]);
    const [juegos, setJuegos] = useState([]);

    useEffect(() => {
        traerMods();
        traerJuegos();
    }, []);

    const traerMods = () => {
        api.get("/mods")
            .then((resp) => {
                console.log(resp.data);
                setMods(resp.data.mods);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const traerJuegos = () => {
        api.get("/juegos")
            .then((resp) => {
                console.log(resp.data);
                setJuegos(resp.data.juegos);
            })
            .catch((error) => {
                console.error(error);
            });
    }

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
                    <Link href="/juegos"><div className="flecha--text">
                        <p>Ver todos los juegos</p>
                        <img src="./flecha.svg" alt="" />
                    </div></Link>
                </div>

                <div className="contenido--juego">
                    {juegos.map((juego) => (
                        <img src={`http://localhost:3000/archivos/${juego.portada}`} alt="" />
                    ))}
                </div>

            </section>

            <section className="catalogo--mods">
                <div className="catalogo--mods__titulo">
                    <h2>Mods</h2>
                </div>

                <div className="listado--mods">
                    {mods.map((mod) => (
                        <Tarjeta_mod
                            key={mod.id_mod}
                            imagen={`http://localhost:3000/archivos/${mod.imagen}`}
                            titulo={mod.nombre}
                            juego={mod.nombre_juego}
                            descripcion={mod.descripcion_corta}
                            likes={mod.likes}
                            descargas={mod.descargas}
                        />
                    ))}
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
