import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/Home.js";
import { Switch, Route } from "react-router-dom";
import Example from "./pages/Example.js";
const Dashboard = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.sideBar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/example">
            <Example />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
