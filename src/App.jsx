import './App.css'
import { Router, Route, Switch } from "wouter"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Juegos from './pages/juegos/Juegos'
import Catalogo from './pages/catalogo_mod/Catalogo'
import DetalleMod from './pages/detalle_mod/DetalleMod'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/juegos" component={Juegos} />
          <Route path="/mods" component={Catalogo} />
          <Route path="/mods/1" component={DetalleMod} />

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
