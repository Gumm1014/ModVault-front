import "./Paginacion.css"

function Paginacion() {
  return (
    <nav className="paginacion">
      <button className="paginacion__flecha">
        <img src="flecha-icon.svg" alt="" />
      </button>

      <button className="paginacion__pagina paginacion__pagina--activa">1</button>
      <button className="paginacion__pagina">2</button>
      <button className="paginacion__pagina">3</button>
      <button className="paginacion__pagina">4</button>

      <button className="paginacion__flecha paginacion__flecha--derecha">
        <img src="flecha-icon.svg" alt="" />
      </button>
    </nav>
  )
}

export default Paginacion