import './App.css'
import { Router, Route, Switch } from "wouter"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Juegos from './pages/juegos/Juegos'
import Catalogo from './pages/catalogo_mod/Catalogo'
import DetalleMod from './pages/detalle_mod/DetalleMod'
import Login from './pages/auth/Login'
import Registro from './pages/auth/Registro'
import SubirMod from './pages/subir_mod/SubirMod'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/juegos" component={Juegos} />
          <Route path="/mods" component={Catalogo} />
          <Route path="/mods/1" component={DetalleMod} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Registro} />
          <Route path="/subir" component={SubirMod} />

          <Route>
            <Home />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
