import { Link } from "wouter"
import Paginacion from "../../components/Paginacion/Paginacion"
import "./Admin.css"

function AdminMods() {
    return (
        <>
            <div className="admin__barra">
                <h2 className="admin__titulo">Panel de administrador</h2>
                <button className="admin__cerrar" type="button">Cerrar Sesión</button>
            </div>

            <div className="admin__contenido">
                <nav className="admin__tabs">
                    <Link href="/admin" className="admin__tab">Juegos</Link>
                    <Link href="/admin/mods" className="admin__tab admin__tab--activa">Mods</Link>
                </nav>

                <div className="admin__tabla-caja">
                    <table className="admin__tabla">
                        <thead>
                            <tr>
                                <th>Mod</th>
                                <th>Juego</th>
                                <th>Usuario</th>
                                <th aria-label="Acciones"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="admin__mod">
                                        <img src="/mods/mod1.png" alt="" />
                                        <p>Hunk's axe has been replaced by a diamond axe.</p>
                                    </div>
                                </td>
                                <td>Resident Evil Requiem</td>
                                <td>user1014</td>
                                <td><button className="admin__eliminar" type="button">Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="admin__mod">
                                        <img src="/mods/mod1.png" alt="" />
                                        <p>Hunk's axe has been replaced by a diamond axe.</p>
                                    </div>
                                </td>
                                <td>Resident Evil Requiem</td>
                                <td>user1014</td>
                                <td><button className="admin__eliminar" type="button">Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="admin__mod">
                                        <img src="/mods/mod1.png" alt="" />
                                        <p>Hunk's axe has been replaced by a diamond axe.</p>
                                    </div>
                                </td>
                                <td>Resident Evil Requiem</td>
                                <td>user1014</td>
                                <td><button className="admin__eliminar" type="button">Eliminar</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="admin__mod">
                                        <img src="/mods/mod1.png" alt="" />
                                        <p>Hunk's axe has been replaced by a diamond axe.</p>
                                    </div>
                                </td>
                                <td>Resident Evil Requiem</td>
                                <td>user1014</td>
                                <td><button className="admin__eliminar" type="button">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="admin__tabla-pie">
                        <Paginacion />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminMods