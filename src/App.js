import "./globals.css";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Dashboard />
    </Router>
  );
}

export default App;
