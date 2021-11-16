import './App.css';
import './stylesheets/index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link/*,
  useRouteMatch,
  useParams*/
} from "react-router-dom";
import Games from "./modules/games"
import Footer from "./modules/footer"
import About from "./modules/about"
import Home from "./modules/home"
import Game from "./modules/game"
import News from './modules/news';

function App() {
  return (
    <div id="appinter">
      <Router  forceRefresh={true}>
        <nav id="menu">
          <ul id="nav">
            <li className="logolist">
              <img src="/logo.svg" className="img-logo-nav" alt="" />
            </li>
            <li>
              <Link to="/" className="links">Início</Link>
            </li>
            <li>
              <Link to="/games" className="links">Jogos</Link>
            </li>
            <li>
              <Link to="/about" className="links">Sobre</Link>
            </li>
          </ul>
          <Link to="/game" className="links" />
          </nav>

          <div id="body">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/games">
                <div className="innerface">
                  <Games />
                </div>
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/">
                <div className="innerface">
                  <Home />
                </div>
              </Route>
              
            </Switch>
          </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;