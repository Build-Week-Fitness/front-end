import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import Classes from './components/Classes';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import Home from "./components/Home";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Everywhere Fitness</h1>
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            {
              props.isLogin ?
                <Link to="/logout">Logout</Link> :
                <Link to="/login">Login</Link>
            }
            <Link to="/classes">Classes</Link>
          </div>
        </nav>
      </header>

      <Switch>

        <ProtectedRoute path="/classes" component={Classes} />

        <Route path="/login" component={Login} />

        <Route path="/logout" component={Logout} />

        <Route path="/register" component={Registration} />

        <Route path="/" component={Home} />

      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return ({
    isLogin: state.loginReducer.isLogin
  })
}

export default connect(mapStateToProps)(App);
