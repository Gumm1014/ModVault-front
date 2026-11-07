import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contenedor">

        <div className="footer__superior">
          <p className="footer__logo"><span>Mod</span> Vault</p>

          <div className="footer__descubrir">
            <p className="footer__titulo">Descubrir</p>
            <nav className="footer__enlaces">
              <a>Todos los juegos</a>
              <a>Todos los mods</a>
            </nav>
          </div>
        </div>

        <p className="footer__copyright">© 2026 ModVault. Todos los derechos reservados.</p>

      </div>
    </footer>
  )
}

export default Footer