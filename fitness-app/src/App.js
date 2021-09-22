import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedUsersRoute from "./components/ProtectedUsersRoute";
import Classes from "./components/Classes";
import ClassDetails from "./components/ClassDetails";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";
import Home from "./components/Home";
import ProtectedInstructorsRoute from "./components/ProtectedInstructorsRoute";
import ClassesAdmin from "./components/ClassesAdmin";
import EditForm from "./components/EditForm";
import AddClass from "./components/AddClass";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anywhere Fitness</h1>
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            {
              localStorage.getItem("role") === "0" && <Link to="/class">Classes</Link>
            }
            {
              localStorage.getItem("role") === "1" && <Link to="/class-admin">View classes</Link>
            }
            {/* {
              localStorage.getItem("role") === '1' && <Link to="/add-class">Add a class</Link>
            } */}
            {
              props.isLogin ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>
            }
          </div>
        </nav>
      </header>

      <Switch>
        <ProtectedUsersRoute path="/class/:id" component={ClassDetails} />

        <ProtectedUsersRoute path="/class" component={Classes} />

        <ProtectedInstructorsRoute path="/add-class" component={AddClass} />

        <ProtectedInstructorsRoute
          path="/class-admin/edit-form/:id"
          component={EditForm}
        />

        <ProtectedInstructorsRoute
          path="/class-admin"
          component={ClassesAdmin}
        />

        <Route path="/login" component={Login} />

        <Route path="/logout" component={Logout} />

        <Route path="/register" component={Registration} />

        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.loginReducer.isLogin,
  };
};

export default connect(mapStateToProps)(App);
