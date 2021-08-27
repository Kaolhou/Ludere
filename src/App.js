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


function App() {
  return (
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
            alo
          </Route>
          <Route path="/">
            sla
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
