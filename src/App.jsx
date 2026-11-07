import './App.css'
import { Router, Route, Switch } from "wouter"
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Juegos from './pages/juegos/Juegos'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/juegos" component={Juegos} />

          <Route>
            <h1>Error 404: Página no encontrada</h1>
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}

export default App
