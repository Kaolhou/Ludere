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

function App() {
  return (
    <div id="appinter">
      <Router>
        <nav id="menu">
          <ul id="nav">
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
              <Route path="/">
                <div className="innerface">
                  <Home />
                </div>
              </Route>
            </Switch>
          </div>
        <hr className="foot"/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;