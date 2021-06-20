import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";
import Patient from "./pages/Patients/Patient/Patient.jsx";
import { Switch, Route } from "react-router-dom";
import Patients from "./pages/Patients/Patients.jsx";
import Exams from "./pages/Exams/Exams.jsx";
import Exam from "./pages/Exams/Exam/Exam";
import SolicitExam from "./pages/Exams/SolicitExam/SolicitExam.jsx";
import ExamsToGenerate from "./pages/Exams/ExamsToGenerate.jsx";
import GenerateExam from "./pages/Exams/GenerateExam/GenerateExam.jsx";
import NewPatient from "./pages/Patients/NewPatient/NewPatient.jsx";
import Users from "./pages/Users/Users.jsx";
import NewUser from "./pages/Users/NewUser/NewUser.jsx";
import User from "./pages/Users/User/User.jsx";
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
          <Route exact path="/pacientes">
            <Patients />
          </Route>
          <Route exact path="/pacientes/nuevo">
            <NewPatient />
          </Route>
          <Route path="/pacientes/:id">
            <Patient />
          </Route>
          <Route exact path="/examenes">
            <Exams />
          </Route>
          <Route exact path="/examenes/nuevo">
            <SolicitExam />
          </Route>
          <Route path="/examenes/:id">
            <Exam />
          </Route>
          <Route exact path="/examenesagenerar">
            <ExamsToGenerate />
          </Route>
          <Route path="/examenesagenerar/:id">
            <GenerateExam />
          </Route>
          <Route exact path="/personal">
            <Users />
          </Route>
          <Route exact path="/personal/nuevo">
            <NewUser />
          </Route>
          <Route path="/personal/:id">
            <User />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
