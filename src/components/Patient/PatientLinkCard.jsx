import React from "react";
import styles from "./PatientLinkCard.module.css";

const PatientLinkCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        className={styles.image}
        src="/assets/images/doctor_profile1.jpg"
        alt="patient"
      />
      <h1>JUAN JOSÉ </h1>
      <h2>GONZALES MARTÍNEZ</h2>
      <h2 className={styles.diagnosis}>DIAGNÓSTICO:</h2>
      <h2 className={styles.diagnosisResult}>HEPATITIS A</h2>
      <h2 className={styles.roomNumber}>HABITACION 33</h2>
      <a className={styles.link} href="/pacientes/23">
        VER HISTORIAL
      </a>
    </div>
  );
};

export default PatientLinkCard;
