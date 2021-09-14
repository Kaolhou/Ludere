//bibliotecas
import {useEffect/*, useState*/} from 'react';
import './stylesheets/App.css';
//import gmdb from './gmdb';
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
import './stylesheets/index.css'

function App() {
  useEffect(() => {
    document.title = "Portal Abstract"
  }, [])
  return (
    <div>
      <Router>
        <nav id="menu">
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/games">Jogos</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
          </nav>

          <div id="body">
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/games">
                <Games />
              </Route>
              <Route path="/">
                <Home />
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
