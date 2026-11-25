import "./Juego.css"
import Paginacion from "../../components/Paginacion/Paginacion"
function Juegos() {
    return (
        <div className="catalogo">
            <section className="catalogo__juegos">
                <h2 className="catalogo__titulo">Todos los juegos</h2>
                <p className="catalogo__subtitulo">Elige uno entre todos los juegos para poder moddear</p>

                <div className="catalogo__juegos--grilla">
                    <img src="/juegos/juego5.png" alt="portada" />
                    <img src="/juegos/juego4.png" alt="portada" />
                    <img src="/juegos/juego6.png" alt="portada" />
                    <img src="/juegos/juego1.png" alt="portada" />
                    <img src="/juegos/juego7.png" alt="portada" />
                    <img src="/juegos/juego8.png" alt="portada" />
                    <img src="/juegos/juego2.png" alt="portada" />
                    <img src="/juegos/juego3.png" alt="portada" />
                    <img src="/juegos/juego9.png" alt="portada" />
                    <img src="/juegos/juego10.png" alt="portada" />
                    <img src="/juegos/juego11.png" alt="portada" />
                    <img src="/juegos/juego12.png" alt="portada" />
                </div>

                <Paginacion />

            </section>
        </div>
    )
}

export default Juegos