//bibliotecas
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
import footer from "./modules/footer"


function App() {
  return (
    <div>
      <Router>
        <div>
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

          <Switch>
            <Route path="/about">
              oi
            </Route>
            <Route path="/games">
              <Games />
            </Route>
            <Route path="/">
              sla
            </Route>
          </Switch>
        </div>
      </Router>
      <footer />
    </div>
  );
}

export default App;
