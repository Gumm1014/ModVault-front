import "./Tarjeta_mod.css"

function Tarjeta_mod({ imagen, titulo, juego, descripcion, likes, descargas }) {
  return (
    <div className="mod-tarjeta">
      <img className="mod-tarjeta__imagen" src={imagen} alt="" />

      <div className="mod-tarjeta__section">
        <h3 className="mod-tarjeta__titulo">{titulo}</h3>
        <div className="mod-tarjeta__juego">
          <span className="mod-tarjeta__etiqueta">{juego}</span>
        </div>
        <p className="mod-tarjeta__descripcion">{descripcion}</p>
      </div>

      <div className="mod-tarjeta__footer">
        <span className="mod-tarjeta__dato">
          <img src="/like-icon.svg" alt="" />
          {likes}
        </span>
        <span className="mod-tarjeta__dato">
          <img src="/descarga-icon.svg"/>
          {descargas}
        </span>
      </div>
    </div>
  )
}

export default Tarjeta_mod