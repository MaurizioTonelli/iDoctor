import React from "react";
import styles from "./PatientLinkCard.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

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
      <a className={styles.link} href="/dashboard/pacientes/23">
        VER HISTORIAL
      </a>
      <div className={styles.options}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default PatientLinkCard;
