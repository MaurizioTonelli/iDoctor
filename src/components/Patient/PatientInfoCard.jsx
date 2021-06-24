import React from "react";
import styles from "./PatientInfoCard.module.css";
import CardContainer from "../General/CardContainer";
import appData from "../../assets/data/appData";
import moment from "moment";

const PatientInfoCard = (props) => {
  let date = new Date(props.patient.birthDate);
  let readableDate = moment(date).format("YYYY-MM-DD");
  const getReadableBloodType = (str) => {
    if (str === "opositive") {
      return "ORH+";
    }
    if (str === "onegative") {
      return "ORH-";
    }
    if (str === "apositive") {
      return "ARH+";
    }
    if (str === "anegative") {
      return "ARH-";
    }
    if (str === "bpositive") {
      return "BRH+";
    }
    if (str === "bnegative") {
      return "BRH-";
    }
    if (str === "abpositive") {
      return "ABRH+";
    }
    if (str === "abnegative") {
      return "ABRH-";
    }
  };
  return (
    <CardContainer>
      <h1>DATOS GENERALES DEL PACIENTE</h1>

      <div className={styles.card}>
        <img
          className={styles.patientProfile}
          src={appData.apiUrl + "/images/" + props.patient.profileImage}
          alt="patient"
        />
        <div className={styles.info}>
          <h1>NOMBRE</h1>
          <p>{props.patient.name}</p>
          <h1>FECHA DE NACIMIENTO</h1>
          <p>{readableDate}</p>
        </div>
        <div className={styles.info}>
          <h1>TELEFONO</h1>
          <p>{props.patient.phone}</p>
          <h1>DOMICILIO</h1>
          <p>{props.patient.address}</p>
        </div>
        <div className={styles.info}>
          <h1>TIPO DE SANGRE</h1>
          <p>{getReadableBloodType(props.patient.bloodType)}</p>
          <h1>ALERGIAS</h1>
          <p>{props.patient.allergies}</p>
        </div>
      </div>
    </CardContainer>
  );
};

export default PatientInfoCard;
