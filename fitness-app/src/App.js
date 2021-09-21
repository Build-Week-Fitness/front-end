import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import ProtectedUsersRoute from './components/ProtectedUsersRoute';
import Classes from './components/Classes';
import ClassDetails from './components/ClassDetails';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import Home from "./components/Home";
import ProtectedInstructorsRoute from "./components/ProtectedInstructorsRoute";
import ClassesAdmin from "./components/ClassesAdmin";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Everywhere Fitness</h1>
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/class">Classes</Link>
            {
              props.isLogin ?
                <Link to="/logout">Logout</Link> :
                <Link to="/login">Login</Link>
            }
          </div>
        </nav>
      </header>

      <Switch>

        <ProtectedUsersRoute path="/class/:id" component={ClassDetails} />

        <ProtectedUsersRoute path="/class" component={Classes} />

        <ProtectedInstructorsRoute path="/class-admin" component={ClassesAdmin} />

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
