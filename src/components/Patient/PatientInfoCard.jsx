import React from "react";
import styles from "./PatientInfoCard.module.css";
import CardContainer from "../General/CardContainer";
const PatientInfoCard = () => {
  return (
    <CardContainer>
      <h1>DATOS GENERALES DEL PACIENTE</h1>
      <div className={styles.card}>
        <img
          className={styles.patientProfile}
          src="/assets/images/doctor_profile1.jpg"
          alt="patient"
        />
        <div className={styles.info}>
          <h1>NOMBRE</h1>
          <p>JUAN CARLOS GONZALEZ MARTINEZ</p>
          <h1>EDAD</h1>
          <p>40 AÑOS (23 de Marzo del 1997)</p>
        </div>
        <div className={styles.info}>
          <h1>TELEFONO</h1>
          <p>4422324343</p>
          <h1>DOMICILIO</h1>
          <p>Insurgentes Queretanos #22</p>
        </div>
        <div className={styles.info}>
          <h1>TIPO DE SANGRE</h1>
          <p>ORH+</p>
          <h1>ALERGIAS</h1>
          <p>NINGUNA</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default PatientInfoCard;
