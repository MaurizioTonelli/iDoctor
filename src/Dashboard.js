import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import styles from "./Dashboard.module.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Home from "./pages/Home/Home.jsx";
import Patient from "./pages/Patients/Patient/Patient.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
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
import Consultations from "./pages/Consultations/Consultations.jsx";
import Consultation from "./pages/Consultations/Consultation/Consultation.jsx";
import NewConsultation from "./pages/Consultations/New Consultation/NewConsultation.jsx";
import axios from "axios";
import appData from "./assets/data/appData.js";
import UserContext from "./UserContext.js";

const DashboardContent = () => {
  return (
    <>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.sideBar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Switch>
          <Route exact path="/dashboard/">
            <Home />
          </Route>
          <Route exact path="/dashboard/pacientes">
            <Patients />
          </Route>
          <Route exact path="/dashboard/pacientes/nuevo">
            <NewPatient />
          </Route>
          <Route path="/dashboard/pacientes/:id">
            <Patient />
          </Route>
          <Route exact path="/dashboard/examenes">
            <Exams />
          </Route>
          <Route exact path="/dashboard/examenes/nuevo">
            <SolicitExam />
          </Route>
          <Route path="/dashboard/examenes/:id">
            <Exam />
          </Route>
          <Route exact path="/dashboard/examenesagenerar">
            <ExamsToGenerate />
          </Route>
          <Route path="/dashboard/examenesagenerar/:id">
            <GenerateExam />
          </Route>
          <Route exact path="/dashboard/personal">
            <Users />
          </Route>
          <Route exact path="/dashboard/personal/nuevo">
            <NewUser />
          </Route>
          <Route path="/dashboard/personal/:id">
            <User />
          </Route>
          <Route exact path="/dashboard/consultas">
            <Consultations />
          </Route>
          <Route exact path="/dashboard/consultas/nueva">
            <NewConsultation />
          </Route>
          <Route path="/dashboard/consultas/:id">
            <Consultation />
          </Route>
        </Switch>
      </div>
    </>
  );
};

const Dashboard = () => {
  const [user, setUser] = useState({ isLoading: true });
  useEffect(() => {
    axios
      .get(appData.apiUrl + "/userData", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      });
  }, []);
  const userResult = useContext(UserContext);
  if (user.isLoading) {
    return <div>Cargando...</div>;
  } else if (!user.isLoading && user) {
    return (
      <div className={styles.appContainer}>
        <UserContext.Provider value={user}>
          <DashboardContent />
        </UserContext.Provider>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default Dashboard;
