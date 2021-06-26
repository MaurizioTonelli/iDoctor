import "./globals.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./pages/Login/Login";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
