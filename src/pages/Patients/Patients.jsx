import React from "react";
import PatientLinkCard from "../../components/Patient/PatientLinkCard";
import styles from "./Patients.module.css";
import Whiteboard from "../../components/General/Whiteboard";
const Patients = () => {
  return (
    <Whiteboard title="MIS PACIENTES">
      <div className={styles.patients}>
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
