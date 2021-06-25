import "./globals.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Switch>
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
