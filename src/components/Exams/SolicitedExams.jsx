import React from "react";
import CardContainer from "../General/CardContainer";
import { IoMdAddCircle } from "react-icons/io";
import styles from "./SolicitedExams.module.css";
import { Link } from "react-router-dom";

const SolicitedExamItem = (props) => {
  return (
    <Link className={styles.itemContainer} to="/dashboard/examenes/123">
      <div className={styles.date}>{props.date}</div>
      <div className={styles.invoice}>FOLIO: {props.invoice}</div>
      <div className={styles.examName}>{props.children}</div>
      <div className={styles.patientName}>({props.patientName})</div>
      <div
        className={`${styles.status} ${
          props.delivered ? styles.delivered : styles.pending
        }`}
      >
        {props.delivered ? "ENTREGADO" : "PENDIENTE"}
      </div>
    </Link>
  );
};

const SolicitedExams = () => {
  return (
    <CardContainer>
      <h1>EXÁMENES SOLICITADOS</h1>
      <Link to="examenes/nuevo" className={styles.newExam}>
        <IoMdAddCircle />
        SOLICITAR NUEVO EXAMEN
      </Link>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
      <SolicitedExamItem
        date="23/06/2019"
        invoice="3434"
        patientName="Martin Morales Gudiño"
      >
        EXAMEN DE SANGRE
      </SolicitedExamItem>
    </CardContainer>
  );
};

export default SolicitedExams;
