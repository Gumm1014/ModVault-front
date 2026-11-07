import "./ModFila.css"

function ModFila({ imagen, juego, titulo, valor, icono }) {
  return (
    <div className="mod-fila">
      <img className="mod-fila__imagen" src={imagen} alt="" />

      <div className="mod-fila__info">
        <p className="mod-fila__juego">{juego}</p>
        <h3 className="mod-fila__titulo">{titulo}</h3>
        <span className="mod-fila__dato">
          <img src={icono} alt="" />
          {valor}
        </span>
      </div>
    </div>
  )
}

export default ModFila