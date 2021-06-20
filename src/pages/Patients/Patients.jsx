import React from "react";
import PatientLinkCard from "../../components/Patient/PatientLinkCard";
import styles from "./Patients.module.css";
import Whiteboard from "../../components/General/Whiteboard";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";

const AddPatientCard = () => {
  return (
    <Link className={styles.cardContainer} to="/pacientes/nuevo">
      <div className={styles.icon}>
        <IoIosAddCircle />
      </div>
      <h1>NUEVO PACIENTE </h1>
    </Link>
  );
};
const Patients = () => {
  return (
    <Whiteboard title="MIS PACIENTES">
      <div className={styles.patients}>
        <AddPatientCard />
        <PatientLinkCard />
        <PatientLinkCard />
        <PatientLinkCard />
        <PatientLinkCard />
        <PatientLinkCard />
      </div>
    </Whiteboard>
  );
};

export default Patients;
