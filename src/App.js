import "./globals.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <div>Bienvenido a iDoctor</div>
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
