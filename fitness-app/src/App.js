import "./App.css";
import Home from "./components/Home";
import Login from "./components/login";
import { Link, Route, Switch } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Everywhere Fitness</h1>
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </header>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Registration />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Home />
    </div>
  );
}

export default App;
